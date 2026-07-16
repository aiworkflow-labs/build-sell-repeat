import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { faqHeading, faqItems } from "@/config/faq";
import { SECTION_IDS } from "@/lib/constants";

/**
 * FAQ section. Server Component.
 *
 * Uses native <details>/<summary> disclosures so it works with zero
 * client-side JavaScript and is keyboard- and screen-reader-accessible out of
 * the box (correct expanded/collapsed semantics). No client state and no
 * animation — the chevron simply flips via the `open` state. Config-driven and
 * consistent with earlier sections' tokens, rhythm, and card styling; sits on
 * the paper background to alternate against the tinted Founder section above.
 */
export function Faq() {
  const headingId = "faq-heading";

  return (
    <section
      id={SECTION_IDS.faq}
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
            {faqHeading.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            {faqHeading.supporting}
          </p>
        </div>

        {/* Questions */}
        <div className="mx-auto mt-12 max-w-3xl space-y-3 sm:mt-14">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-card border border-stone-200 bg-surface px-6 shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold text-ink sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className="size-5 shrink-0 text-stone-400 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 pr-8 leading-relaxed text-stone-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
