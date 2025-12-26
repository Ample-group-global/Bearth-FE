"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import { cn } from "@/lib/utils";

const bearImages = [
  {
    url: "/assets/animated-bear-1.webp",
    playTime: 4200,
  },
  {
    url: "/assets/animated-bear-2.webp",
    playTime: 4200,
  },
  {
    url: "/assets/animated-bear-3.webp",
    playTime: 4500,
  },
  {
    url: "/assets/animated-bear-4.webp",
    playTime: 5000,
  },
];

export default function RandomBear() {
  const waitTime = 5000;
  const [key, setKey] = useState(0);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [direction2, setDirection2] = useState<"top" | "bottom">("top");
  const [bearImage, setBearImage] = useState<string>("");
  const [isHideBear, setIsHideBear] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showAndPlayVideo = useCallback((bearImage: string) => {
    setKey((key) => key + 1);
    setPosition(Math.random() * 50);
    setDirection(Math.random() > 0.5 ? "left" : "right");
    setDirection2(Math.random() > 0.5 ? "top" : "bottom");
    setBearImage(bearImage);
    setIsHideBear(false);
  }, []);

  const hideBear = useCallback(() => {
    setIsHideBear(true);
  }, []);

  const scheduleBear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const randomBear =
      bearImages[Math.floor(Math.random() * bearImages.length)];

    if (!randomBear) {
      return;
    }

    preload(randomBear.url, { as: "image" });

    timeoutRef.current = setTimeout(() => {
      showAndPlayVideo(randomBear.url);

      setTimeout(() => {
        hideBear();
        scheduleBear();
      }, randomBear.playTime);
    }, waitTime);
  }, [hideBear, showAndPlayVideo]);

  useEffect(() => {
    scheduleBear();
  }, [scheduleBear]);

  return (
    <div
      id="random-bear"
      className="fixed inset-0 z-20 pointer-events-none w-full"
      style={{
        transform: direction === "right" ? "scaleX(-1)" : "scaleX(1)",
      }}
    >
      {!isHideBear && (
        <Image
          alt=""
          width={200}
          height={400}
          key={key}
          style={{
            bottom: direction2 === "bottom" ? `${position}%` : undefined,
            top: direction2 === "top" ? `${position}%` : undefined,
          }}
          className={cn(
            "w-[60px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] absolute",
          )}
          unoptimized={true}
          src={bearImage}
        ></Image>
      )}
    </div>
  );
}
