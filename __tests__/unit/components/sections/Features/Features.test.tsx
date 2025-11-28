import { renderWithProviders } from "../../../../helpers/reduxHelper";
import Features from "@/app/components/sections/Features/Features";
import { checkFeatures } from "../../../../helpers/shortlyHelpers";

/**
 * Unit test for component: Features
 */
describe("Features component", () => {
  // Runs before each test
  beforeEach(() => {
    renderWithProviders(<Features />);
  });

  it("renders section with title, description and the features: Brand Recognition, Detailed Records and Fully Customizable", () => {
    checkFeatures();
  });
});
