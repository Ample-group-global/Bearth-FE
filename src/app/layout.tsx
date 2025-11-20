import type { Metadata } from "next";
import "./globals.css";
import { ServerProvider } from "./provider/server-provider";

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
      <body className="antialiased">
        <ServerProvider>{children}</ServerProvider>
      </body>
    </html>
  );
}
