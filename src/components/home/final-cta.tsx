import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { finalCta } from "@/config/final-cta";
import { whatsappHref } from "@/config/site";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Final CTA section. Server Component.
 *
 * The strongest, closing call-to-action: a centered, single-column block that
 * invites visitors who reached the bottom of the page to start a WhatsApp
 * conversation. Sits on a subtle brand-tinted background with generous
 * vertical spacing to feel like the page's main action, while reusing the same
 * primary button, tokens, and type scale as the Hero. Fully config-driven from
 * `config/final-cta.ts`. No client state and no animation.
 */
export function FinalCta() {
  const headingId = "final-cta-heading";

  return (
    <section
      id={SECTION_IDS.finalCta}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-b border-stone-200/70 bg-brand/5 py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            {finalCta.eyebrow}
          </p>

          <h2
            id={headingId}
            className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            {finalCta.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
            {finalCta.supporting}
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="h-[52px] w-full sm:w-auto">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                {finalCta.ctaLabel}
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-stone-600">
            {finalCta.trustPoints.map((point, i) => (
              <li key={point} className="flex items-center gap-x-3">
                {i === 0 ? (
                  <Check className="size-4 text-action" aria-hidden="true" />
                ) : (
                  <span aria-hidden="true" className="text-stone-400">
                    •
                  </span>
                )}
                <span className="whitespace-nowrap">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
