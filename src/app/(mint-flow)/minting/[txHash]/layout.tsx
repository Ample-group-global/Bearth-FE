import { preload } from "react-dom";

interface MintingLayoutProps {
  children: React.ReactNode;
}

export default function MintingLayout({ children }: MintingLayoutProps) {
  preload("/assets/mint-transaction-sent.webm", { as: "video" });
  preload("/assets/mint-transaction-in-progress-1.webm", { as: "video" });
  preload("/assets/mint-transaction-in-progress-2.webm", { as: "video" });
  preload("/assets/mint-transaction-complete.webm", { as: "video" });
  return <div>{children}</div>;
}
