import { useContext } from "react";
import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";

import Web3Context from "@/contexts/web3";
import * as api from "./";
import * as ethApi from "./eth";

export const useToken = (cid: string, tid: string) => {
  return useQuery(["token", cid, tid], () => api.getToken(cid, tid));
};

export const useCollection = (cid: string) => {
  return useQuery(["collection", cid], () => api.getCollection(cid));
};

export const useCollectionStats = (cid: string) => {
  return useQuery(["collection", "stats", cid], () =>
    api.getCollectionStats(cid)
  );
};

export const useCollectionAndStats = (cid: string) => {
  return useQueries({
    queries: [
      {
        queryKey: ["collection", cid],
        queryFn: () => api.getCollection(cid),
      },
      {
        queryKey: ["collection", "stats", cid],
        queryFn: () => api.getCollectionStats(cid),
      },
    ],
  });
};

const _getTokenByIndex = async (cid: string, index: number) => {
  const tokenId = await ethApi.getTokenIdByIndex(cid, index);
  const tid = tokenId.toString();
  const token = await api.getToken(cid, tid);
  return token;
};

const _getTokensByPage = async (cid: string, page: number, total: number) => {
  const allRequests = [];
  const start = 10 * (page - 1);
  const end = Math.min(total + 1, 10 * page);
  for (let i = start; i < end; i++) {
    allRequests.push(_getTokenByIndex(cid, i));
  }
  return Promise.all(allRequests);
};

export const useTokenList = (cid: string, page: number, total: number) => {
  const { isConnected } = useContext(Web3Context);
  return useInfiniteQuery({
    queryKey: ["token", "list", page],
    queryFn: async ({ pageParam = 1 }) => {
      const tokens = await _getTokensByPage(cid, pageParam, total);
      const next = pageParam * 10 < total ? pageParam + 1 : undefined;
      return { next, tokens };
    },
    getNextPageParam: (lastPage) => lastPage.next,
    enabled: isConnected && !!total,
  });
};

export const useTokenOwner = (cid: string, tid: string) => {
  const { isConnected } = useContext(Web3Context);
  return useQuery({
    queryKey: ["token-owner", cid, tid],
    queryFn: () => ethApi.getNFTOwner(cid, tid),
    enabled: isConnected,
  });
};
