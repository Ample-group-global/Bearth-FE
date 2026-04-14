"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import type { OGVPlayer } from "ogv";

interface MintAnimationCanvasProps {
  src: string;
  absolute?: boolean;
  containerClassName?: string;
  videoLoop?: boolean;
  active?: boolean;
  onEnded?: () => void;
}

export function MintAnimationCanvas({
  src,
  absolute,
  containerClassName,
  videoLoop = true,
  active = true,
  onEnded,
}: MintAnimationCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<OGVPlayer | null>(null);
  const onEndedRef = useRef(onEnded);
  onEndedRef.current = onEnded;

  const activeRef = useRef(active);
  activeRef.current = active;

  const videoLoopRef = useRef(videoLoop);
  videoLoopRef.current = videoLoop;

  // Initialize the OGV player once
  useEffect(() => {
    let cancelled = false;

    import("ogv").then(({ OGVPlayer, OGVLoader }) => {
      if (cancelled) return;

      OGVLoader.base = "/ogv";

      const player = new OGVPlayer();
      playerRef.current = player;

      player.width = 2880;
      player.height = 2048;

      const playerElement = player as unknown as HTMLDivElement;
      playerElement.className =
        "w-full xl:w-auto h-full xl:aspect-video relative";
      playerElement.style.width = "";
      playerElement.style.height = "";

      const canvas = playerElement.getElementsByTagName("canvas").item(0);
      if (canvas) {
        canvas.style.objectFit = "cover";
      }

      if (containerRef.current) {
        containerRef.current.appendChild(playerElement);
      }

      player.addEventListener("ended", () => {
        if (videoLoopRef.current) {
          player.currentTime = 0;
          player.play();
        } else {
          onEndedRef.current?.();
        }
      });

      player.src = src;
      player.muted = true;

      if (activeRef.current) {
        player.play();
      }
    });

    return () => {
      cancelled = true;
      if (playerRef.current) {
        playerRef.current.pause();
      }
      if (containerRef.current && playerRef.current) {
        containerRef.current.removeChild(
          playerRef.current as unknown as HTMLCanvasElement,
        );
      }
      playerRef.current = null;
    };
  }, [src]);

  // Play or pause based on active prop
  useEffect(() => {
    if (!playerRef.current) return;
    if (active) {
      playerRef.current.currentTime = 0;
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  }, [active]);

  return (
    <div
      className={cn(
        "inset-0 -z-1 flex flex-col items-center justify-center",
        absolute ? "absolute w-full h-full" : "fixed w-dvw h-dvh",
        containerClassName,
      )}
      ref={containerRef}
    >
      <div className="absolute z-1 w-full xl:w-auto h-full xl:aspect-video">
        <div className="hidden xl:block absolute -left-px top-0 h-full w-[150px] bg-linear-to-r from-secondary to-secondary/0"></div>
        <div className="hidden xl:block absolute -right-px top-0 h-full w-[150px] bg-linear-to-l from-secondary to-secondary/0"></div>
      </div>
    </div>
  );
}
