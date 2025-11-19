import { screen, within } from "@testing-library/react";
import { getFeaturesData, getHeroData } from "../fixtures/shortly.fixture";

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
 * Helper function: returns main navigation links
 */
const getNavigation = () => {
  return {
    features: screen.getByText("Features"),
    pricing: screen.getByText("Pricing"),
    resources: screen.getByText("Resources"),
    login: screen.getByText("Login"),
    signUp: screen.getByText("Sign Up"),
  };
};
