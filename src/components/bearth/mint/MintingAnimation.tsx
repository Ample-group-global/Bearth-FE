"use client";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import { MintAnimationCanvas } from "@/components/bearth/mint/MintAnimationCanvas";
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
        animation: "fadeIn 3s ease-in 1s forwards",
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

  const publicClient = useMemo(
    () => (chain ? createPublicClient({ chain, transport: http() }) : null),
    [chain],
  );

  useEffect(() => {
    if (!publicClient || !txHash || receiptLoadedRef.current) return;
    receiptLoadedRef.current = true;

    publicClient
      .waitForTransactionReceipt({ hash: txHash as Hex })
      .then((receipt) => {
        setReceiptStatus(receipt.status);
        const tokenId = receipt?.logs?.[0]?.topics?.[3];
        if (receipt.to && tokenId) {
          setTokenId([receipt.to, BigInt(tokenId).toString()]);
        }

        setTimeout(() => {
          setCanComplete(true);
        }, 3000);
      })
      .catch(() => {
        setReceiptStatus("reverted");

        setTimeout(() => {
          setCanComplete(true);
        }, 3000);
      });
  }, [publicClient, txHash]);

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
        src="/assets/mint-transaction-sent.webm"
        videoLoop={false}
        containerClassName={videoState !== VideoState.Init ? "invisible" : ""}
        onEnded={() => {
          setVideoState(VideoState.InProgressLoop);
        }}
      />

      <MintAnimationCanvas
        src="/assets/mint-transaction-in-progress-loop.webm"
        videoLoop={!canComplete}
        active={videoState === VideoState.InProgressLoop}
        containerClassName={
          videoState !== VideoState.InProgressLoop ? "invisible" : ""
        }
        onEnded={() => {
          if (canComplete) {
            setVideoState(VideoState.Completed);
          }
        }}
      />

      <MintAnimationCanvas
        src="/assets/mint-transaction-complete.webm"
        videoLoop={false}
        active={videoState === VideoState.Completed}
        containerClassName={
          videoState !== VideoState.Completed ? "invisible" : ""
        }
        onEnded={() => {
          if (receiptStatus === "success") {
            setVideoState(VideoState.CompletedResult);
          } else {
            setVideoState(VideoState.Failed);
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
