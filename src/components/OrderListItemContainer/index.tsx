import { Box, SkeletonText } from "@chakra-ui/react";
import { Order } from "@/common/types";
import { useToken } from "@/modules/api/hooks";
import { OrderListItem } from "../OrderListItem";

export type OrderListItemContainerProps = {
  order: Order;
};

export function OrderListItemContainer({ order }: OrderListItemContainerProps) {
  const { isLoading, data: token } = useToken(
    order.collectionAddress,
    order.tokenId
  );

  if (isLoading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white" w="100%">
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );
  }

  return <OrderListItem order={order} token={token} />;
}
