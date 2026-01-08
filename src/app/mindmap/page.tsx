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
      fullHeight
      paddingHeader
      outerDivClassName="w-full bg-secondary"
      className="relative desktop:h-[min(100vh,fit-content)] text-white w-full flex flex-col kvh:flex-row items-center px-4 min-h-screen overflow-y-hidden gap-8 pb-8 md:pb-[82px]"
      slotOutside={
        <BearthFooter className="max-w-7xl left-1/2 -translate-x-1/2 mt-4" />
      }
    >
      <header className="max-w-[600px] kvh:max-w-[35%] self-start">
        <Heading
          type="h1"
          className="text-primary title-stroke title-strokecolor-white"
        >
          MINDMAP
        </Heading>
        <div className="space-y-4">
          <p className="text-base leading-[1.1]">
            Bearth is an original IP, a universe born from a story of loss and
            rebirth. We are building a transmedia world that grows and evolves
            with its community.
          </p>
          <p className="text-base leading-[1.1]">
            This mindmap is our living blueprint, not a rigid roadmap. It's
            about creating a home among the stars, one thoughtful step at a
            time.
          </p>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grow w-full lg:min-h-[800px] xl:min-h-[600px] flex flex-col kvh:self-start kvh:h-[calc(100vh-80px)]"
      >
        <MindmapGrid />
      </motion.div>
    </MaxWidthConstraintedLayout>
  );
}
