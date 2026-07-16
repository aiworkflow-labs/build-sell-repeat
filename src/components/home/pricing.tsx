import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { pricing } from "@/config/pricing";
import { whatsappHref } from "@/config/site";
import { SECTION_IDS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

/**
 * Pricing section. Server Component.
 *
 * A single, featured pricing card designed to help the visitor decide with
 * confidence: one clear price, no monthly fees, exactly what's included, and
 * one primary action. Fully config-driven from `config/pricing.ts` — no price
 * or copy is hardcoded here. Reuses the same tokens, rhythm, and card styling
 * as earlier sections, with subtle brand emphasis (accent ring, float shadow,
 * floating badge) to mark it as the featured offer. Sits on the paper
 * background to alternate against the tinted Benefits section above.
 */
export function Pricing() {
  const headingId = "pricing-heading";

  return (
    <section
      id={SECTION_IDS.pricing}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-b border-stone-200/70 py-16 sm:py-24 lg:py-section"
    >
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id={headingId}
            className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
          >
            Simple, one-time pricing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            No subscriptions and no surprises. Pay once and the ordering page is
            yours to keep.
          </p>
        </div>

        {/* Featured card */}
        <div className="mx-auto mt-12 max-w-lg sm:mt-14">
          <div className="relative rounded-card border border-brand/25 bg-surface p-8 shadow-float ring-1 ring-brand/5 sm:p-10">
            {/* Featured badge */}
            {pricing.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-card">
                {pricing.badge}
              </span>
            )}

            {/* Headline + price */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-ink">
                {pricing.headline}
              </h3>

              <div className="mt-6 flex items-baseline justify-center gap-2">
                {pricing.showOriginalPrice && pricing.originalAmount && (
                  <span className="text-xl font-medium text-stone-400 line-through">
                    {formatPrice(pricing.originalAmount, pricing.currency)}
                  </span>
                )}
                {pricing.pricePrefix && (
                  <span className="text-lg font-medium text-stone-500">
                    {pricing.pricePrefix}
                  </span>
                )}
                <span className="font-display text-5xl font-extrabold tracking-tight text-ink">
                  {formatPrice(pricing.amount, pricing.currency)}
                </span>
                <span className="text-sm font-medium text-stone-600">
                  {pricing.billing}
                </span>
              </div>

              {/* Value points directly under the price */}
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-stone-600">
                {pricing.priceHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-1.5">
                    <Check className="size-4 text-action" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone-600">
                {pricing.supportingCopy}
              </p>
            </div>

            {/* What's included */}
            <ul role="list" className="mt-8 space-y-3.5 border-t border-stone-200 pt-8">
              {pricing.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"
                  >
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-ink">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-[52px] w-full"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pricing.ctaLabel}
                </a>
              </Button>
              <p className="mt-3 text-center text-sm text-stone-600">
                {pricing.ctaTrustNote}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
