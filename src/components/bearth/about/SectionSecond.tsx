import Image from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import Heading from "../Heading";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import BearthLiquidGlassEffect from "../navigation/BearthLiquidGlassEffect";
import Paragraph from "../Paragraph";
import AnimatedTitle from "./AnimatedTitle";
import { CarouselButton } from "./CarouselButton";
import { CarouselProvider } from "./CarouselContext";
import { SectionSecondCarousel } from "./SectionSecondCarousel";

const sections = [
  {
    order: 1,
    image: "/assets/about-1.png",
    title: "The Great Awakening",
    text: (
      <>
        <Paragraph type="normal">
          The story begins with an exceptionally long nap.
        </Paragraph>
        <Paragraph type="normal">
          When the bears woke, the noisy humans had vanished—leaving behind a
          silent, high-tech floating city.
        </Paragraph>
        <Paragraph type="normal">
          To these groggy new tenants, the abandoned city wasn't a crisis.
          Through sleepy eyes, it wasn't a ruin.
        </Paragraph>
        <Paragraph type="normal" className="font-bold">
          It was a giant, unopened playground.
        </Paragraph>
      </>
    ),
  },
  {
    order: 2,
    image: "/assets/about-1.png",
    title: "The Age of Bear Logic",
    text: (
      <>
        <Paragraph type="normal">
          We ignored the manuals and used "Bear Logic" instead, replacing
          complex climate dashboards with simple "Gentle Breeze" knobs and
          converting geothermal plants into hot springs.
        </Paragraph>
        <Paragraph type="normal">
          We slowed time and rewrote the "Second Layer" rules.
        </Paragraph>
        <Paragraph type="normal" className="font-bold">
          We repurposed humanity's highest technology for the serious business
          of relaxation.
        </Paragraph>
      </>
    ),
  },
  {
    order: 3,
    image: "/assets/about-1.png",
    title: "The Quest for the Perfect Nap",
    text: (
      <>
        <Paragraph type="normal">
          With home cozy, curiosity turned to the stars.
        </Paragraph>
        <Paragraph type="normal">
          We filled rockets with honey and cushions, launching to find the
          universe's sweetest honey and perfect sunlight.
        </Paragraph>
        <Paragraph type="normal">
          Our mission: find the ultimate napping spot.
        </Paragraph>
        <Paragraph type="normal" className="font-bold">
          As for saving the world? That might just be the best side effect of
          the journey.
        </Paragraph>
      </>
    ),
  },
];

export default function SectionSecond() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      className="px-4 py-8 desktop:pt-20 desktop:pb-8 text-white flex flex-col justify-center"
      outerDivClassName="w-full bg-secondary"
    >
      <CarouselProvider>
        <div className="flex flex-col">
          <AnimatedTitle>
            <Heading
              type="h1"
              className="uppercase text-primary title-stroke-black"
            >
              Welcome to Bearth!
            </Heading>
          </AnimatedTitle>
          <div className="flex justify-between items-center">
            <Heading type="h3" as="h2">
              BEARTH = BEAR+EARTH+BIRTH
            </Heading>
            <CarouselButton className="hidden desktop:flex mr-30" />
          </div>
        </div>
        <div className="w-full place-self-center overflow-hidden relative mt-4 rounded-2xl desktop:h-[545px]">
          <SectionSecondCarousel>
            {sections.map((section) => (
              <CarouselItem key={section.order} className="basis-11/12">
                <BearthLiquidGlassEffect
                  shineType="2"
                  tintColor="bg-primary/50"
                  borderRadius="rounded-2xl"
                  className="h-full"
                  contentClassName="w-full"
                >
                  <div className="flex flex-col desktop:flex-row gap-4 desktop:gap-8 p-4 lg:p-8 desktop:p-8 h-full desktop:items-center">
                    <div className="flex-1 flex flex-col text-white gap-4 desktop:self-end">
                      <div className="flex flex-row gap-4 items-center desktop:h-auto">
                        <div className="font-bold text-4xl desktop:text-7xl">
                          {section.order}
                        </div>
                        <div className="text-2xl desktop:text-[40px] font-bold leading-none">
                          {section.title}
                        </div>
                      </div>
                      <div className="hidden desktop:flex flex-col gap-2 min-w-[300px]">
                        {section.text}
                      </div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="h-full w-full relative aspect-16/10">
                        <Image
                          src={section.image}
                          alt=""
                          className="object-cover rounded-2xl"
                          fill
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                      </div>
                    </div>
                    <div className="grow text-white flex desktop:hidden flex-col gap-2">
                      {section.text}
                    </div>
                  </div>
                </BearthLiquidGlassEffect>
              </CarouselItem>
            ))}
          </SectionSecondCarousel>
        </div>
        <div className="flex desktop:hidden items-center justify-center my-8">
          <CarouselButton className="flex" />
        </div>
      </CarouselProvider>
    </MaxWidthConstraintedLayout>
  );
}
