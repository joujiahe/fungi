import { Box, SkeletonText } from "@chakra-ui/react";
import { CollectionStatsInfo } from "@/components";
import { useCollectionAndStats } from "@/modules/api/hooks";

export type CollectionStatsInfoContainerProps = {
  address: string;
  hideAddress?: boolean;
};

export function CollectionStatsInfoContainer({
  address,
  hideAddress,
}: CollectionStatsInfoContainerProps) {
  const [
    { isLoading: isCollectionLoading, data: collection },
    { isLoading: isStatsLoading, data: collectionStats },
  ] = useCollectionAndStats(address as string);

  if (isCollectionLoading || isStatsLoading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Box>
    );
  }
  return (
    <CollectionStatsInfo
      collection={collection}
      collectionStats={collectionStats}
      hideAddress={hideAddress}
    />
  );
}
