"use client";

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

  return <PrivyProvider appId={appId}>{children}</PrivyProvider>;
};
