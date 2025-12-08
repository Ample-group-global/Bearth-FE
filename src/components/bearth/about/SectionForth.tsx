import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { cn } from "@/lib/utils";
import AnimatedTitle from "./AnimatedTitle";

export function SectionForthVideo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex flex-col rounded-2xl", className)}>
      <div className="absolute inset-0 rounded-2xl shadow-[0px_4px_4px_0px_#00000040_inset] aspect-4/5"></div>

      <video
        className="object-cover rounded-2xl aspect-4/5"
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
    </div>
  );
}

export default function SectionForth() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      className="px-4 text-white flex justify-center desktop:h-screen items-center py-4 desktop:pt-20 desktop:pb-8"
      outerDivClassName="w-full bg-secondary"
    >
      <div className="flex flex-col gap-6 w-full">
        <AnimatedTitle>
          <Heading type="h1" className="uppercase text-primary title-stroke-black">
            When Mary <br /> Became a <br className="block lg:hidden" />{" "}
            Universe
          </Heading>
        </AnimatedTitle>

        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          <div className="relative lg:w-[550px] flex flex-col gap-4 desktop:flex-2 hlg:flex-1 justify-center">
            <Paragraph type="large">
              Every universe begins with a spark. For Bearth, it was a teddy
              bear named Mary.
            </Paragraph>

            <Paragraph type="large">
              Mary was Judy's childhood companion, a gift from her sister. Two
              years ago, during a journey from Taiwan to France, Mary was lost.
            </Paragraph>

            <Paragraph type="large">
              Instead of letting loss be the end, Judy asked:{" "}
              <span className="italic">
                "What if Mary could exist forever, in another form?"
              </span>
            </Paragraph>

            <SectionForthVideo className="flex lg:hidden" />

            <Paragraph type="large" className="font-bold">
              And so, Bearth was born.
            </Paragraph>

            <Paragraph type="large">
              The lost Mary became the vanished humans. Judy's longing became
              the bears' quest. Her wish for companionship became their journey
              across the stars.
            </Paragraph>

            <Paragraph type="large" className="font-bold">
              Bearth is a love letter to everything we've lost—and proof that
              through creation, memories live on forever.
            </Paragraph>
          </div>

          <div className="flex-1 hidden lg:flex">
            <SectionForthVideo />
          </div>
        </div>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
