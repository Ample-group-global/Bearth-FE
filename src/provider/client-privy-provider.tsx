"use client";

import { BreathContractProvider } from "@/components/wallet/BreathContractContext";
import { WalletConnectProvider } from "@/components/wallet/WalletConnectContext";
import { PrivyProvider } from "@privy-io/react-auth";
import { SWRConfig } from "swr";
import { Fragment } from "react";

export const ClientPrivyProvider = ({
  appId,
  children,
}: {
  children: React.ReactNode;
  appId: string;
}) => {
  if (typeof window === "undefined") {
    return <Fragment key="client-privy-provider">{children}</Fragment>;
  }

  return (
    <Fragment key="client-privy-provider">
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          onError: (err) => {
            console.error("SWR Error:", err);
          },
        }}
      >
        <PrivyProvider key="privy-provider" appId={appId}>
          <WalletConnectProvider>
            <BreathContractProvider>{children}</BreathContractProvider>
          </WalletConnectProvider>
        </PrivyProvider>
      </SWRConfig>
    </Fragment>
  );
};
