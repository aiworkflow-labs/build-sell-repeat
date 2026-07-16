import { Container } from "@/components/ui/container";
import {
  howItWorksHeading,
  howItWorksSteps,
} from "@/config/how-it-works";
import { SECTION_IDS } from "@/lib/constants";

/**
 * "How it works" section. Server Component.
 *
 * A clean three-step explanation of the customer journey, rendered as a
 * semantic ordered list so the sequence is conveyed to assistive tech. Each
 * step is a card consistent with the Demo product cards (same tokens: border,
 * surface, radius, shadow) with a brand-tinted Lucide icon and an editorial
 * step numeral. Mobile-first: single column that becomes three from `lg`.
 */
export function HowItWorks() {
  const headingId = "how-it-works-heading";

  return (
    <section
      id={SECTION_IDS.howItWorks}
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
            {howItWorksHeading.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            {howItWorksHeading.supporting}
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
          {howItWorksSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="rounded-card border border-stone-200 bg-surface p-6 shadow-card sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl font-extrabold text-stone-200"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
