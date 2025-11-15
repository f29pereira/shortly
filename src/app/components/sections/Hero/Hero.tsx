import styles from "./Hero.module.css";
import Image from "next/image";
import PillLink from "../../PillLink/PillLink";

/**
 * Renders the hero section with:
 * - Image of a person working
 * - Title
 * - Descripton of Shortly
 * - Get started link
 */
export default function Hero() {
  return (
    <section className={styles.heroCont}>
      {/*Hero Image*/}
      <div className={styles.imgCont}>
        <Image
          className={styles.img}
          src="images/illustration-working.svg"
          width={733}
          height={482}
          alt=""
        />
      </div>

      {/*Hero content*/}
      <div className={styles.contentCont}>
        {/*Title*/}
        <h1 className={styles.title}>More than just shorter links</h1>

        {/*Descripton of Shortly*/}
        <p className={styles.description}>
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>

        {/*Get started link*/}
        <div className={styles.getStartedCont}>
          <PillLink description="Get Started" href="#" />
        </div>
      </div>
    </section>
  );
}
