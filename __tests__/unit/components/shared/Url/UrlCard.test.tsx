import { render } from "@testing-library/react";
import UrlCard from "@/app/components/shared/Url/UrlCard/UrlCard";
import { checkUrlCard } from "../../../../helpers/shortlyHelpers";
import { getUrlCardData } from "../../../../fixtures/shortly.fixture";

/**
 * Unit test for component: UrlCard
 */
describe("UrlCard component", () => {
  const data = getUrlCardData();

  // Runs before each test
  beforeEach(() => {
    render(<UrlCard originalUrl={data.originalUrl} shortUrl={data.shortUrl} />);
  });

  it("renders original URL, short URL and copy button", () => {
    checkUrlCard(data.originalUrl, data.shortUrl);
  });
});
