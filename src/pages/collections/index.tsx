import { Flex, Box, Center, Text, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { CollectionStatsInfoContainer } from "@/components";

type Props = {};

interface Params extends ParsedUrlQuery {}

const TOP_COLLECTIONS = [
  "0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6",
  "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
  "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258",
  "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
  "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
  "0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949",
  "0x99a9B7c1116f9ceEB1652de04d5969CcE509B069",
  "0x4b15a9c28034dC83db40CD810001427d3BD7163D",
  "0x6339e5E072086621540D0362C4e3Cea0d643E114",
];

export default function Collections() {
  return (
    <>
      <Head>
        <title>Top Collections</title>
      </Head>
      <Heading as="h1" size="md" mb="8">
        Top Collections
      </Heading>
      {TOP_COLLECTIONS.map((address, index) => (
        <Link key={address} href={`/collections/${address}`} shallow>
          <Flex py="8" _hover={{ bg: "gray.100" }}>
            <Center boxSize="48px">
              <Text as="b">{index + 1}</Text>
            </Center>
            <Box flexGrow={1}>
              <CollectionStatsInfoContainer
                address={address}
                hideAddress={true}
              />
            </Box>
            <Box boxSize="48px" />
          </Flex>
        </Link>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  Props,
  Params
> = async () => {
  return { props: {} };
};
