import { screen } from "@testing-library/react";

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
