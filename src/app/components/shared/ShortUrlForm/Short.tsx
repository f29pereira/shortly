"use client"; // Client Component

import styles from "./Short.module.css";
import Button from "../../ui/Button/Button";

/**
 * Renders the shorten URL form with:
 * - URL text field
 * - Submit button
 */
export default function Short() {
  /**
   * Submits the form to shorten the input URL
   */
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      //TO DO - add API (cleanuri) logic
    } catch (error) {}
  };

  return (
    <div className={styles.shortCont}>
      <form className={styles.formCont} onSubmit={submitForm}>
        <label className="sr-only" htmlFor="shortenInput">
          URL
        </label>

        {/*URL Input*/}
        <input
          className={styles.input}
          type="text"
          id="shortenInput"
          placeholder="Shorten a link here..."
        />

        {/*Submit Button*/}
        <div className={styles.btnCont}>
          <Button type="submit" name="Shorten It!" />
        </div>
      </form>
    </div>
  );
}
