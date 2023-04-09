export const ETHERSCAN_URL = "https://etherscan.io";

export const getAddressURL = (address: string) => {
  return `${ETHERSCAN_URL}/address/${address}`;
};
