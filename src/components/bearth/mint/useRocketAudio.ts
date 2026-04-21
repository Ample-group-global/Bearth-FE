"use client";
import { useEffect, useRef } from "react";
import { getAudioContext, unlockAudioContext } from "@/lib/audioContext";

type AudioBuffers = {
  sent?: AudioBuffer;
  loop?: AudioBuffer;
};

type PlayingNode = { source: AudioBufferSourceNode; gain: GainNode };

export function useRocketAudio() {
  const ctxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<AudioBuffers>({});
  const launchNodeRef = useRef<PlayingNode | null>(null);
  const loopNodeRef = useRef<PlayingNode | null>(null);
  const hasPlayedRef = useRef(false);
  const buffersLoadedRef = useRef(false);

  useEffect(() => {
    const ctx = getAudioContext() ?? unlockAudioContext();
    ctxRef.current = ctx;

    const load = (url: string) =>
      fetch(url)
        .then((r) => r.arrayBuffer())
        .then((ab) => ctx.decodeAudioData(ab));

    Promise.all([
      load("/assets/rocket-sent.mp3"),
      load("/assets/rocket-loop.mp3"),
    ])
      .then(([sent, loop]) => {
        buffersRef.current = { sent, loop };
        buffersLoadedRef.current = true;
      })
      .catch((e) => console.error("Audio load failed:", e));

    return () => {
      try {
        launchNodeRef.current?.source.stop();
      } catch {
        /* already stopped */
      }
      try {
        loopNodeRef.current?.source.stop();
      } catch {
        /* already stopped */
      }
      // Don't close ctx — it's a module singleton shared across navigations
    };
  }, []);

  const stopWithFade = (
    nodeRef: React.MutableRefObject<PlayingNode | null>,
    fadeMs = 120,
  ) => {
    const ctx = ctxRef.current;
    const node = nodeRef.current;
    if (!ctx || !node) return;
    try {
      const t = ctx.currentTime;
      node.gain.gain.cancelScheduledValues(t);
      node.gain.gain.setValueAtTime(node.gain.gain.value, t);
      node.gain.gain.linearRampToValueAtTime(0, t + fadeMs / 1000);
      node.source.stop(t + fadeMs / 1000);
    } catch {
      /* already stopped */
    }
    nodeRef.current = null;
  };

  const playBuffer = (
    buffer: AudioBuffer | undefined,
    opts: { loop?: boolean; fadeInMs?: number } = {},
  ): PlayingNode | null => {
    const ctx = ctxRef.current;
    if (!ctx || !buffer) return null;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = !!opts.loop;
    const gain = ctx.createGain();
    const t = ctx.currentTime;
    if (opts.fadeInMs) {
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(1, t + opts.fadeInMs / 1000);
    } else {
      gain.gain.value = 1;
    }
    source.connect(gain);
    gain.connect(ctx.destination);
    source.start(t);
    return { source, gain };
  };

  const tryPlaySent = () => {
    const ctx = ctxRef.current;
    if (!ctx || hasPlayedRef.current || !buffersLoadedRef.current) return false;
    if (ctx.state !== "running") return false;
    hasPlayedRef.current = true;
    launchNodeRef.current = playBuffer(buffersRef.current.sent);
    return true;
  };

  return {
    tryPlaySent,
    unlockAndPlay: () => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.resume().then(() => {
        const attempt = () => {
          if (tryPlaySent()) return;
          if (!buffersLoadedRef.current) setTimeout(attempt, 50);
        };
        attempt();
      });
    },
    // Called when sent video ends → transition to loop
    startLoop: () => {
      stopWithFade(launchNodeRef, 150);
      loopNodeRef.current = playBuffer(buffersRef.current.loop, {
        loop: true,
        fadeInMs: 150,
      });
    },
    // Called when loop video ends → transition to complete + replay launch
    stopLoopAndReplayLaunch: () => {
      stopWithFade(loopNodeRef, 150);
      launchNodeRef.current = playBuffer(buffersRef.current.sent, {
        fadeInMs: 50,
      });
    },
    // Called when complete video ends → fade everything out
    stopAll: () => {
      stopWithFade(launchNodeRef, 300);
      stopWithFade(loopNodeRef, 300);
    },
  };
}
