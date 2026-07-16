import { Container } from "@/components/ui/container";
import { founder } from "@/config/founder";
import { SECTION_IDS } from "@/lib/constants";

/**
 * "Founder" section. Server Component.
 *
 * A trust-building two-column layout: on the left, an "About" eyebrow, a
 * personal headline, and a few short paragraphs; on the right, a premium
 * profile card (placeholder avatar, name, role, WhatsApp status, and small
 * trust points). Mobile-first — stacks to a single column with the copy first.
 * Reuses the same tokens, rhythm, and card styling as earlier sections; sits
 * on the tinted background to alternate against the paper Pricing above.
 */
export function Founder() {
  const headingId = "founder-heading";
  const { profile } = founder;

  return (
    <section
      id={SECTION_IDS.founder}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-b border-stone-200/70 bg-stone-100/50 py-16 sm:py-24 lg:py-section"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
          {/* Left: story */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              {founder.eyebrow}
            </p>
            <h2
              id={headingId}
              className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
            >
              {founder.heading}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-stone-600">
              {founder.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right: profile card */}
          <div className="md:justify-self-end md:pl-4">
            <div className="w-full max-w-sm rounded-card border border-stone-200 bg-surface p-8 shadow-card">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-action font-display text-2xl font-semibold text-white"
                >
                  {profile.initials}
                </span>
                <div>
                  <p className="text-lg font-semibold text-ink">{profile.name}</p>
                  <p className="text-sm text-stone-600">{profile.role}</p>
                </div>
              </div>

              <span className="mt-5 inline-flex items-center gap-2 rounded-pill bg-success/10 px-3 py-1 text-sm font-medium text-success">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-success"
                />
                {profile.status}
              </span>

              <ul
                role="list"
                className="mt-6 space-y-3 border-t border-stone-200 pt-6"
              >
                {profile.trust.map((point) => {
                  const Icon = point.icon;
                  return (
                    <li
                      key={point.label}
                      className="flex items-center gap-3 text-sm text-stone-600"
                    >
                      <Icon className="size-4 shrink-0 text-brand" aria-hidden="true" />
                      {point.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
