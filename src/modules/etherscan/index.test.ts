import { getAddressURL } from "./index";

it("should returns the address URL on etherscan", () => {
  const url = getAddressURL("0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6");
  expect(url).toBe(
    "https://etherscan.io/address/0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6"
  );
});
