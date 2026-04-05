"use client";
import { useRouter } from "next/navigation";
import { BearthButton } from "../bearth/BearthButton";
import { useBreathContract } from "./BreathContractContext";

export function BreathMintButton() {
  const contract = useBreathContract();
  const nav = useRouter();

  return (
    <BearthButton
      onClick={async () => {
        try {
          const hash = await contract.mint();
          nav.push(`/minting/${hash}`);
        } catch (e) {
          console.error("Minting failed:", e);
          if (e instanceof Error && e.message.includes("User rejected the request")) {
            return;
          }
          nav.push("/minting/failed");
        }
      }}
      className="h-[35px]"
      href="#"
      type="secondary"
    >
      Mint
    </BearthButton>
  );
}
