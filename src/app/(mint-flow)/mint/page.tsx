import { BearthButton } from "@/components/bearth/BearthButton";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import { WalletConnectControl } from "@/components/bearth/mint/wallet-connect-control";
import { WalletAddress } from "@/components/wallet/WalletAddress";
import { WalletBalance } from "@/components/wallet/WalletBalance";
import { cn } from "@/lib/utils";
import MintPageBackground from "../../../components/bearth/MintPageBackground";
import { BreathMintQty } from "@/components/wallet/BreathMintQty";
import { BreathMintPrice } from "@/components/wallet/BreathMintPrice";
import Image from "next/image";
import { BreathMintButton } from "@/components/wallet/BreathMintButton";

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

export default function MintPage() {
  // 20deg = public mint start
  // 40deg = phase 2 start
  // 80deg = sold out

  // whitelist mint to public mint: proceed by time
  // public mint to phase 2: proceed by minted quantity
  // phase 2 to sold out: proceed by minted quantity

  const progress = 0;

  return (
    <MaxWidthConstraintedLayout
      as="main"
      paddingHeader
      paddingFooter
      fullHeight
      outerDivClassName="w-dvw h-dvh relative overflow-hidden"
      className="text-white w-full flex flex-col items-center px-4 lg:py-40"
    >
      <MintPageBackground />

      {/* Top-Right Status Box */}
      <div className="w-full max-w-[500px] h-[200px] absolute top-0 right-0">
        <div className="relative text-white h-full w-full">
          <div className="absolute right-0 bottom-0 p-8 text-right font-hoss-round z-1">
            <div className="text-[20px] lg:text-[24px] font-semibold">
              PHASE1
            </div>
            <div className="text-[14px] lg:text-[20px] font-semibold">
              FREE MINTING
            </div>
            <div className="text-[10px] lg:text-[16px]">
              MINTERS ONLY NEED TO PAY THE GAS FEE
            </div>
            <div className="text-[10px] lg:text-[16px]">
              EACH WALLET CAN ONLY MINT ONE NFT
            </div>
          </div>
          <Image
            src="/assets/mint-status-bg.svg"
            alt="mint phase status"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Ring Container */}
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
                    <WalletConnectControl>
                      <MintForm />
                    </WalletConnectControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthConstraintedLayout>
  );
}

export function MintForm() {
  return (
    <div className="h-full grid grid-cols-3 grid-rows-2 text-center z-10">
      <div className="flex flex-col">
        <div className="font-semibold">ADDRESS</div>
        <WalletAddress className="max-w-[120px] truncate" />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">MINT QUANTITY</div>
        <BreathMintQty></BreathMintQty>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">TOTAL PRICE</div>
        <BreathMintPrice></BreathMintPrice>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">ETH BALANCE</div>
        <WalletBalance className="max-w-[120px] truncate" />
      </div>
      <div className="flex flex-col">
        <BreathMintButton></BreathMintButton>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">STATUS</div>
        <div className="text-green-500">MINT LIVE</div>
      </div>
    </div>
  );
}
