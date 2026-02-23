"use client";

import { BearthButton } from "../BearthButton";
import { useWalletConnect } from "@/components/wallet/WalletConnectContext";

export function WalletConnectControl({
  children,
}: {
  children: React.ReactNode;
}) {
  const { login, wallet } = useWalletConnect();
  const isConnected = !!wallet;

  if (!isConnected) {
    return (
      <BearthButton href="#" type="secondary" onClick={() => login()}>
        Connect Wallet
      </BearthButton>
    );
  }

  return <>{children}</>;
}
