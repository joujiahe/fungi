import { Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Link from "next/link";

import { METAMASK_DOWNLOAD_URL } from "@/common/constants";

export function InstallMetaMaskButton() {
  return (
    <Link href={METAMASK_DOWNLOAD_URL}>
      <Text color="orange">
        Install MetaMask <ExternalLinkIcon />
      </Text>
    </Link>
  );
}
