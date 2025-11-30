import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { BearthButton } from "../BearthButton";
import BearthBackgroundImage from "../BearthBackgroundImage";

export default function SectionLast() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      paddingHeader
      paddingFooter
      className="px-4 py-40 lg:py-60 text-white flex flex-col justify-between min-h-screen"
      outerDivClassName="relative"
      slotOutside={<BearthBackgroundImage absolute darken />}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Heading type="h1">
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
        <BearthButton />
      </div>
    </MaxWidthConstraintedLayout>
  );
}
