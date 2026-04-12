"use client";

import { useBreathContract } from "@/components/wallet/BreathContractContext";
import { cn } from "@/lib/utils";

export function RingContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("absolute w-full h-full", className)}>
      <div className="text-xs absolute h-[100px] top-0 left-1/2 -translate-x-1/2 text-white flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function RingItem({
  title,
  value,
  className,
}: {
  title?: string;
  value?: number | string;
  className?: string;
}) {
  return (
    <RingContainer className={cn("font-semibold", className)}>
      <div>{title}</div>
      <div className="relative flex h-[35px] my-1">
        <div className="absolute z-0 h-[35px] left-1/2 -translate-x-1/2 top-0 w-[2px] bg-white"></div>
        <div className="z-1 w-[24px] h-[24px] rounded-full bg-black border-2 border-white flex items-center justify-center place-self-center">
          <div className="w-[9px] h-[9px] rounded-full bg-white"></div>
        </div>
      </div>
      <div>{value ?? "\u00A0"}</div>
    </RingContainer>
  );
}

export function RingLine({ className }: { className?: string }) {
  return (
    <RingContainer className={className}>
      <div className="relative flex h-[24px] my-1">
        <div className="absolute z-0 h-[24px] left-1/2 -translate-x-1/2 top-0 w-[2px] bg-white"></div>
      </div>
    </RingContainer>
  );
}

export default function MintRing({ children }: { children: React.ReactNode }) {
  // 20deg = public mint start
  // 40deg = phase 2 start
  // 80deg = sold out

  // whitelist mint to public mint: proceed by time
  // public mint to phase 2: proceed by minted quantity
  // phase 2 to sold out: proceed by minted quantity
  const contract = useBreathContract();

  if (contract.mintProgress.isLoading || contract.mintTime.isLoading) {
    return <></>;
  }

  const now = Date.now() / 1000;
  const startTime = Number(contract.mintTime.state.startTime);
  const endTime = Number(contract.mintTime.state.endTime);

  const phase0Progress = Math.min(
    1,
    Math.max(0, (now - startTime) / (endTime - startTime)),
  );
  const stage1Supply = Number(contract.mintProgress.state.stage1Supply);
  const stage1MintedQty = Number(contract.mintProgress.state.stage1MintedQty);
  const phase1Progress =
    stage1Supply > 0
      ? Math.min(1, Math.max(0, stage1MintedQty / stage1Supply))
      : 0;

  const phase2Progress = 0;

  const progress =
    phase0Progress * 20 + phase1Progress * 20 + phase2Progress * 40;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -bottom-[850px] md:-bottom-[930px] w-[1200px] h-[1200px] scale-75 md:scale-100 flex items-center justify-center tk-hoss-round-wide"
      style={{
        rotate: `-${progress}deg`,
      }}
    >
      <div className="relative rounded-full bg-black/50 w-full h-full flex items-center justify-center">
        {/* Ring Items */}
        <RingItem title="White List Mint" value={0} className="rotate-0" />
        <RingItem title="Public Mint" className="rotate-20" />
        <RingItem title="Phase 2 Start" value={303} className="rotate-40" />

        <RingItem title="Sold Out" value={606} className="rotate-80" />

        {/* <RingLine className="rotate-120" /> */}

        {/* Inner Circle */}
        <div className="rounded-full w-[1100px] h-[1100px] border-3 border-white flex items-center justify-center">
          <div
            className="rounded-full w-[1000px] h-[1000px] bg-black/20 border border-white/20 relative"
            style={{
              rotate: `${progress}deg`,
            }}
          >
            <div className="rounded-full absolute top-0 left-0 w-full h-full justify-center flex flex-row mt-9 text-sm">
              {/* 3x2 grid, height is fit-content */}
              <div className="h-[140px]">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
