import styles from "./PillLink.module.css";
import type { PillLinkProps } from "@/app/components/types";

/**
 * Renders a pill button shaped link
 *
 * Props are defined in {@link PillLinkProps}.
 */
export default function PillLink({ description, href }: PillLinkProps) {
  return (
    <div className={styles.pillButton}>
      <a href={href} className={styles.link}>
        {description}
      </a>
    </div>
  );
}
