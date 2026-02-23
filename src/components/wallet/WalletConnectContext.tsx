"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import {
  type ConnectedWallet,
  usePrivy,
  type User,
} from "@privy-io/react-auth";
import { useActiveWallet } from "@privy-io/react-auth";
import { chains } from "./chains";
import { createPublicClient, formatEther, http } from "viem";
import useSWR from "swr";

interface WalletConnectContextValue {
  login: ReturnType<typeof usePrivy>["login"];
  logout: () => Promise<void>;
  user: User | null;
  wallet: ConnectedWallet | null;
  balance?: string | null;
}

export const WalletConnectContext = createContext<WalletConnectContextValue>({
  login: async () => {},
  logout: async () => {},
  user: null,
  wallet: null,
  balance: null,
});

interface WalletConnectContextProps {
  children: React.ReactNode;
}

export function WalletConnectProvider({ children }: WalletConnectContextProps) {
  const { login, logout, user } = usePrivy();
  const { wallet } = useActiveWallet();
  const chain =
    chains[process.env.CONTRACT_NET as keyof typeof chains] ?? chains.sepolia;

  const publicClient = useMemo(() => {
    const publicClient = createPublicClient({
      chain,
      transport: http(),
    });
    return publicClient;
  }, [chain]);

  const balance = useSWR(wallet ? [wallet.address] : null, async () => {
    if (!wallet) return null;
    const balance = await publicClient.getBalance({
      address: wallet?.address as `0x${string}`,
    });
    return formatEther(balance);
  });

  useEffect(() => {
    if (wallet && wallet.type === "ethereum") {
      wallet.switchChain(chain.id);
    }
  }, [wallet, chain]);

  return (
    <WalletConnectContext.Provider
      value={{
        login,
        logout,
        user,
        wallet: wallet as ConnectedWallet | null,
        balance: balance.data,
      }}
    >
      {children}
    </WalletConnectContext.Provider>
  );
}

export function useWalletConnect() {
  return useContext(WalletConnectContext);
}
