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

  if (isCollectionLoading || isStatsLoading) return <></>;
  return (
    <CollectionStatsInfo
      collection={collection}
      collectionStats={collectionStats}
      hideAddress={hideAddress}
    />
  );
}
