import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { cn } from "@/lib/utils";
import AnimatedTitle from "./AnimatedTitle";

export function SectionForthVideo({ className }: { className?: string }) {
  return (
    <video
      className={cn("object-cover rounded-2xl", className)}
      controls={false}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/assets/about-3.webm" type="video/webm" />
      <source src="/assets/about-3.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>
  );
}

export default function SectionForth() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      className="px-4 text-white flex justify-center items-center py-4 desktop:pt-20 desktop:pb-8"
      outerDivClassName="w-full bg-secondary"
    >
      <div className="flex flex-col gap-6 w-full max-h-full">
        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          <div className="flex-1 hidden lg:flex lg:justify-end lg:my-8">
            <SectionForthVideo className="aspect-842/617" />
          </div>
          <div className="relative lg:w-[550px] flex flex-col gap-4 flex-1 mt-8 items-start">
            <AnimatedTitle>
              <Heading
                type="h1"
                className="uppercase text-primary title-stroke-black"
              >
                When Mary <br /> Became a <br className="block lg:hidden" />{" "}
                Universe
              </Heading>
            </AnimatedTitle>
            <SectionForthVideo className="lg:hidden aspect-4/3" />
            <Paragraph type="normal">
              Every universe begins with a spark. For Bearth, it was a teddy
              bear named Mary.
            </Paragraph>

            <Paragraph type="normal">
              Mary was Judy's childhood companion, a gift from her sister. Two
              years ago, during a journey from Taiwan to France, Mary was lost.
            </Paragraph>
            <Paragraph type="normal">
              Instead of letting loss be the end, Judy asked: "What if Mary
              could exist forever, in another form?"
            </Paragraph>
            <Paragraph type="normal">And so, Bearth was born.</Paragraph>
            <Paragraph type="normal">
              The lost Mary became the vanished humans. Judy's longing became
              the bears' quest. Her wish for companionship became their journey
              across the stars.
            </Paragraph>
            <Paragraph type="normal">
              Bearth is a love letter to everything we've lost—and proof that
              through creation, memories live on forever.
            </Paragraph>
          </div>
        </div>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
