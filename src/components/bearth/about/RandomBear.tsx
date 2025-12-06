"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RandomBear() {
  const appearEvery = 5000;
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [direction2, setDirection2] = useState<"top" | "bottom">("top");

  useEffect(() => {
    if (!isReady) return;

    const interval = setInterval(() => {
      setIsVisible((currentVisible) => {
        let shouldVisible = currentVisible;
        if (currentVisible) {
          shouldVisible = false;
        } else {
          shouldVisible = true;
          setKey((key) => key + 1);
          setPosition(Math.random() * 50);
          setDirection(Math.random() > 0.5 ? "left" : "right");
          setDirection2(Math.random() > 0.5 ? "top" : "bottom");
        }

        return shouldVisible;
      });
    }, appearEvery);

    return () => clearInterval(interval);
  }, [isReady]);

  return (
    <div
      className="absolute inset-0 z-50 pointer-events-none mix-blend-darken w-full"
      style={{
        transform: direction === "right" ? "scaleX(-1)" : "scaleX(1)",
      }}
    >
      <Image
        key={key}
        onLoad={() => {
          setIsReady(true);
        }}
        preload={true}
        style={{
          bottom: direction2 === "bottom" ? `${position}%` : undefined,
          top: direction2 === "top" ? `${position}%` : undefined,
        }}
        className={cn(
          "w-[60px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] absolute",
          (!isReady || !isVisible) && "opacity-0",
        )}
        src="/assets/animated-bear.webp"
        alt="Bear"
        width={200}
        height={400}
      />
    </div>
  );
}
