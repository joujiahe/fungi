import { truncateMiddle } from "./index";

it("should truncate the middle of a string", () => {
  const truncated = truncateMiddle(
    "0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6",
    10
  );
  expect(truncated).toBe("0xb7...3F6");
});
