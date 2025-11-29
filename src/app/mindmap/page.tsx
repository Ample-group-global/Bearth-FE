"use client";

import { useState } from "react";
import { MindmapCard } from "@/components/bearth/mindmap/MindmapCard";
import { CardOverlay } from "@/components/bearth/mindmap/CardOverlay";
import BearthFooter from "@/components/bearth/navigation/BearthFooter";

const cardContent = {
  1: {
    title: "Vision & Value",
    content: <></>,
  },
  2: {
    title: "Community",
    content: <></>,
  },
  3: {
    title: "Expand",
    content: <></>,
  },
  4: {
    title: "Digital",
    content: <></>,
  },
  5: {
    title: "Physical",
    content: <></>,
  },
  6: {
    title: "Hybrid",
    content: <></>,
  },
};

export default function Page() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-secondary text-white w-full p-4 flex flex-col items-center pt-24 px-4 md:px-8">
      <header className="mb-8 md:mb-12">
        <h1 className="font-black mb-4 md:mb-6 text-4xl md:text-8xl">
          MINDMAP
        </h1>
        <div className="space-y-4">
          <p className="text-base md:text-lg leading-relaxed">
            Building a universe takes time, patience, and the right rhythm.
            While many projects rush forward with rigid roadmaps, we believe in
            something more organic—a mindmap that grows and evolves with our
            community.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            This isn't about racing to milestones. It's about creating a home
            among the stars, one thoughtful step at a time. Here's how we're
            thinking about building Bearth, together.
          </p>
        </div>
      </header>

      <div className="relative w-full flex md:grow">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 md:grid-rows-6 gap-4 font-bold text-[#1E2A3B]">
          <MindmapCard
            number={1}
            title={
              <>
                Vision
                <br />& Value
              </>
            }
            onClick={() => setActiveCard(1)}
            className="md:row-span-6 md:p-8"
            numberClassName="mb-2 md:mb-4"
          />

          <MindmapCard
            number={2}
            title="Community"
            onClick={() => setActiveCard(2)}
            className="md:col-start-2 md:row-start-1 md:row-span-3"
          />

          <MindmapCard
            number={3}
            title="Expand"
            onClick={() => setActiveCard(3)}
            className="md:col-start-2 md:row-start-4 md:row-span-3"
          />

          <MindmapCard
            number={4}
            title="Digital"
            onClick={() => setActiveCard(4)}
            className="md:col-start-3 md:row-start-1 md:row-span-2 md:flex-row md:justify-start md:items-center gap-3 aspect-square md:aspect-auto"
            titleClassName="self-end md:self-auto"
          />

          <MindmapCard
            number={5}
            title="Physical"
            onClick={() => setActiveCard(5)}
            className="md:col-start-3 md:row-start-3 md:row-span-2 md:flex-row md:justify-start md:items-center gap-3 aspect-square md:aspect-auto"
            titleClassName="self-end md:self-auto"
          />

          <MindmapCard
            number={6}
            title="Hybrid"
            onClick={() => setActiveCard(6)}
            className="md:col-start-3 md:row-start-5 md:row-span-2 md:flex-row md:justify-start md:items-center gap-3 aspect-square md:aspect-auto"
            titleClassName="self-end md:self-auto"
          />
        </div>
        {activeCard && (
          <CardOverlay
            cardContent={cardContent[activeCard as keyof typeof cardContent]}
            onClose={() => setActiveCard(null)}
          />
        )}
      </div>

      <BearthFooter />
    </main>
  );
}
