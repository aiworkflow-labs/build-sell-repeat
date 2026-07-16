import { Container } from "@/components/ui/container";
import type { LegalDoc } from "@/config/legal";

/**
 * Renders a legal document (Privacy / Terms) from config. Server Component.
 * Simple, readable prose with a constrained measure, consistent with the
 * site's tokens, rhythm, and heading hierarchy (single h1, h2 per section).
 */
export function LegalContent({ doc }: { doc: LegalDoc }) {
  return (
    <section className="border-b border-stone-200/70 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-3 text-sm text-stone-400">{doc.updated}</p>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            {doc.intro}
          </p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-ink">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-relaxed text-stone-600">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
