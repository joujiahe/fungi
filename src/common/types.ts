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
