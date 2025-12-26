import RandomBear from "@/components/bearth/about/RandomBear";
import SectionForth from "@/components/bearth/about/SectionForth";
import SectionLast from "@/components/bearth/about/SectionLast";
import SectionSecond from "@/components/bearth/about/SectionSecond";
import SectionThird from "@/components/bearth/about/SectionThird";
import SectionTop from "@/components/bearth/about/SectionTop";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col justify-center overflow-hidden">
      <RandomBear />
      <SectionTop></SectionTop>
      <SectionSecond></SectionSecond>
      <SectionThird></SectionThird>
      <SectionForth></SectionForth>
      <SectionLast></SectionLast>
    </main>
  );
}
