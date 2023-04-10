import { Spinner, Center } from "@chakra-ui/react";

export function SpinnerCard() {
  return (
    <Center h="400px">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
}
