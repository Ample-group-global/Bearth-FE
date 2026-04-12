"use client";
import { Phase, useBreathContract } from "./BreathContractContext";

export function BreathMintQty() {
  const breathContract = useBreathContract();
  const phase = breathContract.phase;
  const limit =
    phase.state === Phase.WhitelistMint && !breathContract.isWhitelisted
      ? 0
      : breathContract.limit.state;

  if (
    breathContract.phase.isLoading ||
    breathContract.limit.isLoading ||
    breathContract.isWhitelisted.isLoading
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        name="mintQty"
        disabled={
          phase.state === Phase.NotStarted ||
          phase.state === Phase.WhitelistMint
        }
        value={breathContract.mintQty}
        className="w-[38px] h-[36px] border-[1.5px] border-[rgba(255,255,255,0.14)] rounded-sm text-center m-1 outline-none focus:ring-0"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (isNaN(value) || value < 0) {
            breathContract.setMintQty(1);
          } else {
            breathContract.setMintQty(value);
          }
        }}
      ></input>
      / {limit}
    </div>
  );
}
