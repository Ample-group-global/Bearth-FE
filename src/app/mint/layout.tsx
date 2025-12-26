import { notFound } from "next/navigation";
import { ServerProvider } from "@/provider/server-provider";

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
