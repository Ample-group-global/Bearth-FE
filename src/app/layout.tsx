import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ServerProvider } from "../provider/server-provider";
import BearthDesktopNavigationBar from "@/components/bearth/navigation/BearthDesktopNavigationBar";
import Image from "next/image";
import { BearthSideMenu } from "@/components/bearth/navigation/BearthSideMenu";
import Link from "next/link";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEARTH - Genosis NFT Minting",
  description: "BEARTH - Genosis NFT Minting is LIVE NOW!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {/* Top Navigation */}
        <header className="flex w-full items-center pt-4 fixed top-0 left-0 z-10">
          <div className="pl-2">
            <Link href="/">
              <Image
                src="/assets/icon.png"
                alt="Bearth Icon"
                width={48}
                height={48}
              />
            </Link>
          </div>

          <div className="flex grow items-center justify-center">
            <BearthDesktopNavigationBar className="hidden md:flex" />
          </div>

          <div className="pr-2 md:hidden">
            <BearthSideMenu />
          </div>
        </header>
        <ServerProvider>{children}</ServerProvider>
      </body>
    </html>
  );
}
