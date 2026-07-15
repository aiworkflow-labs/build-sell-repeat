import { Hero } from "@/components/home/hero";
import { DemoSection } from "@/components/home/demo-section";

/**
 * Homepage. Sections are composed top-to-bottom and built in phases:
 * Hero (done) → Demo (4.1 layout) → how it works, benefits, pricing,
 * founder, FAQ come next.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <DemoSection />
    </>
  );
}
