import Image from "next/image";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

export default function SectionThird() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      paddingHeader
      paddingFooter
      className="px-4 text-white flex justify-center min-h-screen items-center"
      outerDivClassName="w-full bg-primary"
    >
      <div className="flex flex-col gap-6">
        <Heading type="h1" className="uppercase">
          Building a Universe, <br />
          One Nap at a&nbsp;
          <br className="block lg:hidden" />
          Time
        </Heading>
        <Heading type="h2" as="h2" className="leading-none">
          BEARTH isn't just imagined— <br />
          it's constructed.
        </Heading>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative lg:w-[550px] flex flex-col gap-4">
            <div className="relative object-cover aspect-video lg:order-2 shadow-xl rounded-2xl overflow-hidden">
              <Image
                src="/assets/about-2.png"
                alt="Section Second"
                fill
                sizes="(max-width: 1280px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="gap-4 flex flex-col lg:order-1 px-2 lg:px-0">
              <Paragraph type="large">
                Created by Judy, an architecture student in Lyon, Bearth is
                built with the same vision she brings to her studies.
              </Paragraph>
              <Paragraph type="large">
                She's designing an entire universe—from bear cities to the
                perfect napping planet.
              </Paragraph>
            </div>
          </div>

          <div className="relative lg:w-[550px] flex flex-col gap-4">
            <div className="relative object-cover aspect-video shadow-xl rounded-2xl overflow-hidden">
              <Image
                src="/assets/about-2.png"
                alt="Section Second"
                fill
                sizes="(max-width: 1280px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="gap-4 flex flex-col px-2 lg:px-0">
              <Paragraph type="large">
                Judy combines architectural rigor with childlike imagination.
                For her, art is the language of the soul—a force for change,
                inspired by artist MAGO.
              </Paragraph>
              <Paragraph type="large">
                Bearth is her dream, and a gentle gift to the world.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
