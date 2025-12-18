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
        <BearthBackgroundImage src="/assets/about-bg-top.png" absolute />
      }
    >
      {/* Hero Section */}
      <div className="p-4 lg:p-12 flex flex-col lg:grow">
        <div className="grow flex flex-col lg:flex-row lg:justify-between">
          <p className="text-shadow-lg text-white text-sm lg:text-[32px] font-bold mb-2 lg:mb-0">
            About BEARTH
          </p>
          <Heading
            type="h1"
            className="text-primary mb-2 lg:mb-0 title-stroke-white"
          >
            A Universe
            <br />
            Born from&nbsp;
            <br className="hidden lg:block" />
            Love
          </Heading>
        </div>
        <div className="flex flex-col">
          <Heading type="h2" className="text-white">
            BEARTH Is For Everyone
          </Heading>
          <h2 className="lg:hidden">
            <TypewriterEffect
              {...typewriterDefaultOptions}
              font={{
                fontFamily: "hoss-round",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "1",
              }}
            />
          </h2>
          <h2 className="hidden lg:block h-[64px]">
            <TypewriterEffect
              {...typewriterDefaultOptions}
              font={{
                fontFamily: "hoss-round",
                fontSize: "64px",
                fontWeight: "600",
                lineHeight: "1",
              }}
            />
          </h2>
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
  cursorHeight: 100,
  textColor: "#FFFFFF",
};
