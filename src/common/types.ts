export type Collection = {
  name: string;
  owner: string;
  address: string;
  logoURI: string;
  isVerified: boolean;
  symbol: string;
  type: string;
};

export type CollectionStats = {
  countOwners: string;
  totalSupply: string;
};

export type Token = {
  collection: Collection;
  collectionAddress: string;
  description: string;
  flag: string;
  id: number;
  imageURI: string;
  isAnimated: boolean;
  isExplicit: boolean;
  name: string;
  tokenId: string;
  tokenURI: string;
};

export type Order = {
  hash: string;
  collectionAddress: string;
  tokenId: string;
  isOrderAsk: boolean;
  signer: string;
  strategy: string;
  currencyAddress: string;
  amount: string;
  price: string;
  nonce: string;
  startTime: number;
  endTime: number;
  minPercentageToAsk: number;
  params: string;
  status: string;
  signature: string | null;
  v: number | null;
  r: string | null;
  s: string | null;
};
