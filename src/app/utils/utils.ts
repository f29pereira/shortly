import type { CardProps } from "../components/types";

/**
 * Returns the data for a given feature
 */
export const getFeature = (
  feature: "recognition" | "records" | "customizable"
): CardProps => {
  switch (feature) {
    case "recognition":
      return {
        iconPath: "images/icons/icon-brand-recognition.svg",
        title: "Brand Recognition",
        description:
          "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      };
    case "records":
      return {
        iconPath: "images/icons/icon-detailed-records.svg",
        title: "Detail Records",
        description:
          "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      };
    case "customizable":
      return {
        iconPath: "images/icons/icon-fully-customizable.svg",
        title: "Fully Customizable",
        description:
          "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      };
    default:
      return {
        iconPath: "",
        title: "",
        description: "",
      };
  }
};

/**
 * Checks if FormDataEntry is of type string
 */
export const isString = (
  strValue: FormDataEntryValue | null
): strValue is string => {
  return typeof strValue === "string";
};

/**
 * Checks if string is empty
 */
export const isStringEmpty = (strValue: string): boolean => {
  return strValue === "";
};
