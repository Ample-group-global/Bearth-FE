"use client";
import { useEffect, useRef } from "react";
import { getAudioContext, unlockAudioContext } from "@/lib/audioContext";

export function useRocketAudio() {
  const audioRef = useRef<ReturnType<typeof getAudioContext>>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    audioRef.current = getAudioContext() ?? unlockAudioContext();
    return () => {
      try {
        audioRef.current?.sent.pause();
        audioRef.current?.loop.pause();
      } catch {
        /* ignore */
      }
    };
  }, []);

  const playSent = () => {
    const a = audioRef.current;
    if (!a || hasPlayedRef.current) return false;
    hasPlayedRef.current = true;
    a.sent.currentTime = 0;
    a.sent.volume = 1;
    const p = a.sent.play();
    if (p && typeof p.catch === "function") {
      p.catch((err) => {
        console.warn("rocket-sent play blocked:", err);
        hasPlayedRef.current = false;
      });
    }
    return true;
  };

  const fade = (el: HTMLAudioElement, to: number, ms: number) => {
    const from = el.volume;
    const start = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / ms);
      el.volume = from + (to - from) * k;
      if (k < 1) requestAnimationFrame(step);
      else if (to === 0) el.pause();
    };
    requestAnimationFrame(step);
  };

  return {
    tryPlaySent: playSent,
    unlockAndPlay: () => {
      audioRef.current = unlockAudioContext();
      hasPlayedRef.current = false;
      playSent();
    },
    startLoop: () => {
      const a = audioRef.current;
      if (!a) return;
      fade(a.sent, 0, 150);
      a.loop.currentTime = 0;
      a.loop.volume = 0;
      const p = a.loop.play();
      if (p && typeof p.catch === "function") {
        p.catch((err) => console.warn("rocket-loop play blocked:", err));
      }
      fade(a.loop, 1, 150);
    },
    stopLoopAndReplayLaunch: () => {
      const a = audioRef.current;
      if (!a) return;
      fade(a.loop, 0, 150);
      a.sent.currentTime = 0;
      a.sent.volume = 1;
      const p = a.sent.play();
      if (p && typeof p.catch === "function") {
        p.catch((err) => console.warn("rocket-sent replay blocked:", err));
      }
    },
    stopAll: () => {
      const a = audioRef.current;
      if (!a) return;
      fade(a.sent, 0, 300);
      fade(a.loop, 0, 300);
    },
  };
}
