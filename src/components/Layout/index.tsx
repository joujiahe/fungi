import { ReactNode } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Navigation } from "../Navigation";

export type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Navigation />
      <Flex py="8" flexDirection="column" width={{ base: "100%", md: "800px" }}>
        {children}
      </Flex>
    </Flex>
  );
}
