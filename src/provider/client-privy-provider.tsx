"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export const ClientPrivyProvider = ({
  appId,
  children,
}: {
  children: React.ReactNode;
  appId: string;
}) => {
  return <PrivyProvider appId={appId}>{children}</PrivyProvider>;
};
