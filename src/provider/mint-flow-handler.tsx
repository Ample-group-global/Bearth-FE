"use client";
import { createContext, useContext, useState } from "react";

interface MintFlowContextType {
  setTxHash: (txHash: string) => void;
  txHash: string | null;
}

const MintFlowContext = createContext<MintFlowContextType>({
  setTxHash: () => {},
  txHash: null,
});

export function MintFlowProvider({
  mintPageSlot,
  mintingAnimationSlot,
}: {
  mintPageSlot: React.ReactNode;
  mintingAnimationSlot: React.ReactNode;
}) {
  const [txHash, setTxHash] = useState<string | null>(null);

  return (
    <MintFlowContext.Provider value={{ txHash, setTxHash }}>
      {txHash ? mintingAnimationSlot : mintPageSlot}
    </MintFlowContext.Provider>
  );
}

export function useMintFlow() {
  return useContext(MintFlowContext);
}
