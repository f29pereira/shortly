import { render } from "@testing-library/react";
import Footer from "@/app/components/sections/Footer/Footer";
import { checkFooter } from "../../../../helpers/shortlyHelpers";

/**
 * Unit test for component: Footer
 */
describe("Footer component", () => {
  render(<Footer />);

  it("renders footer section with page and social Links", () => {
    checkFooter();
  });
});
