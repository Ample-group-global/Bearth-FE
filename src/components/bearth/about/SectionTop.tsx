import Heading from "../Heading";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import BearthFooter from "../navigation/BearthFooter";
import TypewriterEffect from "../TypewriterEffect";

export default function SectionTop() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      className="flex flex-col justify-between pt-20 relative min-h-screen lg:py-40"
      paddingHeader
      paddingFooter
    >
      {/* Hero Section */}
      <div className="p-4 lg:p-12 flex flex-col lg:grow">
        <div className="grow flex flex-col lg:flex-row lg:justify-between">
          <p className="text-white text-sm lg:text-[32px] font-bold mb-2 lg:mb-0">
            About BEARTH
          </p>
          <Heading type="h1" className="text-white mb-2 lg:mb-0">
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
              words={[
                { word: "Who Has Lost Something Precious" },
                { word: "Who Believes In Second Chances" },
                { word: "Who Dreams Of A Gentler World" },
              ]}
              typingSpeed={100}
              deletingSpeed={100}
              pauseDuration={1000}
              cursorColor="#FFFFFF"
              cursorWidth={2}
              cursorHeight={100}
              font={{
                fontFamily: "hoss-round",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "1",
              }}
              textColor="#FFFFFF"
            />
          </h2>
          <h2 className="hidden lg:block h-[64px]">
            <TypewriterEffect
              words={[
                { word: "Who Has Lost Something Precious" },
                { word: "Who Believes In Second Chances" },
                { word: "Who Dreams Of A Gentler World" },
              ]}
              typingSpeed={100}
              deletingSpeed={100}
              pauseDuration={1000}
              cursorColor="#FFFFFF"
              cursorWidth={2}
              cursorHeight={100}
              font={{
                fontFamily: "hoss-round",
                fontSize: "64px",
                fontWeight: "600",
                lineHeight: "1",
              }}
              textColor="#FFFFFF"
            />
          </h2>
        </div>
      </div>
      <BearthFooter absolute />
    </MaxWidthConstraintedLayout>
  );
}
