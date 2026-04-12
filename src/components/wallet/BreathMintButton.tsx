"use client";
import { useRouter } from "next/navigation";
import { BearthButton } from "../bearth/BearthButton";
import { Phase, useBreathContract } from "./BreathContractContext";

export function BreathMintButton() {
  const contract = useBreathContract();
  const nav = useRouter();

  return (
    <div>
      <BearthButton
        disabled={
          contract.phase.state === Phase.WhitelistMint &&
          !contract.isWhitelisted.state
        }
        onClick={async () => {
          try {
            const hash = await contract.mint();
            nav.push(`/minting/${hash}`);
          } catch (e) {
            console.error("Minting failed:", e);
            if (
              e instanceof Error &&
              e.message.includes("User rejected the request")
            ) {
              return;
            }
            nav.push("/minting/failed");
          }
        }}
        className="h-[35px]"
        type="secondary"
      >
        Mint
      </BearthButton>
    </div>
  );
}
