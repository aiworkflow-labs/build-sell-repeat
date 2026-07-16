import { Hero } from "@/components/home/hero";
import { DemoSection } from "@/components/home/demo-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { Benefits } from "@/components/home/benefits";
import { Pricing } from "@/components/home/pricing";
import { Founder } from "@/components/home/founder";
import { Faq } from "@/components/home/faq";

/**
 * Homepage. Sections are composed top-to-bottom and built in phases:
 * Hero → Demo → How it works → Benefits → Pricing → Founder → FAQ (done).
 * Final CTA comes next.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <DemoSection />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Founder />
      <Faq />
    </>
  );
}
