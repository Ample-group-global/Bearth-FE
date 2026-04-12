"use client";

import { useWalletConnect } from "@/components/wallet/WalletConnectContext";

export function ConnectWalletTopBarButton() {
  const { login, logout, authenticated } = useWalletConnect();

  return (
    <button
      type="button"
      className="hidden md:flex absolute right-0 text-2xl rounded-3xl px-8 py-2 leading-6 text-background focus:text-background hover:text-background focus:underline hover:underline font-semibold"
      onClick={async () => (authenticated ? await logout() : login())}
    >
      {authenticated ? "DISCONNECT" : "CONNECT"}
    </button>
  );
}
