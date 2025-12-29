"use client";

import { motion } from "motion/react";
import Heading from "@/components/bearth/Heading";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import MindmapGrid from "@/components/bearth/mindmap/MindmapGrid";
import BearthFooter from "@/components/bearth/navigation/BearthFooter";

export default function MindmapPage() {
  return (
    <MaxWidthConstraintedLayout
      as="main"
      paddingHeader
      fullHeight
      outerDivClassName="w-full bg-secondary"
      className="relative desktop:h-screen text-white w-full flex flex-col items-center px-4 min-h-screen"
      slotOutside={
        <BearthFooter className="max-w-7xl left-1/2 -translate-x-1/2" />
      }
    >
      <header className="mb-8 md:mb-12 max-w-[800px] self-start">
        <Heading type="h1" className="text-primary title-stroke title-strokecolor-white">
          MINDMAP
        </Heading>
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grow w-full lg:min-h-[800px] xl:min-h-[600px] pb-24 flex flex-col"
      >
        <MindmapGrid />
      </motion.div>
    </MaxWidthConstraintedLayout>
  );
}
