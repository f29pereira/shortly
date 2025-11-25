import styles from "./Button.module.css";
import type { ButtonProps } from "../../types";

/**
 * Renders a button with:
 * - button type
 * - onClick function (not required)
 * - button name
 *
 * Props are defined in {@link ButtonProps}.
 */
export default function Button({
  type,
  styling,
  onClickFunc,
  name,
}: ButtonProps) {
  let cssStyles;

  if (Array.isArray(styling)) {
    cssStyles = styling.map((style) => styles[style]).join(" "); // List of CSS classes
  } else if (styling) {
    cssStyles = styles[styling]; // Unique CSS class
  } else {
    cssStyles = "";
  }

  return (
    <button
      className={`${styles.button} ${cssStyles}`}
      type={type}
      onClick={onClickFunc}
    >
      {name}
    </button>
  );
}
