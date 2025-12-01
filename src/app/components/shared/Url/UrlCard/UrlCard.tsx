"use client"; // Client Component

import styles from "./UrlCard.module.css";
import type { UrlCardProps } from "@/app/components/types";
import Button from "@/app/components/ui/Button/Button";
import { useState } from "react";

/**
 * Renders a card with:
 * - original URL submitted by the user
 * - short URL fetched from cleanuri API
 * - Copy short URL button
 */
export default function UrlCard({ originalUrl, shortUrl }: UrlCardProps) {
  // Button Label state
  const [label, setLabel] = useState<"Copy" | "Copied!">("Copy");

  // Button clicked state
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // Button CSS styling classes list state
  const [stylingClasses, setStylingClasses] = useState<string[]>(["copyBtn"]);

  /**
   * Copies the short URL and updates button related state
   */
  const copyShortUrl = async () => {
    if (!isClicked) {
      setIsClicked(true);
      setStylingClasses((prev) => [...prev, "copied"]); // Show copied button styling
      setLabel("Copied!"); // Update button name
      await navigator.clipboard.writeText(shortUrl); // Copy short URL
    }

    setTimeout(() => {
      resetBtn();
    }, 3000); // After 3 secs reset button
  };

  /**
   * Resets button state
   */
  const resetBtn = () => {
    setIsClicked(false);
    setStylingClasses(["copyBtn"]); // Remove copied styling
    setLabel("Copy"); // Update button name
  };

  return (
    <div className={styles.urlCardCont}>
      {/*Original URL*/}
      <h2 className="sr-only">Original URL</h2>
      <div className={styles.urlCont}>
        <span className={styles.original}>{originalUrl}</span>
      </div>

      <hr className={styles.dividerLine} />

      <div className={styles.shortBtnCont}>
        {/*Short URL*/}
        <h2 className="sr-only">Short URL</h2>
        <div className={styles.urlCont}>
          <span className={styles.short}>{shortUrl}</span>
        </div>

        {/*Copy Button*/}
        <div className={styles.btnCont}>
          <Button
            type="button"
            styling={stylingClasses}
            onClickFunc={copyShortUrl}
            name={label}
          />
        </div>
      </div>
    </div>
  );
}
