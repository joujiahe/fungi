import { render } from "@testing-library/react";
import { AddressLink } from "./index";

it("renders AddressLink unchanged", () => {
  const { container } = render(
    <AddressLink address="0xD4bA467caB0cfd9d3055CE556019E892a0618B66" />
  );
  expect(container).toMatchSnapshot();
});
