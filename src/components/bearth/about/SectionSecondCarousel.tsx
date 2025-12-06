"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type SlideText = {
  text: React.ReactNode;
};

export function SectionTextItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl lg:rounded-tr-none lg:rounded-bl-none bg-black lg:w-[650px] h-[180px] lg:h-[150px] lg:absolute bottom-0 right-0 py-4 px-4 lg:px-8 mt-4">
      <div className="relative h-full w-full">
        <AnimatePresence>{children}</AnimatePresence>
      </div>
    </div>
  );
}

export function SectionSecondCarousel({
  children,
  slideText,
}: {
  children: React.ReactNode;
  slideText: SlideText[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Carousel
      className="h-full"
        opts={{
          loop: true,
          containScroll: false,
        }}
        onSlideChange={(api) => {
          if (api.slidesInView().length === 1) {
            setCurrentSlide(api.slidesInView()[0]);
          }
        }}
      >
        <CarouselContent className="h-full">{children}</CarouselContent>
      </Carousel>

      <SectionTextItem>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={currentSlide}
          className="h-full w-full absolute flex flex-col gap-2 lg:gap-0 lg:justify-between"
        >
          {slideText[currentSlide].text}
        </motion.div>
      </SectionTextItem>
    </>
  );
}
