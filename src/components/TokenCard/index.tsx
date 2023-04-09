import { ReactNode } from "react";
import {
  Image,
  Card,
  Stack,
  Text,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";

import { Token } from "@/common/types";
import { AddressLink, CollectionInfo } from "@/components";

export type TokenCardProps = {
  token: Token;
  owner?: string;
  appendBody?: ReactNode;
  appendFooter?: ReactNode;
};

export function TokenCard({
  token,
  appendBody,
  appendFooter,
  owner,
}: TokenCardProps) {
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        minW={{ base: "100%", md: "480px" }}
        src={token.imageURI}
        alt={token.name}
        fallbackSrc="https://via.placeholder.com/480"
      />

      <Stack>
        <CardHeader>
          <CollectionInfo collection={token.collection} />
        </CardHeader>
        <CardBody>
          <Heading size="md">{token.name}</Heading>
          <Text py="2" mb="2">
            {token.description}
          </Text>
          <Heading size="sm">Details</Heading>
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>ID</Td>
                  <Td isNumeric>{token.tokenId}</Td>
                </Tr>
                <Tr>
                  <Td>Type</Td>
                  <Td isNumeric>{token.collection.type}</Td>
                </Tr>
                <Tr>
                  <Td>Owner</Td>
                  <Td isNumeric>
                    {owner ? <AddressLink address={owner} /> : "--"}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          {appendBody}
        </CardBody>

        <CardFooter>{appendFooter}</CardFooter>
      </Stack>
    </Card>
  );
}
