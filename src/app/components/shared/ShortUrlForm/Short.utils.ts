/**
 * Reusable functions for Short component
 */
import { isString, isStringEmpty } from "@/app/utils/utils";

/**
 * Fetches short url from cleanuri API
 */
export const fetchShortUrl = async (urlInput: string) => {
  //Server Action: cleanuri API - "/api/shorten"
  const response = await fetch("/api/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: urlInput }),
  });

  if (response && response.statusText === "OK") {
    const url = await response.json();

    return url.result_url;
  }

  return "";
};

/**
 * Validates the url input value and returns error message if invalid
 *
 * Valid if:
 * - ins't empty
 * - matches rules defined in isUrlValid function
 */
export const validateUrl = (url: string): string => {
  if (!isString(url) || isStringEmpty(url)) {
    return "Please add a link";
  }

  if (!isUrlValid(url)) {
    return "Please enter a valid link";
  }

  return "";
};

/**
 * Validates URL
 *
 * Valid if:
 * - starts with http:// or https://
 * - followed by subdomain (min: 2 chars, max: 256 chars)
 * - followed by "." character and top level domain (e.g. .com, .org)
 * - followed by end of the URL or "/" character
 * - matches any character after the "/" character (except white spaces)
 */
const isUrlValid = (link: string): boolean => {
  const regex =
    /^(https?:\/\/)[a-zA-Z0-9.-]{2,256}\.[a-z]{2,6}(?=\/|$)[^\s]*$/i;
  return regex.test(link);
};
