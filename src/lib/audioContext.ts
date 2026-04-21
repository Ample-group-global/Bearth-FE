"use client";

// Module-singleton HTMLAudioElements. By keeping a single set of <audio>
// elements created on first Mint click (= user gesture), we sidestep iOS
// Safari's AudioContext re-suspend behavior across wallet popups and
// client-side navigation.

type RocketAudio = {
  sent: HTMLAudioElement;
  loop: HTMLAudioElement;
};

let _audio: RocketAudio | null = null;

function make(src: string, loop: boolean) {
  const el = new Audio(src);
  el.loop = loop;
  el.preload = "auto";
  el.crossOrigin = "anonymous";
  // iOS: must be inline, not fullscreen
  el.setAttribute("playsinline", "true");
  return el;
}

export function unlockAudioContext(): RocketAudio | null {
  if (typeof window === "undefined") return null;
  if (_audio) {
    // Re-arm: in case iOS suspended these, muted-play "kicks" them inside the gesture.
    primeInGesture(_audio);
    return _audio;
  }
  _audio = {
    sent: make("/assets/rocket-sent.mp3", false),
    loop: make("/assets/rocket-loop.mp3", true),
  };
  primeInGesture(_audio);
  return _audio;
}

// Inside a user gesture we briefly play each track muted, then pause+rewind.
// This registers the element with the iOS autoplay allowlist so subsequent
// unmuted play() calls — even after blur/navigation — are permitted.
function primeInGesture(a: RocketAudio) {
  for (const el of [a.sent, a.loop]) {
    el.muted = true;
    const p = el.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        el.pause();
        el.currentTime = 0;
        el.muted = false;
      }).catch(() => {
        // Autoplay denied — will retry on the Enable-sound button.
        el.muted = false;
      });
    }
  }
}

export function getAudioContext(): RocketAudio | null {
  return _audio;
}
