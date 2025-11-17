import styles from "./Card.module.css";
import type { CardProps } from "../types";
import Image from "next/image";

/**
 * Renders a card with:
 * - Icon
 * - Title
 * - Description
 *
 * Props are defined in {@link CardProps}.
 */
export default function Card({ iconPath, title, description }: CardProps) {
  return (
    <div className={`flex-col-center ${styles.cardCont}`}>
      <div className={`flex-center ${styles.iconCont}`}>
        <Image src={iconPath} width={40} height={40} alt="" />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </div>
  );
}
