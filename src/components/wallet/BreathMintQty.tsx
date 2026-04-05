"use client";
import { Phase, useBreathContract } from "./BreathContractContext";

export function BreathMintQty() {
  const breathContract = useBreathContract();
  const phase = breathContract.phase;

  if (breathContract.phase.isLoading || breathContract.limit.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {(phase.state === Phase.PublicMint || phase.state === Phase.PaidMint) && (
        <div>
          <input
            defaultValue={1}
            className="w-[38px] h-[36px] border-[1.5px] border-[rgba(255,255,255,0.14)] rounded-sm text-center m-1 outline-none focus:ring-0"
          ></input>
          /{breathContract.limit.state}
        </div>
      )}

      {(phase.state === Phase.NotStarted ||
        phase.state === Phase.WhitelistMint) && <div>1</div>}
    </>
  );
}
