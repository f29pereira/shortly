import styles from "./Hero.module.css";
import Image from "next/image";
import PillLink from "../../ui/PillLink/PillLink";
import Short from "../../shared/ShortUrlForm/Short";

/**
 * Renders the hero section with:
 * - Image of a person working
 * - Title
 * - Descripton of Shortly
 * - Get started link
 * - Short component (Short URL Form)
 */
export default function Hero() {
  return (
    <section className={styles.heroCont}>
      {/*Hero Image*/}
      <div className={styles.imgCont}>
        <Image
          data-testid="hero-img"
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
        <div className={styles.getStartedCont} data-testid="hero-btn-cont">
          <PillLink description="Get Started" href="#" />
        </div>
      </div>

      {/*Shorten URL Form*/}
      <div className={styles.shortCont}>
        <Short />
      </div>
    </section>
  );
}
