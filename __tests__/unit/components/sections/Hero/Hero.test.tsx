import { render } from "@testing-library/react";
import Hero from "@/app/components/sections/Hero/Hero";
import { checkHero } from "../../../../helpers/shortlyHelpers";

/**
 * Unit test for component: Hero
 */
describe("Hero component", () => {
  render(<Hero />);

  it("renders section with image of a person working, main title, description and get started link", () => {
    checkHero();
  });
});
