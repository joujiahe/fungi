import { ReactNode } from "react";
import {
  Image,
  Card,
  Stack,
  Text,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";

import { Token } from "@/common/types";

export type TokenSmallCardProps = {
  token: Token;
  footer?: ReactNode;
};

export function TokenSmallCard({ token, footer }: TokenSmallCardProps) {
  return (
    <Card overflow="hidden" variant="outline">
      <Image objectFit="cover" w="100%" src={token.imageURI} alt={token.name} />
      <Stack>
        <CardBody>
          <Heading size="md">{token.name}</Heading>
          <Text py="2" mb="2" noOfLines={3}>
            {token.description}
          </Text>
        </CardBody>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Stack>
    </Card>
  );
}
