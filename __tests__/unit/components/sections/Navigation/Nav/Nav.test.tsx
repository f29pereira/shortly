import { render } from "@testing-library/react";
import Nav from "@/app/components/sections/Navigation/Nav/Nav";
import { checkNav } from "../../../../../helpers/shortlyHelpers";

/**
 * Unit test for component: Nav
 */
describe("Nav component", () => {
  render(<Nav />);

  it("renders the Shortly logo, desktop navigation links and hamburguer icon", () => {
    checkNav();
  });
});
