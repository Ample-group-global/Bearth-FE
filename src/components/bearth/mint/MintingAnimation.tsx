"use client";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import {
  MintAnimationCanvas,
  type MintAnimationCanvasHandle,
} from "@/components/bearth/mint/MintAnimationCanvas";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { createPublicClient, http, type Hex } from "viem";
import { useWalletConnect } from "@/components/wallet/WalletConnectContext";
import { BearthButton } from "@/components/bearth/BearthButton";
import { chainOptions } from "@/components/wallet/chains";
import { useMintFlow } from "@/provider/mint-flow-handler";

enum VideoState {
  Init = "init",
  InProgressLoop = "in_progress_loop",
  Completed = "completed",
  CompletedResult = "completed_result",
  Failed = "failed",
}

function MintResultOverlay({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="absolute w-full h-full inset-0"
      style={{
        backgroundColor: "#40444A",
        backgroundImage: "url(/assets/star.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0,
        animation: "fadeIn 1s ease-in 1s forwards",
      }}
    >
      {children}
    </div>
  );
}

export function MintingAnimation({ txHash }: { txHash: string }) {
  const chainOption =
    chainOptions[process.env.NEXT_PUBLIC_CONTRACT_NET as "mainnet" | "sepolia"];

  const { chain } = useWalletConnect();
  const [tokenId, setTokenId] = useState<[string, string] | null>(null);

  const [videoState, setVideoState] = useState<VideoState>(VideoState.Init);
  const [receiptStatus, setReceiptStatus] = useState<
    "success" | "reverted" | null
  >(null);
  const [canComplete, setCanComplete] = useState(false);
  const receiptLoadedRef = useRef(false);
  const canvasRef = useRef<MintAnimationCanvasHandle>(null);

  const publicClient = useMemo(
    () => (chain ? createPublicClient({ chain, transport: http() }) : null),
    [chain],
  );

  useEffect(() => {
    if (!publicClient || !txHash || receiptLoadedRef.current) return;
    receiptLoadedRef.current = true;

    setTimeout(() => {
      setCanComplete(true);
    }, 5000);

    publicClient
      .waitForTransactionReceipt({ hash: txHash as Hex })
      .then((receipt) => {
        console.log("Transaction Receipt: ", receipt);
        setReceiptStatus(receipt.status);
        const tokenId = receipt?.logs?.[0]?.topics?.[3];
        if (receipt.to && tokenId) {
          setTokenId([receipt.to, BigInt(tokenId).toString()]);
        }
      })
      .catch((e) => {
        setReceiptStatus("reverted");
        console.error("Mint Failed: ", e);
      });
  }, [publicClient, txHash]);

  useEffect(() => {
    if (
      canComplete &&
      (receiptStatus === "success" || receiptStatus === "reverted")
    ) {
      canvasRef.current?.next();
    }
  }, [canComplete, receiptStatus]);

  return (
    <MaxWidthConstraintedLayout
      as="main"
      paddingHeader
      paddingFooter
      fullHeight
      outerDivClassName="w-dvw h-dvh relative overflow-hidden"
      className="text-white w-full flex flex-col items-center px-4 lg:py-40"
    >
      <MintAnimationCanvas
        ref={canvasRef}
        steps={[
          { src: "/assets/mint-transaction-sent.webm" },
          { src: "/assets/mint-transaction-in-progress-loop.webm", loop: true },
          { src: "/assets/mint-transaction-complete.webm" },
        ]}
        onStepEnd={(stepIndex) => {
          if (stepIndex === 0) {
            setVideoState(VideoState.InProgressLoop);
          } else if (stepIndex === 1) {
            setVideoState(VideoState.Completed);
          } else if (stepIndex === 2) {
            if (receiptStatus === "success") {
              setVideoState(VideoState.CompletedResult);
            } else {
              setVideoState(VideoState.Failed);
            }
          }
        }}
      />

      {[
        VideoState.Completed,
        VideoState.Failed,
        VideoState.CompletedResult,
      ].includes(videoState) && <MintResultOverlay></MintResultOverlay>}

      {[VideoState.Init, VideoState.InProgressLoop].includes(videoState) && (
        <div className="fixed bottom-0 left-0 w-full flex justify-center pointer-events-none">
          <div
            className="relative w-full max-w-[1222px] flex items-center justify-center"
            style={{ aspectRatio: "1222 / 210" }}
          >
            <Image
              src="/assets/mint-text-box.svg"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
            />
            <span className="relative text-white text-xl md:text-3xl lg:text-[48px] font-semibold leading-none text-center tk-hoss-round pb-4">
              {(videoState === VideoState.Init ||
                videoState === VideoState.InProgressLoop) &&
                "Minting in progress..."}
            </span>
          </div>
        </div>
      )}

      {[VideoState.Failed, VideoState.CompletedResult].includes(videoState) && (
        <div
          className="absolute left-0 top-0 h-full w-full flex flex-col gap-4 items-center justify-center"
          style={{
            animation: "fadeIn 0.5s ease-in forwards",
            opacity: 0,
          }}
        >
          {videoState === VideoState.CompletedResult && (
            <>
              <h1 className="text-3xl md:text-5xl font-semibold">
                Mint Successful!
              </h1>
              <BearthButton
                type="secondary"
                href={
                  tokenId
                    ? chainOption.openseaUrl(tokenId[0], tokenId[1])
                    : undefined
                }
                target="_blank"
              >
                Check in Opensea
              </BearthButton>
            </>
          )}

          {videoState === VideoState.Failed && (
            <>
              <h1 className="text-3xl md:text-5xl font-semibold">
                Mint Failed
              </h1>
              <p className="text-center font-semibold text-base max-w-md">
                Unfortunately, your transaction was reverted.
              </p>
              <BearthButton type="secondary" href="/mint">
                Try Again
              </BearthButton>
            </>
          )}
        </div>
      )}
    </MaxWidthConstraintedLayout>
  );
}

export function MintFlowHandlerAnimation() {
  const { txHash } = useMintFlow();
  return <MintingAnimation txHash={txHash!} />;
}
