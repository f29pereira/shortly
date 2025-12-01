import styles from "./Start.module.css";
import PillLink from "../../ui/PillLink/PillLink";

/**
 * Renders the get started section with:
 * - Title
 * - Get started link
 */
export default function Start() {
  return (
    <section className={styles.sectionCont}>
      <h2 className={styles.title}>Boost your links today</h2>

      {/*Get started link*/}
      <div className={styles.getStartedCont} data-testid="start-btn-cont">
        <PillLink description="Get Started" href="#" />
      </div>
    </section>
  );
}
