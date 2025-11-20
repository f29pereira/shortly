import styles from "./MobileNav.module.css";
import Link from "next/link";
import PillLink from "@/app/components/ui/PillLink/PillLink";

/**
 * Renders the mobile screen pop up page navigation with links for:
 * - Features
 * - Pricing
 * - Resources
 * - Login
 * - Sign Up
 */
export default function MobileNav() {
  return (
    <div className={styles.mobileNavCont}>
      <ul className="flex-col-center">
        <li className={styles.item}>
          <Link className={styles.navLink} href="#">
            Features
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.navLink} href="#">
            Pricing
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.navLink} href="#">
            Resources
          </Link>
        </li>
      </ul>

      <hr className={styles.dividerLine} />

      <ul
        className={`flex-col-center ${styles.authCont}`}
        aria-label="User Authentication"
      >
        <li className={styles.item}>
          <Link className={styles.navLink} href="#">
            Login
          </Link>
        </li>
        <li className={`${styles.item} ${styles.signUpCont}`}>
          <PillLink description="Sign Up" href="#" />
        </li>
      </ul>
    </div>
  );
}
