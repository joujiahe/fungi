import { ETHERSCAN_URL } from "@/common/constants";

export const getAddressURL = (address: string) => {
  return `${ETHERSCAN_URL}/address/${address}`;
};
