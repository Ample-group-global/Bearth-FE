import Image from "next/image";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import AnimatedTitle from "./AnimatedTitle";

export default function SectionThird() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      className="px-4 text-white flex justify-center items-center py-4 desktop:pt-20 desktop:pb-8"
      outerDivClassName="w-full bg-secondary"
    >
      <div className="flex flex-col gap-6 h-fit min-h-0">
        <AnimatedTitle>
          <Heading
            type="h1"
            className="uppercase text-primary title-stroke-black"
          >
            Building a Universe, <br />
            One Nap at a&nbsp;
            <br className="block lg:hidden" />
            Time
          </Heading>
        </AnimatedTitle>

        <Heading type="h3" as="h2" className="font-semibold leading-none">
          BEARTH isn't just imagined — it's constructed.
        </Heading>

        <div className="flex flex-col lg:flex-row gap-8 min-h-0 flex-1">
          <div className="relative flex flex-col gap-4 flex-1 min-w-0 min-h-0">
            <div className="w-full aspect-video overflow-hidden">
              <Image
                src="/assets/about-3-1.png"
                alt="Section Second"
                className="object-cover relative shadow-xl rounded-2xl w-full h-full"
                width={1920}
                height={1080}
              />
            </div>
            <div className="gap-4 flex flex-col px-2 lg:px-0 shrink-0">
              <Paragraph type="normal">
                Created by Judy, an architecture student in Lyon, Bearth is
                built with the same vision she brings to her studies.
              </Paragraph>
              <Paragraph type="normal">
                She's designing an entire universe—from bear cities to the
                perfect napping planet.
              </Paragraph>
            </div>
          </div>

          <div className="relative flex flex-col gap-4 flex-1 min-w-0 min-h-0">
            <div className="w-full overflow-hidden lg:order-2">
              <Image
                src="/assets/about-3-2.png"
                alt="Section Second"
                className="object-cover relative shadow-xl rounded-2xl w-full h-full"
                width={1920}
                height={1080}
              />
            </div>
            <div className="gap-4 flex flex-col px-2 lg:px-0 shrink-0">
              <Paragraph type="normal">
                Judy combines architectural rigor with childlike imagination.
                For her, art is the language of the soul—a force for change,
                inspired by artist MAGO.
              </Paragraph>
              <Paragraph type="normal">
                Bearth is her dream, and a gentle gift to the world.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
