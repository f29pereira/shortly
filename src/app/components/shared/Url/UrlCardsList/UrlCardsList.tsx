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
  const list = urlList.slice().reverse();

  return (
    <div className={styles.urlCardListCont}>
      {list.map((url, index) => (
        <UrlCard
          key={index}
          originalUrl={url.originalUrl}
          shortUrl={url.shortUrl}
        />
      ))}
    </div>
  );
}
