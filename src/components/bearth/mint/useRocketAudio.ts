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
    if (!ctx) return;
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

  const makeDistortionCurve = (amount: number) => {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < samples; i++) {
      const x = (i * 2) / samples - 1;
      curve[i] =
        ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
  };

  const playBuffer = (
    buffer: AudioBuffer | undefined,
    opts: {
      loop?: boolean;
      fadeInMs?: number;
      playbackRate?: number;
      detune?: number;
      wobbleHz?: number;
      wobbleCents?: number;
      highPass?: number;
      peakGain?: number;
    } = {},
  ): PlayingNode | null => {
    const ctx = ctxRef.current;
    if (!ctx || !buffer) return null;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = !!opts.loop;
    if (opts.playbackRate) source.playbackRate.value = opts.playbackRate;
    if (opts.detune) source.detune.value = opts.detune;

    const t = ctx.currentTime;

    // Cartoon wobble: LFO modulates detune (vibrato) for a goofy, bouncy voice
    let lfo: OscillatorNode | null = null;
    let lfoGain: GainNode | null = null;
    if (opts.wobbleHz && opts.wobbleCents) {
      lfo = ctx.createOscillator();
      lfo.frequency.value = opts.wobbleHz;
      lfoGain = ctx.createGain();
      lfoGain.gain.value = opts.wobbleCents;
      lfo.connect(lfoGain);
      lfoGain.connect(source.detune);
      lfo.start(t);
    }

    // High-pass to thin out the bass → makes it sound tinny/cartoonish
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = opts.highPass ?? 350;

    // Midrange "honk" boost for that squeaky toy flavor
    const peaking = ctx.createBiquadFilter();
    peaking.type = "peaking";
    peaking.frequency.value = 1800;
    peaking.Q.value = 1.2;
    peaking.gain.value = 8;

    const gain = ctx.createGain();
    const peak = opts.peakGain ?? 1.6;
    if (opts.fadeInMs) {
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(peak, t + opts.fadeInMs / 1000);
    } else {
      gain.gain.value = peak;
    }

    source.connect(hp);
    hp.connect(peaking);
    peaking.connect(gain);
    gain.connect(ctx.destination);
    source.start(t);

    source.onended = () => {
      try {
        lfo?.stop();
      } catch {
        /* already stopped */
      }
    };

    return { source, gain };
  };

  const tryPlaySent = () => {
    const ctx = ctxRef.current;
    if (!ctx || hasPlayedRef.current || !buffersLoadedRef.current) return false;
    if (ctx.state !== "running") return false;
    hasPlayedRef.current = true;
    launchNodeRef.current = playBuffer(buffersRef.current.sent, {
      playbackRate: 1.45,
      wobbleHz: 7,
      wobbleCents: 60,
      highPass: 400,
      peakGain: 1.5,
    });
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
        playbackRate: 1.35,
        wobbleHz: 5.5,
        wobbleCents: 90,
        highPass: 300,
        peakGain: 1.4,
      });
    },
    // Called when loop video ends → transition to complete + replay launch
    stopLoopAndReplayLaunch: () => {
      stopWithFade(loopNodeRef, 150);
      launchNodeRef.current = playBuffer(buffersRef.current.sent, {
        fadeInMs: 50,
        playbackRate: 1.6,
        wobbleHz: 9,
        wobbleCents: 80,
        highPass: 450,
        peakGain: 1.6,
      });
    },
    // Called when complete video ends → fade everything out
    stopAll: () => {
      stopWithFade(launchNodeRef, 300);
      stopWithFade(loopNodeRef, 300);
    },
  };
}
