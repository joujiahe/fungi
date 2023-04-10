import { useContext } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Text, Center, Spinner } from "@chakra-ui/react";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";

import { getToken } from "@/modules/api";
import { useToken, useTokenOwner } from "@/modules/api/hooks";
import { NotFound, TokenCard } from "@/components";
import { Web3Context } from "@/contexts/web3";
import { useRouter } from "next/router";

export default function Token() {
  const router = useRouter();
  const {
    query: { cid, tid },
  } = router;
  const { isLoading, data: token } = useToken(cid as string, tid as string);
  const { data: owner } = useTokenOwner(cid as string, tid as string);
  const { isConnected, accounts } = useContext(Web3Context);

  if (isLoading)
    return (
      <Center h="400px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );

  if (!token) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <title>
          {token.collection.name} - {token.name}
        </title>
      </Head>
      <TokenCard
        token={token}
        owner={owner}
        appendFooter={
          isConnected ? (
            owner === accounts[0] ? (
              <Text fontSize="sm" color="blue">
                Congratulation, this token is owned by you.
              </Text>
            ) : (
              <Text fontSize="sm" color="red">
                This token is not owned by you.
              </Text>
            )
          ) : (
            <></>
          )
        }
      />
    </>
  );
}

type Props = {
  dehydratedState: DehydratedState;
};

interface Params extends ParsedUrlQuery {
  cid: string;
  tid: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const { cid, tid } = params!;
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["token", cid, tid], () => getToken(cid, tid));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
