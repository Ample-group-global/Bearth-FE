import { MintingAnimation } from "@/components/bearth/mint/MintingAnimation";

export default async function MintingPage({
  params,
}: {
  params: Promise<{ txHash: string }>;
}) {
  const { txHash } = await params;
  return <MintingAnimation txHash={txHash} />;
}
