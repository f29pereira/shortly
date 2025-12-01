import { renderWithProviders } from "../helpers/reduxHelper";
import { render } from "@testing-library/react";
import Home from "@/app/page";
import {
  checkHero,
  checkFeatures,
  checkShort,
  checkStart,
} from "../helpers/shortlyHelpers";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { fetchShortUrl } from "@/app/components/shared/ShortUrlForm/Short.utils";
import { getUrlCardData } from "../fixtures/shortly.fixture";
import { checkUrlCard } from "../helpers/shortlyHelpers";

/**
 * Mock: fetchShortUrl function
 */
jest.mock("@/app/components/shared/ShortUrlForm/Short.utils", () => {
  const originalModule = jest.requireActual(
    "@/app/components/shared/ShortUrlForm/Short.utils"
  );

  return {
    ...originalModule,
    fetchShortUrl: jest.fn(),
  };
});

/**
 * Integration test for component: Home
 */
describe("Home component", () => {
  const data = getUrlCardData();

  // Runs before each test
  beforeEach(() => {
    renderWithProviders(<Home />);
  });

  it("renders the Hero section", () => {
    checkHero();
  });

  it("renders the Features section", () => {
    checkStart();
  });

  it("renders the Start section", () => {
    checkFeatures();
  });

  it("renders the Short URL Form", () => {
    checkShort();
  });

  it("renders the UrlCard component after sucessful submition", async () => {
    // Mocked function fetchShortUrl return value
    (fetchShortUrl as jest.Mock).mockResolvedValue(data.shortUrl);

    const urlInput = screen.getByLabelText("URL");
    const submitBtn = screen.getByRole("button", {
      name: "Shorten It!",
    });

    // User fills URL input
    await userEvent.type(urlInput, data.originalUrl);

    // User Submits form
    await userEvent.click(submitBtn);

    // Check if UrlCard component is rendered with original and short URLs
    checkUrlCard(data.originalUrl, data.shortUrl);
  });
});
