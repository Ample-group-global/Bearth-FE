import RandomBear from "@/components/bearth/about/RandomBear";
import ScrollSnapContainer from "@/components/bearth/about/ScrollSnapContainer";
import SectionForth from "@/components/bearth/about/SectionForth";
import SectionLast from "@/components/bearth/about/SectionLast";
import SectionSecond from "@/components/bearth/about/SectionSecond";
import SectionThird from "@/components/bearth/about/SectionThird";
import SectionTop from "@/components/bearth/about/SectionTop";

export default function AboutPage() {
  return (
    <main>
      <RandomBear />
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
