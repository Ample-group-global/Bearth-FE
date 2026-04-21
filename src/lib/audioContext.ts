"use client";

let _ctx: AudioContext | null = null;

type WebkitWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

function getCtor(): typeof AudioContext | null {
  if (typeof window === "undefined") return null;
  const w = window as WebkitWindow;
  return window.AudioContext ?? w.webkitAudioContext ?? null;
}

export function unlockAudioContext(): AudioContext | null {
  const Ctor = getCtor();
  if (!Ctor) return null;
  if (!_ctx) {
    _ctx = new Ctor();
  }
  // Always attempt resume — Safari/iOS and some Chrome configurations start
  // in "suspended" even when the constructor ran inside a user gesture.
  if (_ctx.state === "suspended") {
    _ctx.resume().catch(() => {
      /* user gesture required — will retry on next gesture */
    });
  }
  // Play a silent buffer inside the gesture to fully unlock iOS Safari.
  try {
    const buf = _ctx.createBuffer(1, 1, 22050);
    const src = _ctx.createBufferSource();
    src.buffer = buf;
    src.connect(_ctx.destination);
    src.start(0);
  } catch {
    /* ignore */
  }
  return _ctx;
}

export function getAudioContext(): AudioContext | null {
  return _ctx;
}
