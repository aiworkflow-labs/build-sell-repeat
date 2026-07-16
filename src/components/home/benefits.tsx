import { Container } from "@/components/ui/container";
import { benefits, benefitsHeading } from "@/config/benefits";
import { SECTION_IDS } from "@/lib/constants";

/**
 * "Benefits" section. Server Component.
 *
 * Six outcome-focused cards in a mobile-first responsive grid (1 → 2 → 3
 * columns). Cards stretch to equal height per row via grid stretch + `h-full`,
 * so mismatched copy lengths never leave ragged cards. Rendered as a semantic
 * list; icons are decorative. Reuses the same tokens and rhythm as Hero, Demo,
 * and How It Works; sits on the tinted background to alternate against the
 * paper How It Works section above it.
 */
export function Benefits() {
  const headingId = "benefits-heading";

  return (
    <section
      id={SECTION_IDS.benefits}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-b border-stone-200/70 bg-stone-100/50 py-16 sm:py-24 lg:py-section"
    >
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id={headingId}
            className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
          >
            {benefitsHeading.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            {benefitsHeading.supporting}
          </p>
        </div>

        {/* Benefit cards */}
        <ul
          role="list"
          className="mt-12 grid gap-5 sm:mt-14 sm:auto-rows-fr sm:grid-cols-2 sm:gap-6 md:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <li key={benefit.title} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-stone-200 bg-surface p-6 shadow-card sm:p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-stone-600">
                    {benefit.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
