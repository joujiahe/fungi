import { useContext } from "react";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { default as NextLink } from "next/link";

import { METAMASK_DOWNLOAD_URL } from "@/common/constants";
import Web3Context from "@/contexts/web3";
import { MetaMaskAvatar } from "../MetaMaskAvatar";

export function Navigation() {
  const { accounts, isMetaMaskInstalled, isConnected, connectToMetaMask } =
    useContext(Web3Context);

  return (
    <Flex
      bg="white"
      boxShadow="sm"
      boxSize="full"
      position="sticky"
      top="0"
      zIndex="1"
      px="8"
      py="4"
      alignItems="center"
      justifyContent="space-between"
    >
      <NextLink href="/">
        <Heading>fungi</Heading>
      </NextLink>
      <Flex flexGrow={1}>
        <Link ml="4" href="/collections" shallow>
          Collections
        </Link>
        <Link ml="4" href="/orders" shallow>
          Orders
        </Link>
      </Flex>
      {isConnected ? (
        <MetaMaskAvatar address={accounts[0]} />
      ) : isMetaMaskInstalled ? (
        <Button
          variant="solid"
          colorScheme="orange"
          onClick={connectToMetaMask}
        >
          Connect to Metamask
        </Button>
      ) : (
        <Link href={METAMASK_DOWNLOAD_URL}>
          <Text color="orange">
            Install MetaMask <ExternalLinkIcon />
          </Text>
        </Link>
      )}
    </Flex>
  );
}
