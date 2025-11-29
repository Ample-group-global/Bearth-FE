import Image from "next/image";
import { BearthButton } from "../../components/bearth/BearthButton";
import BearthBackgroundImage from "@/components/bearth/BearthBackgroundImage";
import BearthFooter from "@/components/bearth/navigation/BearthFooter";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full">
      <BearthBackgroundImage></BearthBackgroundImage>
      {/* Content Container */}
      <div className="relative z-1 flex min-h-screen flex-col items-center justify-between px-4 py-6 md:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center grow">
          {/* Main Logo */}
          <div className="relative mb-2">
            <Image
              fetchPriority="high"
              loading="eager"
              src="/assets/logo.png"
              alt="Bearth Logo"
              width={924}
              height={271}
            />
          </div>

          {/* Subtitle */}
          <h2 className="mb-8 text-2xl font-black tracking-wide drop-shadow-md md:text-4xl text-white">
            Genosis NFT Minting is LIVE NOW!
          </h2>
          {/* CTA Button */}
          <BearthButton />
        </div>

        <BearthFooter />
      </div>
    </main>
  );
}
