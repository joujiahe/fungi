import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Flex, Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";

import { getCollection, getCollectionStats } from "@/modules/api";
import { useTokenList, useCollectionStats } from "@/modules/api/hooks";
import { TokenSmallCard, CollectionStatsInfoContainer } from "@/components";

export default function Collection() {
  const router = useRouter();
  const {
    query: { cid },
  } = router;
  const { data: collectionStats } = useCollectionStats(cid as string);
  const {
    isLoading,
    isFetchingNextPage,
    data: tokenList,
    fetchNextPage,
    hasNextPage,
  } = useTokenList(cid as string, 1, Number(collectionStats.totalSupply));

  return (
    <>
      <Box mb="8">
        <CollectionStatsInfoContainer address={cid as string} />
      </Box>

      <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {tokenList?.pages.map(({ tokens }) =>
            tokens.map((token) => (
              <Link
                href={`/collections/${cid}/${token.tokenId}`}
                key={token.tokenId}
                shallow
              >
                <Flex bg="tomato">
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
