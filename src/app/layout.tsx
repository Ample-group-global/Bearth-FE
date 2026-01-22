import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./font.css";
import "./globals.css";
import { BreathLiquidGlassBase } from "@/components/bearth/navigation/BearthLiquidGlassEffect";
import { GoogleTagManager } from "@next/third-parties/google";
import BearthTopBar from "@/components/bearth/navigation/BearthTopBar";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEARTH | Your perfect nap spot is waiting.",
  description:
    "Bearth is an original cross-media IP that conveys healing, coexistence, and sustainability values ​​through the story of the Bear Tribe, creating experiences that span physical and digital worlds.",
  openGraph: {
    title: "BEARTH | Your perfect nap spot is waiting.",
    description:
      "Bearth is an original cross-media IP that conveys healing, coexistence, and sustainability values ​​through the story of the Bear Tribe, creating experiences that span physical and digital worlds.",
    images: "/assets/og-image.png",
    type: "website",
  },
  twitter: {
    title: "BEARTH | Your perfect nap spot is waiting.",
    description:
      "Bearth is an original cross-media IP that conveys healing, coexistence, and sustainability values ​​through the story of the Bear Tribe, creating experiences that span physical and digital worlds.",
    images: "/assets/og-image.png",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <body className={`${figtree.variable} antialiased bg-secondary`}>
        {/* Top Navigation */}
        <BearthTopBar />
        {children}
        <BreathLiquidGlassBase />
      </body>
    </html>
  );
}
