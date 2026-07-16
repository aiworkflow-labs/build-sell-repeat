/**
 * Shared application types — the single place for cross-cutting shapes.
 */

/** A navigation link. `external` opens in a new tab and uses <a>. */
export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Primary contact channels. WhatsApp is our main channel. */
export type ContactInfo = {
  /** Full international number, digits only, no "+" (for wa.me). */
  whatsappNumber: string;
  /** Default pre-filled WhatsApp message. */
  whatsappMessage: string;
  email: string;
};

/** Reusable call-to-action config. */
export type CTAConfig = {
  primaryLabel: string;
  primaryHref: string;
  demoLabel: string;
  demoHref: string;
};

/** Top-level brand/site configuration. */
export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  contact: ContactInfo;
  cta: CTAConfig;
};

/**
 * Pricing configuration — drives every price surface in the UI.
 * No price value is ever hardcoded in a component.
 */
export type PricingConfig = {
  amount: number;
  /** Optional "was" price for future strikethrough deals. */
  originalAmount: number | null;
  showOriginalPrice: boolean;
  currency: string;
  /** Billing cadence, e.g. "one-time payment". */
  billing: string;
  /** Optional word shown before the price, e.g. "Only". */
  pricePrefix?: string;
  /** Featured badge, e.g. "Founding Offer". Null hides it. */
  badge: string | null;
  /** Short, value-focused card headline. */
  headline: string;
  /** Small value points shown directly under the price. */
  priceHighlights: string[];
  /** Explains the no-monthly-fees model. */
  supportingCopy: string;
  /** What's included. */
  features: string[];
  ctaLabel: string;
  /** Small reassurance note shown under the CTA. */
  ctaTrustNote: string;
};
