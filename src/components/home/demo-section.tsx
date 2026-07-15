import { Container } from "@/components/ui/container";
import { IndustrySelector } from "@/components/demo/industry-selector";
import { DemoPhoneFrame } from "@/components/demo/demo-phone-frame";
import { DemoPreview } from "@/components/demo/demo-preview";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Interactive Demo — Milestone 4.1 (layout foundation only).
 *
 * Server Component. Static structure: heading, supporting text, industry
 * selector chips, and a reusable phone frame holding a placeholder preview.
 * No client state, interaction, or animation yet — behavior arrives in 4.2.
 * Mobile-first single column that stays centered; the phone frame caps its
 * own width so the section reads cleanly at every breakpoint.
 */
export function DemoSection() {
  return (
    <section
      id={SECTION_IDS.demo}
      className="scroll-mt-24 border-b border-stone-200/70 bg-stone-100/50 py-16 sm:py-24 lg:py-section"
    >
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            See a real ordering page
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            This is exactly what your customers see when they tap your link —
            clean, fast, and built for the phone in their hand.
          </p>
        </div>

        {/* Industry selector (static) — bleeds to the screen edge on mobile so
            the row can scroll horizontally without an awkward inset. */}
        <div className="-mx-5 mt-8 sm:mx-0 sm:mt-10">
          <IndustrySelector />
        </div>

        {/* Phone preview */}
        <div className="mt-12 sm:mt-14">
          <DemoPhoneFrame>
            <DemoPreview />
          </DemoPhoneFrame>
        </div>
      </Container>
    </section>
  );
}
