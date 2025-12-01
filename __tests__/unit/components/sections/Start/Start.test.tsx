import { render } from "@testing-library/react";
import Start from "@/app/components/sections/Start/Start";
import { checkStart } from "../../../../helpers/shortlyHelpers";

/**
 * Unit test for component: Start
 */
describe("Start component", () => {
  render(<Start />);

  it("renders the start section with title and get started link", () => {
    checkStart();
  });
});
