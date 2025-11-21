import { ArrowRight } from "lucide-react";
import { SiDiscord, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/assets/bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-4 py-6 md:px-8">
        {/* Top Navigation */}
        <header className="flex w-full items-center pt-4">
          <Image
            src="/assets/icon.png"
            alt="Bearth Icon"
            width={48}
            height={48}
          />

          <div className="flex grow items-center justify-center">
            <nav className="rounded-full border border-white/30 px-8 py-2 backdrop-blur-sm">
              <ul className="flex items-center gap-6 text-sm font-bold tracking-wider md:text-base">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-300 transition-colors"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="text-white/50">|</li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-300 transition-colors"
                  >
                    CITY
                  </Link>
                </li>
                <li className="text-white/50">|</li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-300 transition-colors"
                  >
                    MINDMAP
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center grow">
          {/* Main Logo */}
          <div className="relative mb-2">
            <Image
              src="/assets/logo.png"
              alt="Bearth Logo"
              width={924}
              height={271}
            />
          </div>

          {/* Subtitle */}
          <h2 className="mb-8 text-2xl font-black tracking-wide drop-shadow-md md:text-4xl">
            Genosis NFT Minting is LIVE NOW!
          </h2>

          {/* CTA Button */}
          <Link
            href="#"
            className="group flex items-center gap-2 rounded-lg bg-[#0ea5e9] px-8 py-3 text-lg font-black uppercase tracking-wide text-black transition-all hover:bg-[#38bdf8] hover:scale-105 shadow-[0_4px_0_#000]"
          >
            Join the Journey
            <ArrowRight className="h-6 w-6 stroke-3" />
          </Link>
        </div>

        {/* Footer */}
        <footer className="w-full items-end justify-between pb-4 hidden md:flex">
          <div className="text-3xl font-black tracking-wide drop-shadow-md">
            Contact
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="transition-transform hover:scale-110">
              <SiDiscord className="h-8 w-8 drop-shadow-md" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link href="#" className="transition-transform hover:scale-110">
              <SiInstagram className="h-8 w-8 drop-shadow-md" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="transition-transform hover:scale-110">
              <SiX className="h-8 w-8 drop-shadow-md" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
