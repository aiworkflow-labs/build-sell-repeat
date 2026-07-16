import { Hero } from "@/components/home/hero";
import { DemoSection } from "@/components/home/demo-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { Benefits } from "@/components/home/benefits";
import { Pricing } from "@/components/home/pricing";
import { Founder } from "@/components/home/founder";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { serviceJsonLd } from "@/config/structured-data";

/**
 * Homepage. Sections are composed top-to-bottom and built in phases:
 * Hero → Demo → How it works → Benefits → Pricing → Founder → FAQ →
 * Final CTA (done). Footer is provided by the site shell.
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <DemoSection />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Founder />
      <Faq />
      <FinalCta />
    </>
  );
}
