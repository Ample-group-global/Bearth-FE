import { ServerProvider } from "@/provider/server-provider";
import { notFound } from "next/navigation";

export default function MintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!process.env.CONTRACT_NET) {
    return notFound();
  }
  return <ServerProvider>{children}</ServerProvider>;
}
