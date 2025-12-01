import Hero from "./components/sections/Hero/Hero";
import Features from "./components/sections/Features/Features";
import Start from "./components/sections/Start/Start";

/**
 * Renders the Shortly main page with:
 * - hero section
 * - features section
 */
export default function Home() {
  return (
    <main>
      <Hero />

      <Features />

      <Start />
    </main>
  );
}
