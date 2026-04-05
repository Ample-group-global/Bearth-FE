"use client";
import MaxWidthConstraintedLayout from "@/components/bearth/MaxWidthConstraintedLayout";
import BearthBackgroundImage from "@/components/bearth/BearthBackgroundImage";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { createPublicClient, http, type Hex } from "viem";
import { useWalletConnect } from "@/components/wallet/WalletConnectContext";

enum VideoState {
  Init = "init",
  InProgress1 = "in_progress_1",
  InProgress2 = "in_progress_2",
  Completed = "completed",
  CompletedResult = "completed_result",
  Failed = "failed",
}

export default function MintingPage() {
  const { txHash } = useParams<{ txHash: string }>();
  const { chain } = useWalletConnect();

  const [videoState, setVideoState] = useState<VideoState>(VideoState.Init);
  const [receiptStatus, setReceiptStatus] = useState<
    "success" | "reverted" | null
  >(null);
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
        setTimeout(() => {
          setVideoState((prev) =>
            prev === VideoState.InProgress1 ? VideoState.InProgress2 : prev,
          );
        }, 3000);
      })
      .catch(() => {
        setReceiptStatus("reverted");
        setVideoState(VideoState.Failed);
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
      <BearthBackgroundImage
        src="/assets/mint-transaction-sent.webm"
        videoLoop={false}
        active={videoState === VideoState.Init}
        containerClassName={videoState !== VideoState.Init ? "invisible" : ""}
        videoOptions={{
          onEnded: () => {
            setVideoState(VideoState.InProgress1);
          },
        }}
      />

      <BearthBackgroundImage
        src="/assets/mint-transaction-in-progress-1.webm"
        videoLoop={true}
        active={videoState === VideoState.InProgress1}
        containerClassName={
          videoState !== VideoState.InProgress1 ? "invisible" : ""
        }
      />

      <BearthBackgroundImage
        src="/assets/mint-transaction-in-progress-2.webm"
        videoLoop={false}
        active={videoState === VideoState.InProgress2}
        containerClassName={
          videoState !== VideoState.InProgress2 ? "invisible" : ""
        }
        videoOptions={{
          onEnded: () => {
            setVideoState(
              receiptStatus === "success"
                ? VideoState.Completed
                : VideoState.Failed,
            );
          },
        }}
      />

      <BearthBackgroundImage
        src="/assets/mint-transaction-complete.webm"
        videoLoop={false}
        active={videoState === VideoState.Completed}
        containerClassName={
          videoState !== VideoState.Completed ? "invisible" : ""
        }
        videoOptions={{
          onEnded: () => {
            setVideoState(VideoState.CompletedResult);
          },
        }}
      />

      {(videoState === VideoState.Failed ||
        videoState === VideoState.CompletedResult) && (
        <BearthBackgroundImage src="/assets/mint-setup.webp" />
      )}

      {videoState !== VideoState.Completed && (
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
                videoState === VideoState.InProgress1 ||
                videoState === VideoState.InProgress2) &&
                "Minting in progress..."}
              {videoState === VideoState.CompletedResult && "Mint Successful!"}
              {videoState === VideoState.Failed && "Mint Failed"}
            </span>
          </div>
        </div>
      )}
    </MaxWidthConstraintedLayout>
  );
}
