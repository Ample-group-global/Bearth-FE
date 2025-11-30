import Heading from "@/components/bearth/Heading";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import BreathSocialLinks from "@/components/bearth/navigation/BreathSocialLinks";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <MaxWidthConstraintedLayout
      as="main"
      paddingHeader
      paddingFooter
      fullHeight
      outerDivClassName="w-full bg-secondary flex flex-col items-center justify-center"
      className="text-background flex flex-col items-center justify-center gap-4"
    >
      <Heading type="h1" className="text-center">
        Contact
      </Heading>
      <div className="flex flex-row gap-12 justify-center">
        <Link href="#">
          <Heading
            type="h2"
            className="text-2xl transition-transform hover:scale-110"
          >
            Inquiries
          </Heading>
        </Link>

        <Link href="#">
          <Heading
            type="h2"
            className="text-2xl transition-transform hover:scale-110"
          >
            Support
          </Heading>
        </Link>
      </div>

      <div className="flex flex-row gap-4 justify-center">
        <BreathSocialLinks />
      </div>

      <Image
        className="mt-4 aspect-square max-w-[500px]"
        src="/assets/placeholder.svg"
        alt="Contact"
        width={1000}
        height={1000}
      />
    </MaxWidthConstraintedLayout>
  );
}
