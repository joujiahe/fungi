import { getAddressURL, isSameAddress } from "./index";

it("should returns the address URL on etherscan", () => {
  const url = getAddressURL("0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6");
  expect(url).toBe(
    "https://etherscan.io/address/0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6"
  );
});

it("should returns true for the same address", () => {
  expect(
    isSameAddress(
      "0xD4bA467caB0cfd9d3055CE556019E892a0618B66",
      "0xd4ba467cab0cfd9d3055ce556019e892a0618b66"
    )
  ).toBeTruthy();
});
