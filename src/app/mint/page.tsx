import BearthBackgroundImage from "@/components/bearth/BearthBackgroundImage";
import { BearthButton } from "@/components/bearth/BearthButton";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import { WalletConnectControl } from "@/components/bearth/mint/wallet-connect-control";
import { WalletAddress } from "@/components/wallet/WalletAddress";
import { WalletBalance } from "@/components/wallet/WalletBalance";
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
      <div>{value}</div>
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
  return (
    <MaxWidthConstraintedLayout
      as="main"
      paddingHeader
      paddingFooter
      fullHeight
      outerDivClassName="w-dvw h-dvh relative overflow-hidden"
      className="text-white w-full flex flex-col items-center px-4 lg:py-40"
    >
      <BearthBackgroundImage src="/assets/mint-bg-2.png" showGradient={false} />

      {/* Top-Right Status Box */}
      {/* <div className="w-full max-w-[500px] h-[200px] absolute top-0 right-0">
        <div className="relative text-white h-full w-full">
          Hello
          <BearthBackgroundImage src="/assets/mint-status-bg.svg" absolute />
        </div>
      </div> */}

      {/* Ring Container */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[850px] md:-bottom-[930px] w-[1200px] h-[1200px] scale-75 md:scale-100 flex items-center justify-center tk-hoss-round-wide">
        <div className="relative rounded-full bg-black/50 w-full h-full flex items-center justify-center">
          {/* Ring Items */}
          <RingItem title="White List Mint" value={0} className="rotate-0" />
          <RingItem title="Public Mint" value={0} className="rotate-20" />
          <RingItem title="Phase 2 Start" value={303} className="rotate-40" />

          <RingItem title="Sold Out" value={606} className="rotate-80" />

          <RingLine className="rotate-120" />

          {/* Inner Circle */}
          <div className="rounded-full w-[1100px] h-[1100px] border-3 border-white flex items-center justify-center">
            <div className="rounded-full w-[1000px] h-[1000px] bg-black/20 border border-white/20 relative">
              <div className="rounded-full absolute top-0 left-0 w-full h-full justify-center flex flex-row mt-9 text-sm">
                {/* 3x2 grid, height is fit-content */}
                <div className="h-[140px]">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <WalletConnectControl>
                      <MintForm />
                    </WalletConnectControl>
                  </div>
                  {/* <MintForm /> */}
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
        <div>1/3</div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">TOTAL PRICE</div>
        <div>0.0303 ETH</div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">ETH BALANCE</div>
        <WalletBalance className="max-w-[120px] truncate" />
      </div>
      <div className="flex flex-col">
        <BearthButton className="h-[35px]" href="#" type="secondary">
          Mint
        </BearthButton>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">STATUS</div>
        <div className="text-green-500">MINT LIVE</div>
      </div>
    </div>
  );
}
