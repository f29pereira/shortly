import { render } from "@testing-library/react";
import Features from "@/app/components/sections/Features/Features";
import { checkFeatures } from "../../../../helpers/shortlyHelpers";
import { createReduxStoreMock } from "../../../../helpers/shortlyHelpers";
import StoreProvider from "@/app/StoreProvider";

/**
 * Unit test for component: Features
 */
describe("Features component", () => {
  // Runs before each test
  beforeEach(() => {
    createReduxStoreMock();

    render(
      <StoreProvider>
        <Features />
      </StoreProvider>
    );
  });

  it("renders section with title, description and the features: Brand Recognition, Detailed Records and Fully Customizable", () => {
    checkFeatures();
  });
});
