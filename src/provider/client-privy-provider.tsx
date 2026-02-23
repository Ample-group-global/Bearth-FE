"use client";

import { WalletConnectProvider } from "@/components/wallet/WalletConnectContext";
import { PrivyProvider } from "@privy-io/react-auth";

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
    <PrivyProvider appId={appId}>
      <WalletConnectProvider>{children}</WalletConnectProvider>
    </PrivyProvider>
  );
};
