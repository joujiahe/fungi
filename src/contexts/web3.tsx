import { createContext, ReactNode, useState, useEffect } from "react";
import { BrowserProvider, ethers, JsonRpcSigner } from "ethers";
import { useToast } from "@chakra-ui/react";

type Web3ContextState = {
  isConnected: boolean;
  isMetaMaskInstalled: boolean;
  accounts: string[];
  provider?: BrowserProvider;
  signer?: JsonRpcSigner;
  connectToMetaMask?: () => {};
};

export const Web3Context = createContext<Web3ContextState>({
  isConnected: false,
  isMetaMaskInstalled: false,
  accounts: [],
});

export default Web3Context;

export type Web3ContextProviderProps = {
  children: ReactNode;
};

export function Web3ContextProvider({ children }: Web3ContextProviderProps) {
  const toast = useToast();
  const [provider, setProvider] = useState<BrowserProvider>();
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [accounts, setAccounts] = useState<string[]>([]);
  const isConnected = accounts.length > 0;
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  const connectToMetaMask = async () => {
    try {
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      const newSigner = await newProvider.getSigner();

      setProvider(newProvider);
      setSigner(newSigner);
    } catch (e) {
      const err = e as { message: string };
      toast({
        title: "An error occurred.",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    if (!window.ethereum) return;

    const accountsWasChanged = (newAccounts: unknown) => {
      setAccounts(newAccounts as string[]);
    };
    const getAndSetAccounts = async () => {
      const newAccounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      setAccounts(newAccounts);
    };
    const clearAccounts = () => {
      setAccounts([]);
    };

    getAndSetAccounts();
    setIsMetaMaskInstalled(true);

    window.ethereum.on("accountsChanged", accountsWasChanged);
    window.ethereum.on("connect", getAndSetAccounts);
    window.ethereum.on("disconnect", clearAccounts);

    return () => {
      window.ethereum.removeListener("accountsChanged", accountsWasChanged);
      window.ethereum.removeListener("connect", getAndSetAccounts);
      window.ethereum.removeListener("disconnect", clearAccounts);
    };
  }, []);

  return (
    <Web3Context.Provider
      value={{
        provider,
        signer,
        accounts,
        isMetaMaskInstalled,
        isConnected,
        connectToMetaMask,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}
