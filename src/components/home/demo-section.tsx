import { Container } from "@/components/ui/container";
import { DemoPhoneFrame } from "@/components/demo/demo-phone-frame";
import { DemoPreview } from "@/components/demo/demo-preview";
import { InteractiveDemo } from "@/components/demo/interactive-demo";
import { demoIndustries } from "@/config/demo";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Interactive Demo section. Server Component.
 *
 * Renders the section heading and one phone frame per industry on the server,
 * then hands those frames to the `InteractiveDemo` client boundary which
 * shows the selected one. This keeps all ordering-page markup
 * (`DemoPhoneFrame` + `DemoPreview`) as Server Components while the only
 * client-side concern — the selected industry — lives in a single component.
 * Layout is unchanged from Milestone 4.1.
 */
export function DemoSection() {
  const frames = demoIndustries.map((industry) => ({
    id: industry.id,
    node: (
      <DemoPhoneFrame>
        <DemoPreview industry={industry} />
      </DemoPhoneFrame>
    ),
  }));

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

        <InteractiveDemo frames={frames} />
      </Container>
    </section>
  );
}
