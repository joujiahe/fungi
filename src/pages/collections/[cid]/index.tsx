import { useContext } from "react";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Flex, Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";

import { getCollection, getCollectionStats } from "@/modules/api";
import { useTokenList, useCollectionAndStats } from "@/modules/api/hooks";
import { TokenSmallCard, CollectionStatsInfoContainer } from "@/components";
import Web3Context from "@/contexts/web3";

export default function Collection() {
  const router = useRouter();
  const {
    query: { cid },
  } = router;
  const { isConnected } = useContext(Web3Context);
  const [{ data: collection }, { data: collectionStats }] =
    useCollectionAndStats(cid as string);
  const {
    isLoading,
    isFetchingNextPage,
    data: tokenList,
    fetchNextPage,
    hasNextPage,
  } = useTokenList(cid as string, Number(collectionStats.totalSupply));

  return (
    <>
      <Head>
        <title>{collection.name}</title>
      </Head>

      <Box mb="8">
        <CollectionStatsInfoContainer address={cid as string} />
      </Box>

      {isConnected ? (
        <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {tokenList?.pages.map(({ tokens }) =>
              tokens.map((token) => (
                <Link
                  href={`/collections/${cid}/${token.tokenId}`}
                  key={token.tokenId}
                  shallow
                >
                  <Flex>
                    <TokenSmallCard token={token} />
                  </Flex>
                </Link>
              ))
            )}
            {(isLoading || isFetchingNextPage) && (
              <Center h="400px">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Center>
            )}
          </SimpleGrid>
        </InfiniteScroll>
      ) : (
        <Text color="gray">Please connect to MetaMask to list NFTs.</Text>
      )}
    </>
  );
}

type Props = {
  dehydratedState: DehydratedState;
};

interface Params extends ParsedUrlQuery {
  cid: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const { cid } = params!;
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["collection", cid], () => getCollection(cid));
  await queryClient.fetchQuery(["collection", "stats", cid], () =>
    getCollectionStats(cid)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
