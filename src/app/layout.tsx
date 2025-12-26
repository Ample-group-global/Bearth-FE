import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./font.css";
import "./globals.css";
import { BreathLiquidGlassBase } from "@/components/bearth/navigation/BearthLiquidGlassEffect";
import BearthTopBar from "@/components/bearth/navigation/BearthTopBar";
import BearthTopBarScrollDetection from "@/components/bearth/navigation/BearthTopBarScrollDetection";

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
      <body className={`${figtree.variable} antialiased bg-secondary`}>
        {/* Top Navigation */}
        <BearthTopBarScrollDetection>
          <BearthTopBar />
        </BearthTopBarScrollDetection>
        {children}
        <BreathLiquidGlassBase />
      </body>
    </html>
  );
}
