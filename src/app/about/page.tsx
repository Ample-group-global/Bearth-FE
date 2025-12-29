import RandomBear from "@/components/bearth/about/RandomBear";
import ScrollTransformContainer from "@/components/bearth/about/ScrollTransformContainer";
import SectionForth from "@/components/bearth/about/SectionForth";
import SectionLast from "@/components/bearth/about/SectionLast";
import SectionSecond from "@/components/bearth/about/SectionSecond";
import SectionThird from "@/components/bearth/about/SectionThird";
import SectionTop from "@/components/bearth/about/SectionTop";
import BearthBackgroundImage from "@/components/bearth/BearthBackgroundImage";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col justify-center overflow-hidden">
      <RandomBear />
      <div className="fixed inset-0 z-1">
        <SectionTop></SectionTop>
      </div>
      <div className="h-screen"></div>
      <div className="bg-secondary z-22 relative">
        <ScrollTransformContainer className="h-screen w-screen fixed inset-0 mix-blend-lighten">
          <BearthBackgroundImage src="/assets/star.mp4" showGradient={false} />
        </ScrollTransformContainer>
        <SectionSecond></SectionSecond>
        <SectionThird></SectionThird>
        <SectionForth></SectionForth>
        <SectionLast></SectionLast>
      </div>
    </main>
  );
}
