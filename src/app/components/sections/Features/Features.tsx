"use client"; // Client Component

import styles from "./Features.module.css";
import Card from "../../ui/Card/Card";
import { getFeature } from "@/app/utils/utils";
import { useAppSelector } from "@/app/hooks";
import UrlCardsList from "../../shared/Url/UrlCardsList/UrlCardsList";

/**
 * Renders the features section with:
 * - list of urls (original/short)
 * - advanced statistics description
 * - list of Shortly features: Brand Recognition, Detailed Records and Fully Customizable
 */
export default function Features() {
  const recognition = getFeature("recognition");
  const records = getFeature("records");
  const customizable = getFeature("customizable");

  const list = useAppSelector((state) => state.shortUrls);

  return (
    <section className={styles.sectionCont}>
      {/*List of URLs*/}
      <div aria-live="assertive" aria-atomic="true">
        {list.length > 0 ? <UrlCardsList urlList={list} /> : null}
      </div>

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
