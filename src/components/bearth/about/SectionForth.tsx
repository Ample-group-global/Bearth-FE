import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { cn } from "@/lib/utils";

export function SectionForthVideo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative lg:w-[550px] flex flex-col rounded-2xl",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-2xl shadow-[0px_4px_4px_0px_#00000040_inset]"></div>

      <video
        className="object-cover rounded-2xl aspect-square"
        controls={false}
        autoPlay
        muted
        loop
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
      paddingHeader
      paddingFooter
      className="px-4 text-white flex justify-center min-h-screen lg:h-screen items-center"
      outerDivClassName="w-full bg-primary"
    >
      <div className="flex flex-col gap-6">
        <Heading type="h1" className="uppercase">
          When Mary <br /> Became a <br className="block lg:hidden" /> Universe
        </Heading>
        <Heading type="h2" as="h2" className="leading-none">
          BEARTH isn't just imagined— <br />
          it's constructed.
        </Heading>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative lg:w-[550px] flex flex-col gap-4">
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

          <SectionForthVideo className="hidden lg:flex" />
        </div>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
