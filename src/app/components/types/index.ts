/**
 * Props for the PillLink component
 * @property description  - link description
 * @property href         - link href
 */
export type PillLinkProps = {
  description: string;
  href: string;
};

/**
 * Props for the Card component
 * @property iconPath     - icon path
 * @property title        - card title
 * @property description  - card description
 */
export type CardProps = {
  iconPath: string;
  title: string;
  description: string;
};

/**
 * Props for the Button component
 * @property type        - button type
 * @property styling     - CSS styling classes
 * @property onClickFunc - onClick function
 * @property name        - button name
 */
export type ButtonProps = {
  type: "submit" | "button";
  styling?: string | string[];
  onClickFunc?: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
};

/**
 * Props for the UrlCard component
 * @property originalUrl - url submitted by the user
 * @property shortUrl    - short url
 */
export type UrlCardProps = {
  originalUrl: string;
  shortUrl: string;
};
