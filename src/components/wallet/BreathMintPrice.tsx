"use client";
import { useBreathContract } from "./BreathContractContext";

export function BreathMintPrice() {
  const { price } = useBreathContract();
  if (price.isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{Number(price.state) / 10 ** 18} ETH</div>;
}
