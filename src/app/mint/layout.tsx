import { ServerProvider } from "@/provider/server-provider";

export default function MintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ServerProvider>{children}</ServerProvider>;
}
