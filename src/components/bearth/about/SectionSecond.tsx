import Image from "next/image";
import MaxWidthConstraintedLayout from "../MaxWidthConstraintedLayout";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

export default function SectionSecond() {
  return (
    <MaxWidthConstraintedLayout
      as="section"
      paddingHeader
      paddingFooter
      className="px-4 text-white flex flex-col justify-center min-h-screen lg:h-screen"
      outerDivClassName="w-full bg-primary"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Heading type="h1">Welcome to Bearth!</Heading>
        <Heading type="h3" as="h2">
          BEARTH = BEAR+EARTH+BIRTH
        </Heading>
      </div>
      <div className="relative mt-4">
        <Image
          src="/assets/about-1.png"
          alt="Section Second"
          width={2278}
          height={1346}
          className="object-cover rounded-2xl aspect-4/3 lg:aspect-video shadow-2xl"
        />
        <div className="rounded-2xl lg:rounded-tr-none lg:rounded-bl-none bg-black lg:w-[650px] lg:absolute bottom-0 right-0 py-4 px-4 lg:px-8 mt-4 gap-4 flex flex-col">
          <Paragraph>
            When the bears awoke from their long hibernation, the world had
            changed. Humans had mysteriously vanished, leaving behind a
            collapsing "Second Earth" and... well, quite a mess.
          </Paragraph>
          <Paragraph>
            The bears didn't set out to "save the world." They simply thought:
            "We're the new landlords. Let's tidy up and make it cozy."
          </Paragraph>
        </div>
      </div>
    </MaxWidthConstraintedLayout>
  );
}
