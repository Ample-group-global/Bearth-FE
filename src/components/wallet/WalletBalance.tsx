"use client";

import { createElement } from "react";
import { useWalletConnect } from "./WalletConnectContext";

interface WalletBalanceProps {
  as?: string;
  className?: string;
}

export function WalletBalance({ as = "div", className }: WalletBalanceProps) {
  const { balance } = useWalletConnect();
  return createElement(as, { className }, balance?.toString() ?? "0");
}
