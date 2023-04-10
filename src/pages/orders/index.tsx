import { OrderListItemContainer } from "@/components";
import { useOrderList } from "@/modules/api/hooks";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

type Props = {};

interface Params extends ParsedUrlQuery {}

export default function Orders() {
  const { data: orderList } = useOrderList();
  return (
    <>
      <Head>
        <title>Orders Book</title>
      </Head>
      <Heading as="h1" size="md" mb="8">
        Orders Book
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {orderList?.pages.map(({ orders }) =>
          orders.map((order) => (
            <Flex key={order.hash}>
              <OrderListItemContainer order={order} />
            </Flex>
          ))
        )}
      </SimpleGrid>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  Props,
  Params
> = async () => {
  return { props: {} };
};
