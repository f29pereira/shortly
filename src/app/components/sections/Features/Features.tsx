import styles from "./Features.module.css";
import Card from "../../Card/Card";

import { getFeature } from "@/app/utils/utils";

/**
 * Renders the features section with:
 * - advanced statistics description
 * - list of Shortly features: Brand Recognition, Detailed Records and Fully Customizable
 */
export default function Features() {
  const recognition = getFeature("recognition");
  const records = getFeature("records");
  const customizable = getFeature("customizable");

  return (
    <section className={styles.sectionCont}>
      <h2 className={styles.title}>Advanced Statistics</h2>

      <p className={styles.description}>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>

      {/*Features Cards*/}
      <div className={styles.featuresCont}>
        {/*Feature: Brand Recognition*/}
        <div className={styles.cardCont}>
          <Card
            iconPath={recognition.iconPath}
            title={recognition.title}
            description={recognition.description}
          />
        </div>

        {/*Feature: Detailed Records*/}
        <div className={`${styles.cardCont} ${styles.recordsCont}`}>
          <Card
            iconPath={records.iconPath}
            title={records.title}
            description={records.description}
          />
        </div>

        {/*Feature: Fully Customizable*/}
        <div
          className={`flex-center ${styles.cardCont} ${styles.customizableCont}`}
        >
          <Card
            iconPath={customizable.iconPath}
            title={customizable.title}
            description={customizable.description}
          />
        </div>

        {/*Connecting line*/}
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
