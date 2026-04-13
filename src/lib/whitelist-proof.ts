"use server";

import { Hex } from "viem";

export interface MerkleProofResult {
  proof: Hex[];
  root: string;
  is_whitelisted: boolean;
}

export async function getWhitelistProof(
  address: string,
): Promise<MerkleProofResult> {
  const result = fetch(
    `${process.env.PROOF_API_ENDPOINT}/api/proof?address=${address}`,
  )
    .then((res) => res.json())
    .then((data) => {
      return {
        proof: data.proof,
        root: data.root,
        is_whitelisted: data.is_whitelisted,
      };
    });

  return result;
}
