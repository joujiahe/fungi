import { Flex, Center, Text } from "@chakra-ui/react";
import { CollectionInfo } from "@/components";
import { Collection, CollectionStats } from "@/common/types";

export type CollectionStatsInfoProps = {
  collection: Collection;
  collectionStats: CollectionStats;
  hideAddress?: boolean;
};

export function CollectionStatsInfo({
  collection,
  collectionStats,
  hideAddress,
}: CollectionStatsInfoProps) {
  return (
    <Flex justifyContent="space-between">
      <CollectionInfo collection={collection} hideAddress={hideAddress} />
      <Flex>
        <Center h="48px" w="96px" flexDirection="column">
          <Text as="b" fontSize="xs">
            Owners
          </Text>
          <Text color="gray">{collectionStats.countOwners}</Text>
        </Center>
        <Center h="48px" w="96px" flexDirection="column">
          <Text as="b" fontSize="xs">
            Items
          </Text>
          <Text color="gray">{collectionStats.totalSupply}</Text>
        </Center>
      </Flex>
    </Flex>
  );
}
