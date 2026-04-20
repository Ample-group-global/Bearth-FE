"use client";

let _ctx: AudioContext | null = null;

export function unlockAudioContext(): AudioContext {
  if (!_ctx) {
    _ctx = new AudioContext();
  } else if (_ctx.state === "suspended") {
    _ctx.resume();
  }
  return _ctx;
}

export function getAudioContext(): AudioContext | null {
  return _ctx;
}
