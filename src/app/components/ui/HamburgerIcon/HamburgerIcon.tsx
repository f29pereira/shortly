import styles from "./HamburgerIcon.module.css";

/**
 * Renders a Hamburger icon
 */
export default function HamburgerIcon() {
  return (
    <div className={styles.hamburguerCont}>
      <div className={styles.hamburguerLine}></div>
      <div className={styles.hamburguerLine}></div>
      <div className={styles.hamburguerLine}></div>
    </div>
  );
}
