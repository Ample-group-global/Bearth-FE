import BearthBackgroundImage from "../BearthBackgroundImage";
import { BearthButton } from "../BearthButton";
import Heading from "../Heading";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Paragraph from "../Paragraph";

export default function SectionLast() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      paddingHeader
      paddingFooter
      className="px-4 py-24 lg:py-40 text-white flex flex-col min-h-screen justify-between"
      outerDivClassName="relative"
      slotOutside={
        <BearthBackgroundImage
          src="/assets/about-bg-bottom.webm"
          absolute
          containerClassName="z-26"
        />
      }
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Heading
          type="h1"
          className="uppercase text-primary title-stroke-white"
        >
          Find Your Place <br /> in the Stars
        </Heading>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-6">
        <div className="mt-4 flex flex-col items-center justify-center gap-2 lg:gap-0">
          <Paragraph type="large2" className="lg:leading-loose">
            The bears are searching for their perfect planet. <br />
            <span className="font-bold">Maybe you're searching too.</span>
          </Paragraph>
          <Paragraph type="large2" className="font-bold lg:leading-loose">
            Welcome home, fellow traveler. <br className="block lg:hidden" />{" "}
            Your nap spot is waiting.
          </Paragraph>
        </div>
        <BearthButton href="/mint">Join the Journey</BearthButton>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
