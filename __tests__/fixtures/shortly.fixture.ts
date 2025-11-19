/**
 * Mocked data: brand recognition feature data
 */
export const getRecognitionFeature = () => {
  return {
    iconPath: "images/icons/icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  };
};

/**
 * Mocked data: details records feature data
 */
export const getDetailFeature = () => {
  return {
    iconPath: "images/icons/icon-detailed-records.svg",
    title: "Detail Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  };
};

/**
 * Mocked data: fully customizable feature data
 */
export const getCustomizableFeature = () => {
  return {
    iconPath: "images/icons/icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  };
};

/**
 * Mocked data: Hero component
 */
export const getHeroData = () => {
  return {
    title: "More than just shorter links",
    description:
      "Build your brand's recognition and get detailed insights on how your links are performing.",
    imagePath: "images/illustration-working.svg",
    linkName: "Get Started",
  };
};

/**
 * Mocked data: Features component
 */
export const getFeaturesData = () => {
  return {
    title: "Advanced Statistics",
    description:
      "Track how your links are performing across the web with our advanced statistics dashboard",
    recognitionFeature: getRecognitionFeature(),
    recordsFeature: getDetailFeature(),
    customizableFeature: getCustomizableFeature(),
  };
};
