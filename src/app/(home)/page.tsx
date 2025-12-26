import Image from "next/image";
import { BearthButton } from "../../components/bearth/BearthButton";
import BearthBackgroundImage from "@/components/bearth/BearthBackgroundImage";
import BearthFooter from "@/components/bearth/navigation/BearthFooter";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";

export default function HomePage() {
  return (
    <MaxWidthConstraintedLayout
      as="main"
      fullHeight
      outerDivClassName="relative"
      className="relative w-full"
    >
      <BearthBackgroundImage src="/assets/home-bg.webp"></BearthBackgroundImage>
      {/* Content Container */}
      <div className="relative z-1 flex min-h-screen flex-col items-center justify-between px-4 py-6 md:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center grow w-full">
          {/* Main Logo */}
          <div className="relative mb-2 w-full aspect-3/1">
            <Image
              fetchPriority="high"
              loading="eager"
              src="/assets/logo.png"
              alt="Bearth Logo"
              fill
              sizes="(max-width: 768px) 80vw, 100vw"
              className="object-contain"
            />
          </div>

          {/* Subtitle */}
          <h2 className="mb-8 text-2xl font-black tracking-wide drop-shadow-md md:text-4xl text-white">
            Genosis NFT Minting is LIVE NOW!
          </h2>
          {/* CTA Button */}
          <BearthButton href="/about">Join the Journey</BearthButton>
        </div>

        <BearthFooter absolute />
      </div>
    </MaxWidthConstraintedLayout>
  );
}
