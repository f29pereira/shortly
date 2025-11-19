import { render } from "@testing-library/react";
import Features from "@/app/components/sections/Features/Features";
import { checkFeatures } from "../../../../helpers/shortlyHelpers";

/**
 * Unit test for component: Features
 */
describe("Features component", () => {
  render(<Features />);

  it("renders section with title, description and the features: Brand Recognition, Detailed Records and Fully Customizable", () => {
    checkFeatures();
  });
});
