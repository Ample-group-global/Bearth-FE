"use client";

import "viem/window";
import { useActiveWallet, usePrivy } from "@privy-io/react-auth";
import { useCallback, useEffect } from "react";
import {
  createPublicClient,
  createWalletClient,
  custom,
  getContract,
  http,
} from "viem";
import type { Hex } from "viem";
import { sepolia } from "viem/chains";
import BearthNFT from "../../BearthNFTAbi";
import { parseEther } from "viem/utils";
export default function Home() {
  const { login, logout, user } = usePrivy();
  const { wallet } = useActiveWallet();

  useEffect(() => {
    if (wallet && wallet.type === "ethereum") {
      wallet.switchChain(sepolia.id);
    }
  }, [wallet]);

  const mint = useCallback(async () => {
    if (!wallet || wallet.type !== "ethereum") return;

    console.log("wallet:", wallet);

    const [address] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log("eth address:", address);

    const provider = await wallet.getEthereumProvider();

    console.log("provider:", provider);

    const publicClient = createPublicClient({
      chain: sepolia,
      transport: http(),
    });

    console.log("publicClient:", publicClient);

    const walletClient = createWalletClient({
      account: wallet.address as Hex,
      chain: sepolia,
      transport: custom(provider),
    });

    console.log("walletClient:", walletClient);

    const contract = getContract({
      address: "0x65Ae17fDCF89F5a8089715680332dEc2bACAA2B4",
      abi: BearthNFT,
      client: { public: publicClient, wallet: walletClient },
    });

    console.log("contract:", contract.address);

    // const price = parseEther("0.0303");
    // const totalPrice = price * BigInt(5);

    // const { requestWl } = await contract.simulate.wlMint([""]);
    // const { request } = await contract.simulate.paidMint([totalPrice]);
    // const { request } = await contract.simulate.publicMint();

    // console.log("request:", request);

    // const hash = await walletClient.writeContract(request);
    const hash = await contract.write.publicMint();

    console.log("contract call successful, hash:", hash);
  }, [wallet, wallet?.type]);

  return (
    <div>
      <main>
        {JSON.stringify(user)}

        {user ? (
          <button
            type="button"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              login();
            }}
          >
            Connect Wallet
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            mint();
          }}
        >
          Test Mint
        </button>
      </main>
    </div>
  );
}
