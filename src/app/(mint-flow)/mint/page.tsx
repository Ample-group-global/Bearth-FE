import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import { WalletConnectControl } from "@/components/bearth/mint/wallet-connect-control";
import { WalletAddress } from "@/components/wallet/WalletAddress";
import { WalletBalance } from "@/components/wallet/WalletBalance";
import MintPageBackground from "../../../components/bearth/MintPageBackground";
import { BreathMintQty } from "@/components/wallet/BreathMintQty";
import { BreathMintPrice } from "@/components/wallet/BreathMintPrice";
import Image from "next/image";
import { BreathMintButton } from "@/components/wallet/BreathMintButton";
import MintRing from "@/components/bearth/mint/MintRing";

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
      <MintPageBackground />

      {/* Top-Right Status Box */}
      <div className="w-full max-w-[500px] h-[200px] absolute top-0 right-0">
        <div className="relative text-white h-full w-full">
          <div className="absolute right-0 bottom-0 pb-6 px-8 text-right font-hoss-round z-1">
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
      <MintRing>
        <WalletConnectControl>
          <MintForm />
        </WalletConnectControl>
      </MintRing>
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
