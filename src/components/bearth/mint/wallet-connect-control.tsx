"use client";

import { BearthButton } from "../BearthButton";
import { useWalletConnect } from "@/components/wallet/WalletConnectContext";

export function WalletConnectControl({
  children,
}: {
  children: React.ReactNode;
}) {
  const { login, authenticated, wallet } = useWalletConnect();
  const isConnected = !!wallet && authenticated;

  if (!isConnected) {
    return (
      <BearthButton href="#" type="secondary" onClick={() => login()}>
        Connect Wallet
      </BearthButton>
    );
  }

  return <>{children}</>;
}
