import { Flex, Image, Text } from "@chakra-ui/react";

import { Collection } from "@/common/types";
import { AddressLink } from "../AddressLink";
import Link from "next/link";

export type CollectionInfoProps = {
  collection: Collection;
  hideAddress?: boolean;
};

export function CollectionInfo({
  collection,
  hideAddress,
}: CollectionInfoProps) {
  const { name, owner, address, logoURI, isVerified, symbol, type } =
    collection;

  return (
    <Flex alignItems="center">
      <Image
        boxSize="48px"
        mr={2}
        src={logoURI}
        alt={name}
        fallbackSrc="https://via.placeholder.com/48"
      />
      <Flex flexDirection="column">
        <Link href={`/collections/${address}`} shallow>
          <Text as="b" noOfLines={1}>
            {name}
          </Text>
        </Link>
        {!hideAddress && <AddressLink address={address} />}
      </Flex>
    </Flex>
  );
}
