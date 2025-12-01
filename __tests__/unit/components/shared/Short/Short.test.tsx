import { renderWithProviders } from "../../../../helpers/reduxHelper";
import Short from "@/app/components/shared/ShortUrlForm/Short";
import { checkShort } from "../../../../helpers/shortlyHelpers";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

/**
 * Unit test for component: Short
 */
describe("Short component", () => {
  // Runs before each test
  beforeEach(() => {
    renderWithProviders(<Short />);
  });

  it("renders URL input and submit button", () => {
    checkShort();
  });

  it("renders an error message for the URL input if it is invalid", async () => {
    const urlInput = screen.getByLabelText("URL");
    const submitBtn = screen.getByRole("button", {
      name: "Shorten It!",
    });

    // User fills URL input
    await userEvent.type(urlInput, "http");

    // User Submits form
    await userEvent.click(submitBtn);

    // Error Message
    const errorMsg = await screen.findByText("Please enter a valid link");

    // Check URL input error message existence
    expect(errorMsg).toBeInTheDocument();
  });
});
