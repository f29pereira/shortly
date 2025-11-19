import { screen, within } from "@testing-library/react";
import {
  getFeaturesData,
  getFooterData,
  getHeroData,
  getNavLinks,
  getStartData,
} from "../fixtures/shortly.fixture";

/**
 * Helper function: checks Nav component elements existence
 */
export const checkNav = () => {
  // Shortly logo
  const logoImg = screen.getByAltText("Shortly Logo");

  const links = getNavigation();

  // hamburguer icon
  const hamburguerBtn = screen.getByRole("button", { name: "Open Menu" });

  // Check elements existence
  expect(logoImg).toBeInTheDocument();
  expect(links.features).toBeInTheDocument();
  expect(links.pricing).toBeInTheDocument();
  expect(links.resources).toBeInTheDocument();
  expect(links.login).toBeInTheDocument();
  expect(links.signUp).toBeInTheDocument();
  expect(hamburguerBtn).toBeInTheDocument();
};

/**
 * Helper function: checks MobileNav component elements existence
 */
export const checkMobileNav = () => {
  const links = getNavigation();

  // Check elements existence
  expect(links.features).toBeInTheDocument();
  expect(links.pricing).toBeInTheDocument();
  expect(links.resources).toBeInTheDocument();
  expect(links.login).toBeInTheDocument();
  expect(links.signUp).toBeInTheDocument();
};

/**
 * Helper function: checks Hero component elements existence
 */
export const checkHero = () => {
  const data = getHeroData();

  const header = screen.getByRole("heading", {
    level: 1,
    name: data.title,
  });

  const description = screen.getByText(data.description);

  const image = screen.getByTestId("hero-img");

  const linkContainer = screen.getByTestId("hero-btn-cont");
  const link = within(linkContainer).getByText(data.linkName);

  // Check elements existence
  expect(header).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringMatching(data.imagePath));
  expect(link).toBeInTheDocument();
};

/**
 * Helper function: checks Features component elements existence
 */
export const checkFeatures = () => {
  const data = getFeaturesData();

  const header = screen.getByRole("heading", {
    level: 2,
    name: data.title,
  });
  const description = screen.getByText(data.description);

  // Brand recognition feature
  const recognition = data.recognitionFeature;
  const recognitionHeader = screen.getByRole("heading", {
    level: 3,
    name: recognition.title,
  });
  const recognitionDesc = screen.getByText(recognition.description);

  // Detailed Records feature
  const records = data.recordsFeature;
  const recordsHeader = screen.getByRole("heading", {
    level: 3,
    name: records.title,
  });
  const recordsDesc = screen.getByText(records.description);

  // Fully Customizable feature
  const customizable = data.customizableFeature;
  const customizableHeader = screen.getByRole("heading", {
    level: 3,
    name: customizable.title,
  });
  const customizableDesc = screen.getByText(customizable.description);

  // Check elements existence
  expect(header).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(recognitionHeader).toBeInTheDocument();
  expect(recognitionDesc).toBeInTheDocument();
  expect(recordsHeader).toBeInTheDocument();
  expect(recordsDesc).toBeInTheDocument();
  expect(customizableHeader).toBeInTheDocument();
  expect(customizableDesc).toBeInTheDocument();
};

/**
 * Helper function: checks Start component elements existence
 */
export const checkStart = () => {
  const data = getStartData();

  const header = screen.getByRole("heading", {
    level: 2,
    name: data.title,
  });

  const linkContainer = screen.getByTestId("start-btn-cont");
  const button = within(linkContainer).getByText(data.linkName);

  // Check elements existence
  expect(header).toBeInTheDocument();
  expect(button).toBeInTheDocument();
};

/**
 * Helper function: checks Footer component elements existence
 */
export const checkFooter = () => {
  const data = getFooterData();

  const header = screen.getByRole("heading", { level: 2, name: data.title });

  // Page Links
  const shortening = screen.getByText(data.shorteningLink);
  const brand = screen.getByText(data.brandLink);
  const analytics = screen.getByText(data.analyticsLink);
  const blog = screen.getByText(data.blogLink);
  const developers = screen.getByText(data.developersLink);
  const support = screen.getByText(data.supportLink);
  const about = screen.getByText(data.aboutLink);
  const ourTeam = screen.getByText(data.ourTeamLink);
  const careers = screen.getByText(data.careersLink);
  const contact = screen.getByText(data.contact);

  // Social Links
  const facebook = screen.getByLabelText(data.facebookLink);
  const twitter = screen.getByLabelText(data.twitterLink);
  const pinterest = screen.getByLabelText(data.pinterestLink);
  const instagram = screen.getByLabelText(data.instagramLink);

  // Check elements existence
  expect(header).toBeInTheDocument();
  expect(shortening).toBeInTheDocument();
  expect(brand).toBeInTheDocument();
  expect(analytics).toBeInTheDocument();
  expect(blog).toBeInTheDocument();
  expect(developers).toBeInTheDocument();
  expect(support).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(ourTeam).toBeInTheDocument();
  expect(careers).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
  expect(facebook).toBeInTheDocument();
  expect(twitter).toBeInTheDocument();
  expect(pinterest).toBeInTheDocument();
  expect(instagram).toBeInTheDocument();
};

/**
 * Helper function: returns main navigation links
 */
const getNavigation = () => {
  const data = getNavLinks();

  return {
    features: screen.getByText(data.featuresLink),
    pricing: screen.getByText(data.pricingLink),
    resources: screen.getByText(data.resourcesLink),
    login: screen.getByText(data.loginLink),
    signUp: screen.getByText(data.signUpLink),
  };
};
