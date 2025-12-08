import Image from "next/image";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { CarouselItem } from "@/components/ui/carousel";
import { SectionSecondCarousel } from "./SectionSecondCarousel";
import AnimatedTitle from "./AnimatedTitle";

const sections = [
  {
    order: 1,
    image: "/assets/about-1.png",
    text: (
      <>
        <Paragraph type="normal2">
          When the bears awoke from their long hibernation, the world had
          changed. Humans had mysteriously vanished, leaving behind a collapsing
          "Second Earth" and... well, quite a mess.
        </Paragraph>
        <Paragraph type="normal2">
          The bears didn't set out to "save the world." They simply thought:
          "We're the new landlords. Let's tidy up and make it cozy."
        </Paragraph>
      </>
    ),
  },
  {
    order: 2,
    image: "/assets/about-2.png",
    text: (
      <>
        <Paragraph type="normal2">
          And so began the universe's most laid-back Interstellar Spring
          Cleaning Project.
        </Paragraph>
        <Paragraph type="normal2">
          Using bear logic, they retrofitted human rockets—adding paw-friendly
          buttons, installing honey storage compartments—and clumsily launched
          into space.
        </Paragraph>
        <Paragraph type="normal2">
          Their mission? Find the perfect planet for napping and enjoying
          honey.Saving the world? Just the best side effect.
        </Paragraph>
      </>
    ),
  },
  {
    order: 3,
    image: "/assets/about-2.png",
    text: (
      <>
        <Paragraph type="normal2">
          This is Bearth—a universe where humor, gentleness, and a little chaos
          help us rediscover the power of coexistence.
        </Paragraph>
      </>
    ),
  },
];

export default function SectionSecond() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      // paddingHeader
      // paddingFooter
      className="px-8 py-8 desktop:pt-20 desktop:pb-8 text-white flex flex-col justify-center min-h-screen desktop:h-screen"
      outerDivClassName="w-full bg-secondary"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <AnimatedTitle>
          <Heading type="h1" className="uppercase text-primary title-stroke-black">
            Welcome to Bearth!
          </Heading>
        </AnimatedTitle>
        <Heading type="h3" as="h2">
          BEARTH = BEAR+EARTH+BIRTH
        </Heading>
      </div>
      <div className="place-self-center overflow-hidden relative mt-4 rounded-2xl">
        <SectionSecondCarousel
          slideText={sections.map((section) => ({
            text: section.text,
          }))}
        >
          {sections.map((section) => (
            <CarouselItem key={section.order}>
              <div className="relative aspect-4/3 lg:aspect-video rounded-2xl shadow-xl">
                <Image
                  src={section.image}
                  alt=""
                  width={900}
                  height={900}
                  className="object-cover rounded-2xl w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </SectionSecondCarousel>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
