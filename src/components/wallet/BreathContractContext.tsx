"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  createPublicClient,
  createWalletClient,
  custom,
  getContract,
  type Hex,
  http,
} from "viem";
import useSWR from "swr";

import BearthNFTAbi from "@/BearthNFTAbi";
import { useWalletConnect } from "./WalletConnectContext";
import { getWhitelistProof } from "@/lib/whitelist-proof";

export type BreathAbi = typeof BearthNFTAbi.abi;

export enum Phase {
  NotStarted, // 0: Before any minting
  WhitelistMint, // 1: Whitelist minting phase
  PublicMint, // 2: Public minting phase (Phase 1)
  PaidMint, // 3: Paid minting phase (Phase 2)
}

export function parsePhase(phase: number): Phase {
  switch (phase) {
    case 0:
      return Phase.NotStarted;
    case 1:
      return Phase.WhitelistMint;
    case 2:
      return Phase.PublicMint;
    case 3:
      return Phase.PaidMint;
    default:
      throw new Error(`Unknown phase: ${phase}`);
  }
}

export interface SWRState<T> {
  state: T;
  isLoading: boolean;
}

export interface BreathContractContextValue {
  phase: SWRState<Phase>;
  minted: SWRState<bigint>;
  limit: SWRState<bigint>;
  price: SWRState<bigint>;
  isWhitelisted: SWRState<boolean>;

  mint: () => Promise<Hex>;
  mintQty: number;
  setMintQty: (qty: number) => void;
  mintTime: SWRState<{ startTime: bigint; endTime: bigint }>;
  mintProgress: SWRState<{
    stage1MintedQty: bigint;
    stage1Supply: bigint;
    maxSupply: bigint;
  }>;
}

const defaultValue: BreathContractContextValue = {
  phase: { state: Phase.NotStarted, isLoading: true },
  minted: { state: BigInt(0), isLoading: true },
  limit: { state: BigInt(0), isLoading: true },
  price: { state: BigInt(0), isLoading: true },
  isWhitelisted: { state: false, isLoading: true },
  mintTime: {
    state: { startTime: BigInt(0), endTime: BigInt(0) },
    isLoading: true,
  },
  mintProgress: {
    state: {
      stage1MintedQty: BigInt(0),
      stage1Supply: BigInt(0),
      maxSupply: BigInt(0),
    },
    isLoading: true,
  },
  mint: async () => "0x" as Hex,
  mintQty: 1,
  setMintQty: () => {},
};

export const BreathContractContext =
  createContext<BreathContractContextValue>(defaultValue);

export function BreathContractProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mintQty, setMintQty] = useState(1);

  const { chain, wallet } = useWalletConnect();

  const { data: provider } = useSWR(
    wallet ? ["eth-provider", wallet.address] : null,
    () => {
      if (!wallet) return null;
      return wallet.getEthereumProvider();
    },
  );

  const publicClient = useMemo(
    () =>
      chain
        ? createPublicClient({
            chain,
            transport: http(process.env.NEXT_PUBLIC_RPC_URL),
          })
        : null,
    [chain],
  );

  const walletClient = useMemo(
    () =>
      wallet && chain && provider
        ? createWalletClient({
            account: wallet.address as Hex,
            chain,
            transport: custom(provider),
          })
        : undefined,
    [wallet, chain, provider],
  );

  const contract = useMemo(
    () =>
      publicClient && walletClient
        ? getContract({
            address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
            abi: BearthNFTAbi.abi,
            client: { public: publicClient, wallet: walletClient },
          })
        : null,
    [publicClient, walletClient],
  );

  const { data: phase, isLoading: phaseLoading } = useSWR(
    contract ? (["contract-phase", wallet?.address, contract] as const) : null,
    ([, , c]) => c.read.phase().then((p) => parsePhase(p as number)),
  );

  const { data: whitelistProof, isLoading: whitelistProofLoading } = useSWR(
    wallet ? (["whitelist-proof", wallet.address] as const) : null,
    async ([, address]) => {
      const result = await getWhitelistProof(address);
      if (!result.is_whitelisted) {
        setMintQty(0);
      }
      return result;
    },
  );

  const { data: minted, isLoading: mintedLoading } = useSWR(
    contract && wallet && phase !== undefined
      ? (["minted", wallet, phase, contract] as const)
      : null,
    async ([, w, p, c]) => {
      return c.read.minted([w.address as Hex]);
    },
  );

  const { data: limit, isLoading: limitLoading } = useSWR(
    contract && phase !== undefined
      ? (["limit", phase, contract] as const)
      : null,
    async ([, p, c]) => {
      if (p === Phase.WhitelistMint) {
        return c.read.limit1();
      } else if (p === Phase.PaidMint) {
        return c.read.limit2();
      }
      return BigInt(0);
    },
  );

  const { data: price, isLoading: priceLoading } = useSWR(
    contract && phase !== undefined
      ? (["price", phase, contract] as const)
      : null,
    async ([, , c]) => c.read.PRICE(),
  );

  const { data: mintTime, isLoading: mintTimeLoading } = useSWR(
    contract ? (["mint-time", contract] as const) : null,
    async ([, c]) => {
      const [startTime, endTime] = await Promise.all([
        c.read.wlStart(),
        c.read.wlEnd(),
      ]).then(([start, end]) => [BigInt(start), BigInt(end)]);
      console.log("Mint time:", { startTime, endTime });
      return { startTime, endTime };
    },
  );

  const { data: mintProgress, isLoading: mintProgressLoading } = useSWR(
    contract ? (["mint-progress", contract] as const) : null,
    async ([, c]) => {
      const [stage1MintedQty, stage1Supply, maxSupply] = await Promise.all([
        c.read.stage1Minted(),
        c.read.STAGE1_SUPPLY(),
        c.read.MAX_SUPPLY(),
      ]).then(([stage1MintedQty, stage1Supply, maxSupply]) => [
        BigInt(stage1MintedQty),
        BigInt(stage1Supply),
        BigInt(maxSupply),
      ]);

      console.log("Mint progress:", {
        stage1MintedQty,
        stage1Supply,
        maxSupply,
      });

      return { stage1MintedQty, stage1Supply, maxSupply };
    },
  );

  const wlMint = useCallback(async () => {
    if (!contract || !wallet) throw new Error("Not initialized");
    const proofResult = await getWhitelistProof(wallet.address);

    if (!proofResult.is_whitelisted) {
      throw new Error("Address is not whitelisted");
    }

    const account = wallet.address as Hex;
    const gasEstimate = await contract.estimateGas.wlMint([proofResult.proof], {
      account,
    });

    const hash = await contract.write.wlMint([proofResult.proof], {
      gas: (gasEstimate * 120n) / 100n,
    });

    return hash;
  }, [contract, wallet]);

  const paidMint = useCallback(
    async (qty: number) => {
      if (!contract || !wallet) throw new Error("Not initialized");

      const account = wallet.address as Hex;
      const mintPrice = (await contract.read.PRICE()) as bigint;
      const value = mintPrice * BigInt(qty);

      const gasEstimate = await contract.estimateGas.paidMint([BigInt(qty)], {
        account,
        value,
      });

      const hash = await contract.write.paidMint([BigInt(qty)], {
        gas: (gasEstimate * 120n) / 100n,
        value,
      });
      return hash;
    },
    [contract, wallet],
  );

  const mint = useCallback(async () => {
    if (!contract || !wallet) throw new Error("Not initialized");

    if (phase === Phase.WhitelistMint) {
      return wlMint();
    } else if (phase === Phase.PublicMint) {
      const account = wallet.address as Hex;
      const gasEstimate = await contract.estimateGas.publicMint({ account });
      const hash = await contract.write.publicMint({
        gas: (gasEstimate * 120n) / 100n,
      });
      return hash;
    } else if (phase === Phase.PaidMint) {
      return paidMint(1);
    }

    throw new Error("Minting has not started");
  }, [contract, wallet, phase, wlMint, paidMint]);

  const value = useMemo(
    () => ({
      phase: {
        state: phase ?? Phase.NotStarted,
        isLoading: phaseLoading || phase === undefined,
      },
      minted: {
        state: minted ?? BigInt(0),
        isLoading: mintedLoading || minted === undefined,
      },
      limit: {
        state: limit ?? BigInt(0),
        isLoading: limitLoading || limit === undefined,
      },
      price: {
        state: price ?? BigInt(0),
        isLoading: priceLoading || price === undefined,
      },
      isWhitelisted: {
        state: whitelistProof?.is_whitelisted ?? false,
        isLoading: whitelistProofLoading || whitelistProof === undefined,
      },
      mintTime: {
        state: {
          startTime: mintTime?.startTime ?? BigInt(0),
          endTime: mintTime?.endTime ?? BigInt(0),
        },
        isLoading: mintTimeLoading || mintTime === undefined,
      },
      mintProgress: {
        state: {
          stage1MintedQty: mintProgress?.stage1MintedQty ?? BigInt(0),
          stage1Supply: mintProgress?.stage1Supply ?? BigInt(0),
          maxSupply: mintProgress?.maxSupply ?? BigInt(0),
        },
        isLoading: mintProgressLoading || mintProgress === undefined,
      },
      mint,
      mintQty,
      setMintQty,
    }),
    [
      phase,
      phaseLoading,
      minted,
      mintedLoading,
      limit,
      limitLoading,
      price,
      priceLoading,
      whitelistProof,
      whitelistProofLoading,
      mintTime,
      mintTimeLoading,
      mintProgress,
      mintProgressLoading,
      mint,
      mintQty,
    ],
  );

  return (
    <BreathContractContext.Provider value={value}>
      {children}
    </BreathContractContext.Provider>
  );
}

export function useBreathContract() {
  const context = useContext(BreathContractContext);

  if (!context) {
    throw new Error(
      "useBreathContract must be used within a BreathContractProvider",
    );
  }

  return context;
}
