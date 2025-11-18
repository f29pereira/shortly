"use client"; //Client Component

import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HamburgerIcon from "@/app/components/HamburgerIcon/HamburgerIcon";
import PillLink from "@/app/components/PillLink/PillLink";
import MobileNav from "../Mobile/MobileNav";

/**
 * Renders desktop/mobile page navigation with links for:
 * - Features
 * - Pricing
 * - Resources
 * - Login
 * - Sign Up
 */
export default function Nav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navCont}>
      <div className={styles.leftNavCont}>
        {/*Logo*/}
        <Image
          className={styles.navLogo}
          src="images/logo.svg"
          alt="Shortly Logo"
          width={121}
          height={33}
        />

        {/*Mobile: Hamburguer button*/}
        <button
          className={styles.hamburgerButton}
          aria-label={isMobileNavOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMobileNavOpen}
          onClick={toggleMobileNav}
        >
          <HamburgerIcon />
        </button>

        {/*Desktop: Left Navigation*/}
        <ul className={styles.leftNavDesktop}>
          <li>
            <Link className={styles.navLink} href="#">
              Features
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="#">
              Pricing
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="#">
              Resources
            </Link>
          </li>
        </ul>

        {/*Desktop: Right Navigation*/}
        <ul className={styles.rightNavDesktop} aria-label="User Authentication">
          <li>
            <Link className={styles.navLink} href="#">
              Login
            </Link>
          </li>
          <li>
            <PillLink description="Sign Up" href="#" />
          </li>
        </ul>
      </div>

      {/*Mobile: Navigation*/}
      {isMobileNavOpen ? <MobileNav /> : null}
    </nav>
  );
}
