import { render } from "@testing-library/react";
import MobileNav from "@/app/components/sections/Navigation/Mobile/MobileNav";
import { checkMobileNav } from "../../../../../helpers/shortlyHelpers";

/**
 * Unit test for component: MobileNav
 */
describe("MobileNav component", () => {
  render(<MobileNav />);

  it("renders mobile navigation links", () => {
    checkMobileNav();
  });
});
