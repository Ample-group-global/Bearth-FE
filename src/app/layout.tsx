import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ServerProvider } from "../provider/server-provider";
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
      <body className={`${figtree.variable} antialiased`}>
        {/* Top Navigation */}
        <BearthTopBarScrollDetection>
          <BearthTopBar />
        </BearthTopBarScrollDetection>
        <ServerProvider>{children}</ServerProvider>
      </body>
    </html>
  );
}
