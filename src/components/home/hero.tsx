import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/home/hero-visual";
import { siteConfig } from "@/config/site";
import { SECTION_IDS } from "@/lib/constants";

/** Trust line shown under the hero CTAs. */
const trustPoints = [
  "Set up for you in 48 hours",
  "One-time payment",
  "No monthly fees",
];

/**
 * Homepage Hero. Server Component. Answers what / who / why / next in the
 * first screen. Text-first so it paints before the visual (LCP), and
 * mobile-first: single column that becomes two columns from `lg`. On desktop
 * it fills ~90vh and is vertically centered for balance.
 */
export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="border-b border-stone-200/70 lg:flex lg:min-h-[90vh] lg:items-center"
    >
      <Container className="w-full py-14 sm:py-20 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Turn your Instagram into{" "}
              <span className="text-brand">WhatsApp orders</span>.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:mt-5">
              We build you a simple ordering page for your Instagram bio. Your
              customers tap, pick what they want, and the order lands straight in
              your WhatsApp — organized and ready.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button asChild size="lg" className="h-[52px] w-full sm:w-auto">
                <Link href={siteConfig.cta.primaryHref}>
                  {siteConfig.cta.primaryLabel}
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-[52px] w-full sm:w-auto"
              >
                <Link href={siteConfig.cta.demoHref}>
                  {siteConfig.cta.demoLabel}
                </Link>
              </Button>
            </div>

            {/* Trust row */}
            <div className="mt-8">
              {/* Mobile: stacked with checks */}
              <ul className="flex flex-col gap-2.5 sm:hidden">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-stone-600"
                  >
                    <Check className="size-4 text-action" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Desktop: single row with premium separators (phrases never break) */}
              <ul className="hidden flex-wrap items-center gap-x-3 gap-y-2 text-sm text-stone-600 sm:flex">
                {trustPoints.map((point, i) => (
                  <li key={point} className="flex items-center gap-x-3">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-stone-400">
                        •
                      </span>
                    )}
                    <span className="whitespace-nowrap">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual */}
          <div>
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
