"use client";

import { useWalletConnect } from "@/components/wallet/WalletConnectContext";
import { BearthSideMenuLink } from "./BearthSideMenu";

export function ConnectWalletBearthSideMenuLink() {
  const { login, logout, authenticated } = useWalletConnect();

  return (
    <BearthSideMenuLink
      href="#"
      onClick={async () => (authenticated ? await logout() : login())}
    >
      {authenticated ? "DISCONNECT" : "CONNECT"}
    </BearthSideMenuLink>
  );
}
