"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { unlockAudioContext } from "@/lib/audioContext";
import { useMintFlow } from "@/provider/mint-flow-handler";
import { BearthButton } from "../bearth/BearthButton";
import { Phase, useBreathContract } from "./BreathContractContext";

export function BreathMintButton() {
  const contract = useBreathContract();
  const { setTxHash } = useMintFlow();
  const displayMethod = "redirect" as "mint-flow" | "redirect";
  const router = useRouter();

  const redirect = useCallback(
    (txHash: string) => {
      if (displayMethod === "redirect") {
        router.push(`/minting/${txHash}`);
      }

      if (displayMethod === "mint-flow") {
        setTxHash(txHash);
      }
    },
    [displayMethod],
  );

  return (
    <div>
      <BearthButton
        disabled={
          contract.phase.state === Phase.WhitelistMint &&
          !contract.isWhitelisted.state
        }
        onClick={async () => {
          unlockAudioContext(); // create/resume AudioContext from user gesture
          try {
            const hash = await contract.mint();
            redirect(hash);
          } catch (e) {
            console.error("Minting failed:", e);
            if (
              e instanceof Error &&
              e.message.includes("User rejected the request")
            ) {
              return;
            }

            redirect("failed");
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
