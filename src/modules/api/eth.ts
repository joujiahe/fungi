import { ethers } from "ethers";

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const getNFTOwner = async (cid: string, tid: string) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const nftContract = new ethers.Contract(cid, abi, provider);
  const ownerAddress = await nftContract.ownerOf(tid);
  return ownerAddress;
};

export const getTokenIdByIndex = async (cid: string, index: number) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const nftContract = new ethers.Contract(cid, abi, provider);
  const token = await nftContract.tokenByIndex(index);
  return Number(token);
};
