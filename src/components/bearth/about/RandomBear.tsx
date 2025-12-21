"use client";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

export default function RandomBear() {
  const waitTime = 5000; // 5 seconds between appearances
  const [key, setKey] = useState(0);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [direction2, setDirection2] = useState<"top" | "bottom">("top");
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showAndPlayVideo = useCallback(() => {
    setKey((key) => key + 1);
    setPosition(Math.random() * 50);
    setDirection(Math.random() > 0.5 ? "left" : "right");
    setDirection2(Math.random() > 0.5 ? "top" : "bottom");

    // Play video after a brief moment to ensure it's visible
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Handle play error silently
        });
      }
    }, 50);
  }, []);

  const scheduleNextAppearance = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      showAndPlayVideo();
    }, waitTime);
  }, [showAndPlayVideo, waitTime]);

  const handleVideoEnded = useCallback(() => {
    scheduleNextAppearance();
  }, [scheduleNextAppearance]);

  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none w-full"
      style={{
        transform: direction === "right" ? "scaleX(-1)" : "scaleX(1)",
      }}
    >
      {
        <video
          ref={videoRef}
          key={key}
          onLoadedData={() => {
            scheduleNextAppearance();
          }}
          onEnded={handleVideoEnded}
          style={{
            bottom: direction2 === "bottom" ? `${position}%` : undefined,
            top: direction2 === "top" ? `${position}%` : undefined,
          }}
          className={cn(
            "w-[60px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] absolute",
          )}
          src="/assets/animated-bear-1.webm"
          muted
          playsInline
          autoPlay={false}
          preload="auto"
        />
      }
    </div>
  );
}
