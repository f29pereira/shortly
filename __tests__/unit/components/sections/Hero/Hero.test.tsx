import { render } from "@testing-library/react";
import Hero from "@/app/components/sections/Hero/Hero";
import { checkHero } from "../../../../helpers/shortlyHelpers";
import { createReduxStoreMock } from "../../../../helpers/shortlyHelpers";
import StoreProvider from "@/app/StoreProvider";

/**
 * Unit test for component: Hero
 */
describe("Hero component", () => {
  // Runs before each test
  beforeEach(() => {
    createReduxStoreMock();

    render(
      <StoreProvider>
        <Hero />
      </StoreProvider>
    );
  });

  it("renders section with image of a person working, main title, description and get started link", () => {
    checkHero();
  });
});
