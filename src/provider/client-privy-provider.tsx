"use client";

import { BreathContractProvider } from "@/components/wallet/BreathContractContext";
import { WalletConnectProvider } from "@/components/wallet/WalletConnectContext";
import { PrivyProvider } from "@privy-io/react-auth";
import { SWRConfig } from "swr";

export const ClientPrivyProvider = ({
  appId,
  children,
}: {
  children: React.ReactNode;
  appId: string;
}) => {
  if (typeof window === "undefined") {
    return children;
  }

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        onError: (err) => {
          console.error("SWR Error:", err);
        },
      }}
    >
      <PrivyProvider appId={appId}>
        <WalletConnectProvider>
          <BreathContractProvider>{children}</BreathContractProvider>
        </WalletConnectProvider>
      </PrivyProvider>
    </SWRConfig>
  );
};
