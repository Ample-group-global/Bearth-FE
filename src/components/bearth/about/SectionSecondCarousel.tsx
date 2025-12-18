"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { useContext } from "react";
import { CarouselContext } from "./CarouselContext";

export function SectionSecondCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setCarouselApi } = useContext(CarouselContext);

  return (
    <Carousel
      className="h-full"
      setApi={setCarouselApi}
      opts={{
        align: "start",
        containScroll: false,
      }}
    >
      <CarouselContent className="h-full">{children}</CarouselContent>
    </Carousel>
  );
}
