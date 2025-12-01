"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

export function SectionSecondCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: false }), Fade()]}
      opts={{
        loop: true,
        containScroll: false,
        duration: 200,
      }}
    >
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
}
