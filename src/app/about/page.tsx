import ScrollSnapContainer from "@/components/bearth/about/ScrollSnapContainer";
import SectionForth from "@/components/bearth/about/SectionForth";
import SectionLast from "@/components/bearth/about/SectionLast";
import SectionSecond from "@/components/bearth/about/SectionSecond";
import SectionThird from "@/components/bearth/about/SectionThird";
import SectionTop from "@/components/bearth/about/SectionTop";
import BearthBackgroundImage from "@/components/bearth/BearthBackgroundImage";

export default function AboutPage() {
  return (
    <main>
      <BearthBackgroundImage />
      <ScrollSnapContainer totalSections={5}>
        <SectionTop></SectionTop>
        <SectionSecond></SectionSecond>
        <SectionThird></SectionThird>
        <SectionForth></SectionForth>
        <SectionLast></SectionLast>
      </ScrollSnapContainer>
    </main>
  );
}
