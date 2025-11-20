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
 * @property onClickFunc - onClick function
 * @property name        - button name
 */
export type ButtonProps = {
  type: "submit" | "button";
  onClickFunc?: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
};
