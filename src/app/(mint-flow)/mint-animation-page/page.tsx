"use client";
import { useMintFlow } from "@/provider/mint-flow-handler";
import { Application, Assets, Sprite } from "pixi.js";
import { useEffect, useRef } from "react";

export default function MintAnimationPage() {
  return <div>Deprecated</div>;
}

export function MintAnimationCanvas() {
  const mintFlow = useMintFlow();
  const showCanvas = !!mintFlow.txHash;

  const appRef = useRef<Application | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const app = new Application();
      await app.init({ resizeTo: window });
      appRef.current = app;

      app.canvas.style.pointerEvents = "none";
      app.canvas.style.position = "fixed";
      app.canvas.style.top = "0";
      app.canvas.style.left = "0";
      app.canvas.style.width = "100vw";
      app.canvas.style.height = "100vh";

      containerRef.current?.appendChild(app.canvas);

      const texture = await Assets.load("/assets/about-3.mp4");
      const videoSprite = Sprite.from(texture);

      appRef.current.stage.addChild(videoSprite);
    })();
  }, []);

  useEffect(() => {
    if (showCanvas) {
      (async () => {
        if (!appRef.current) return;
        appRef.current.canvas.style.display = "block";

        const texture = await Assets.load("/assets/about-3.mp4");
        const videoSprite = Sprite.from(texture);

        appRef.current.stage.addChild(videoSprite);
      })();
    }
  }, [showCanvas]);

  return <div ref={containerRef}></div>;
}
