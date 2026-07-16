import { Hero } from "@/components/home/hero";
import { DemoSection } from "@/components/home/demo-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { Benefits } from "@/components/home/benefits";

/**
 * Homepage. Sections are composed top-to-bottom and built in phases:
 * Hero → Demo → How it works → Benefits (done) → pricing, founder, FAQ next.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <DemoSection />
      <HowItWorks />
      <Benefits />
    </>
  );
}
