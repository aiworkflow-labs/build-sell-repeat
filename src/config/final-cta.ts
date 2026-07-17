/**
 * Final CTA content (single source of truth).
 *
 * The closing conversion section. Kept as data so the copy and trust points
 * can change without touching the component. The CTA itself reuses the shared
 * WhatsApp contact from `config/site.ts`, so the destination stays consistent
 * with the Pricing CTA.
 */
export type FinalCtaConfig = {
  eyebrow: string;
  heading: string;
  supporting: string;
  ctaLabel: string;
  /** Subtle helper line shown directly under the WhatsApp CTA. */
  ctaHelper: string;
  /** Short reassurance points shown under the CTA. */
  trustPoints: string[];
};

export const finalCta: FinalCtaConfig = {
  eyebrow: "Ready to start?",
  heading: "Ready to start taking WhatsApp orders?",
  supporting:
    "Message me today. I'll build your ordering page, set everything up, and you'll be ready to start accepting orders in about 48 hours.",
  ctaLabel: "Chat with me on WhatsApp",
  ctaHelper: "No pressure. I'll answer your questions first.",
  trustPoints: ["One-time payment", "No monthly fees", "Personal support"],
};
