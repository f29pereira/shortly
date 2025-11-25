"use client"; // Client Component

import styles from "./UrlCardsList.module.css";
import type { UrlCardsListProps } from "@/app/components/types";
import UrlCard from "../UrlCard/UrlCard";

/**
 * Renders a list of UrlCard components
 *
 * Props are defined in {@link UrlCardsListProps}.
 */
export default function UrlCardsList({ urlList }: UrlCardsListProps) {
  return (
    <div className={styles.urlCardListCont}>
      {urlList.map((url, index) => (
        <UrlCard
          key={index}
          originalUrl={url.originalUrl}
          shortUrl={url.shortUrl}
        />
      ))}
    </div>
  );
}
