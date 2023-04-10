import { render } from "@testing-library/react";
import { Navigation } from "./index";

it("renders Navigation unchanged", () => {
  const { container } = render(<Navigation />);
  expect(container).toMatchSnapshot();
});
