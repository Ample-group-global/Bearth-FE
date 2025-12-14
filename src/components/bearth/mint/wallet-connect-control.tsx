"use client";

import { useState } from "react";
import { BearthButton } from "../BearthButton";

export function WalletConnectControl({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isConnected, setIsConnected] = useState(false);

  if (!isConnected) {
    return (
      <BearthButton
        href="#"
        type="secondary"
        onClick={() => setIsConnected(true)}
      >
        Connect Wallet
      </BearthButton>
    );
  }

  return <>{children}</>;
}
