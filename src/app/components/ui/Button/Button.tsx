import styles from "./Button.module.css";
import type { ButtonProps } from "../../types";

/**
 * Renders a button with:
 * - type
 * - onClick function (not required)
 * - name
 *
 * Props are defined in {@link ButtonProps}.
 */
export default function Button({ type, onClickFunc, name }: ButtonProps) {
  return (
    <button className={styles.button} type={type} onClick={onClickFunc}>
      {name}
    </button>
  );
}
