import { ethers } from "ethers";

import { ABI } from "@/common/abi";

export const getNFTOwner = async (cid: string, tid: string) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const nftContract = new ethers.Contract(cid, ABI, provider);
  const ownerAddress = await nftContract.ownerOf(tid);
  return ownerAddress;
};

export const getTokenIdByIndex = async (cid: string, index: number) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const nftContract = new ethers.Contract(cid, ABI, provider);
  const token = await nftContract.tokenByIndex(index);
  return BigInt(token);
};
