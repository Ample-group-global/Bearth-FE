"use client";

import BearthFooter from "@/components/bearth/navigation/BearthFooter";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import NewGrid from "@/components/bearth/mindmap/MindmapGrid";

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

export default function MindmapPage() {
  // const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <MaxWidthConstraintedLayout
      as="main"
      paddingHeader
      paddingFooter
      fullHeight
      outerDivClassName="w-full bg-secondary"
      className="min-h-screen text-white w-full flex flex-col items-center px-4 lg:py-40"
    >
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

      <NewGrid />

      <BearthFooter />
    </MaxWidthConstraintedLayout>
  );
}
