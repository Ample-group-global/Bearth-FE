import Image from "next/image";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { CarouselItem } from "@/components/ui/carousel";
import { SectionSecondCarousel } from "./SectionSecondCarousel";

export function SectionTextItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl lg:rounded-tr-none lg:rounded-bl-none bg-black lg:w-[650px] h-[160px] lg:h-[150px] lg:absolute bottom-0 right-0 py-4 px-4 lg:px-8 mt-4 flex flex-col gap-2 lg:gap-0 lg:justify-between">
      {children}
    </div>
  );
}

export default function SectionSecond() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      paddingHeader
      paddingFooter
      className="px-8 text-white flex flex-col justify-center min-h-screen lg:h-screen"
      outerDivClassName="w-full bg-primary"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Heading type="h1">Welcome to Bearth!</Heading>
        <Heading type="h3" as="h2">
          BEARTH = BEAR+EARTH+BIRTH
        </Heading>
      </div>
      <div className="relative mt-4 rounded-2xl overflow-hidden">
        <SectionSecondCarousel>
          <CarouselItem>
            <div className="relative aspect-4/3 lg:aspect-video rounded-2xl shadow-xl">
              <Image
                src="/assets/about-1.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <SectionTextItem>
              <Paragraph type="normal2">
                When the bears awoke from their long hibernation, the world had
                changed. Humans had mysteriously vanished, leaving behind a
                collapsing "Second Earth" and... well, quite a mess.
              </Paragraph>
              <Paragraph type="normal2">
                The bears didn't set out to "save the world." They simply
                thought: "We're the new landlords. Let's tidy up and make it
                cozy."
              </Paragraph>
            </SectionTextItem>
          </CarouselItem>

          <CarouselItem>
            <div className="relative aspect-4/3 lg:aspect-video rounded-2xl shadow-xl">
              <Image
                src="/assets/about-2.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <SectionTextItem>
              <Paragraph type="normal2">
                And so began the universe's most laid-back Interstellar Spring
                Cleaning Project.
              </Paragraph>
              <Paragraph type="normal2">
                Using bear logic, they retrofitted human rockets—adding
                paw-friendly buttons, installing honey storage compartments—and
                clumsily launched into space.
              </Paragraph>
              <Paragraph>
                Their mission? Find the perfect planet for napping and enjoying
                honey.Saving the world? Just the best side effect.
              </Paragraph>
            </SectionTextItem>
          </CarouselItem>

          <CarouselItem>
            <div className="relative aspect-4/3 lg:aspect-video rounded-2xl shadow-xl">
              <Image
                src="/assets/about-2.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <SectionTextItem>
              <Paragraph type="normal2">
                This is Bearth—a universe where humor, gentleness, and a little
                chaos help us rediscover the power of coexistence.
              </Paragraph>
            </SectionTextItem>
          </CarouselItem>
        </SectionSecondCarousel>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
