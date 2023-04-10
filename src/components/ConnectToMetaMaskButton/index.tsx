import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import Web3Context from "@/contexts/web3";

export function ConnectToMetaMaskButton() {
  const { connectToMetaMask } = useContext(Web3Context);

  return (
    <Button variant="solid" colorScheme="orange" onClick={connectToMetaMask}>
      Connect to Metamask
    </Button>
  );
}
