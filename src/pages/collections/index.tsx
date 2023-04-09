import { Flex, Box, Center, Text, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

import { CollectionStatsInfoContainer } from "@/components";

type Props = {};

interface Params extends ParsedUrlQuery {}

const TOP_COLLECTIONS = [
  "0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6",
  "0xd774557b647330C91Bf44cfEAB205095f7E6c367",
  "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
  "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258",
  "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
  "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  "0x5b1085136a811e55b2Bb2CA1eA456bA82126A376",
  "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
  "0xbe9371326F91345777b04394448c23E2BFEaa826",
];

export default function Collections() {
  return (
    <>
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
