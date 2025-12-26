import BearthBackgroundImage from "../BearthBackgroundImage";
import Heading from "../Heading";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import BearthFooter from "../navigation/BearthFooter";
import TypewriterEffect from "../TypewriterEffect";

export default function SectionTop() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      outerDivClassName="relative z-21 bg-secondary"
      className="flex flex-col justify-between pt-20 relative min-h-screen lg:py-40"
      paddingHeader
      paddingFooter
      slotOutside={
        <BearthBackgroundImage src="/assets/about-bg-top.webm" absolute />
      }
    >
      {/* Hero Section */}
      <div className="p-4 lg:p-12 flex flex-col grow items-center justify-center text-center">
        <div className="w-full h-full flex flex-col max-h-[60vh] grow justify-between">
          <div>
            <p className="text-shadow-lg text-white text-2xl lg:text-[32px] font-bold mb-4 lg:mb-0">
              About BEARTH
            </p>
            <Heading
              type="h1"
              className="text-primary mb-2 lg:mb-0 title-stroke-white"
            >
              A Universe
              <br />
              Born from Love
            </Heading>
          </div>

          <div>
            <h2 className="text-primary title-stroke-white text-[20px] lg:text-[40px] font-semibold">
              BEARTH Is For Everyone
            </h2>
            <h2 className="lg:hidden">
              <TypewriterEffect
                {...typewriterDefaultOptions}
                className="text-primary title-stroke-white"
                font={{
                  fontFamily: "hoss-round",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "1",
                }}
                cursorMarginLeft={4}
              />
            </h2>
            <h2 className="hidden lg:block h-[40px]">
              <TypewriterEffect
                {...typewriterDefaultOptions}
                className="text-primary title-stroke-white"
                font={{
                  fontFamily: "hoss-round",
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "1",
                }}
                cursorMarginLeft={8}
                cursorWidth={4}
              />
            </h2>
          </div>
        </div>
      </div>

      <BearthFooter absolute />
    </MaxWidthConstraintedLayout>
  );
}

const typewriterDefaultOptions = {
  prefix: "Who ",
  className: "text-shadow-lg",
  words: [
    { word: "Has Lost Something Precious" },
    { word: "Believes In Second Chances" },
    { word: "Dreams Of A Gentler World" },
  ],
  typingSpeed: 65,
  deletingSpeed: 65,
  pauseDuration: 1000,
  cursorColor: "#FFFFFF",
  cursorWidth: 2,
  cursorHeight: 110,
};
