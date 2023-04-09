import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import { ExternalLinkIcon } from "@chakra-ui/icons";

import { getAddressURL } from "@/modules/etherscan";
import { truncateMiddle } from "@/modules/string";

export type AddressLinkProps = {
  address: string;
  children?: ReactNode;
};

export function AddressLink({ address, children }: AddressLinkProps) {
  return (
    <Link href={getAddressURL(address)} target="_blank">
      {children || (
        <Text fontSize="sm" color="gray">
          {truncateMiddle(address, 10)} <ExternalLinkIcon />
        </Text>
      )}
    </Link>
  );
}
