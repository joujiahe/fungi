import { ethers } from "ethers";

export type EthPriceProps = {
  wei: string;
};

export function EthPrice({ wei }: EthPriceProps) {
  const ethValue = ethers.formatEther(wei);
  return <>{ethValue}</>;
}
