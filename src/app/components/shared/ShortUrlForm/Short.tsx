"use client"; // Client Component

import styles from "./Short.module.css";
import Button from "../../ui/Button/Button";
import { validateUrl, fetchShortUrl } from "./Short.utils";
import { useState } from "react";
import { isString } from "@/app/utils/utils";

/**
 * Renders the shorten URL form with:
 * - URL text field
 * - Error message if URL text field is invalid
 * - Submit button
 */
export default function Short() {
  const [error, setError] = useState<null | string>(null);

  /**
   * Submits the form to shorten the input URL
   */
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const input = formData.get("shortenInput");

      if (!isString(input)) {
        return;
      }

      const inputErrorMsg = validateUrl(input);

      if (inputErrorMsg !== "") {
        setError(inputErrorMsg); // Update error state
        return;
      } else {
        const shortUrl = await fetchShortUrl(input);

        //TO DO - save shortUrl value
      }
    } catch (error) {}
  };

  return (
    <div className={styles.shortCont}>
      <form className={styles.formCont} onSubmit={submitForm}>
        <label className="sr-only" htmlFor="shortenInput">
          URL
        </label>

        <div className={styles.inputCont}>
          {/*URL Input*/}
          <input
            className={`${styles.input} ${error ? styles.inputError : ""}`}
            type="text"
            id="shortenInput"
            name="shortenInput"
            placeholder="Shorten a link here..."
          />

          {/*URL Input Error Message*/}
          {error ? <span className={styles.errorMessage}>{error}</span> : null}
        </div>

        {/*Submit Button*/}
        <div className={styles.btnCont}>
          <Button type="submit" name="Shorten It!" />
        </div>
      </form>
    </div>
  );
}
