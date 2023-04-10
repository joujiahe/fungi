import axios from "axios";

import { LR_API_URL_V1 } from "@/common/constants";
import { resOfGetOrders } from "./mock";

export const getToken = async (collection: string, tokenId: string) => {
  const res = await axios.get(
    `${LR_API_URL_V1}/tokens?collection=${collection}&tokenId=${tokenId}`
  );
  return res.data?.data;
};

export const getCollection = async (collection: string) => {
  const res = await axios.get(
    `${LR_API_URL_V1}/collections?address=${collection}`
  );
  return res.data?.data;
};

export const getCollectionStats = async (collection: string) => {
  const res = await axios.get(
    `${LR_API_URL_V1}/collections/stats?address=${collection}`
  );
  return res.data?.data;
};

export const getOrders = async (page: number) => {
  // const res = await axios.get(
  //   `${LR_API_URL_V1}/orders?pagination%5Bcursor%5D=${page}`
  // );
  // return res.data?.data;
  return resOfGetOrders;
};
