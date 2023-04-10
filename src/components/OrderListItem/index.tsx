import { Order, Token } from "@/common/types";
import { TokenSmallCard } from "@/components/TokenSmallCard";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export type TokenCardProps = {
  order: Order;
  token: Token;
};

export function OrderListItem({ token, order }: TokenCardProps) {
  return (
    <Link
      href={`/collections/${token.collectionAddress}/${token.tokenId}`}
      shallow
      style={{ width: "100%" }}
    >
      <Flex flexDirection="column">
        <TokenSmallCard
          token={token}
          footer={
            <Accordion
              allowMultiple
              w="100%"
              onClick={(e) => e.preventDefault()}
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text wordBreak="break-all">{JSON.stringify(order)}</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          }
        />
      </Flex>
    </Link>
  );
}
