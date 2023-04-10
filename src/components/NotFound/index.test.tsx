import { render } from "@testing-library/react";
import { NotFound } from "./index";

it("renders NotFound unchanged", () => {
  const { container } = render(<NotFound />);
  expect(container).toMatchSnapshot();
});
