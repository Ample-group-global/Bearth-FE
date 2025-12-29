import Image from "next/image";
import BearthBackgroundImage from "../BearthBackgroundImage";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import TypewriterEffect from "../TypewriterEffect";

export default function SectionTop() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      outerDivClassName="relative z-21 bg-secondary"
      className="flex flex-col justify-between relative min-h-screen"
      paddingHeader
      paddingFooter
      slotOutside={
        <BearthBackgroundImage src="/assets/about-bg-top.webm" absolute />
      }
    >
      {/* Hero Section */}
      <div className="p-4 lg:p-12 flex flex-col grow items-center justify-center text-center">
        <div className="w-full flex flex-col grow justify-between max-h-[70vh]">
          <div className="relative flex items-center justify-center h-[20vh]">
            <Image
              src="/assets/logo.svg"
              alt="Bearth Logo"
              unoptimized
              className="w-full h-full object-contain"
              fill
              sizes="100vw"
            />
          </div>

          <div>
            <h2 className="text-white title-stroke2 title-strokecolor-primary text-[20px] font-semibold">
              BEARTH Is For Everyone
            </h2>
            <h2>
              <TypewriterEffect
                {...typewriterDefaultOptions}
                className="text-white title-stroke2 title-strokecolor-primary"
                font={{
                  fontFamily: "hoss-round",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "1",
                }}
                cursorMarginLeft={4}
              />
            </h2>
          </div>
        </div>
      </div>
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
