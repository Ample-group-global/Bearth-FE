import BearthBackgroundImage from "@/components/bearth/BearthBackgroundImage";
import BearthFooter from "@/components/bearth/navigation/BearthFooter";
import TypewriterEffect from "@/components/bearth/TypewriterEffect";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full">
      <BearthBackgroundImage></BearthBackgroundImage>
      {/* Content Container */}
      <div className="relative z-1 flex min-h-screen flex-col justify-between px-4 py-6 md:px-8 text-shadow-lg pt-20">
        {/* Hero Section */}
        <div className="p-4 md:p-12 flex flex-col md:grow">
          <div className="grow flex flex-col md:flex-row md:justify-between">
            <p className="text-white text-sm md:text-[32px] font-bold mb-2 md:mb-0">
              About BEARTH
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-black mb-2 md:mb-0">
              A Universe
              <br />
              Born from&nbsp;
              <br className="hidden md:block" />
              Love
            </h1>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-lg md:text-5xl lg:text-[64px] font-semibold">
              BEARTH Is For Everyone
            </h2>
            <h2 className="md:hidden">
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
            <h2 className="hidden md:block lg:hidden">
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
                  fontSize: "48px",
                  fontWeight: "600",
                  lineHeight: "1",
                }}
                textColor="#FFFFFF"
              />
            </h2>
            <h2 className="hidden lg:block">
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

        <BearthFooter />
      </div>
    </main>
  );
}
