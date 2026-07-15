import type { SiteConfig } from "@/types";

/**
 * Brand-level configuration — single source of truth for identity and
 * contact. Navigation lives in `config/navigation.ts`; pricing in
 * `config/pricing.ts`; SEO metadata in `config/metadata.ts`.
 */
export const siteConfig: SiteConfig = {
  name: "Build. Sell. Repeat.",
  shortName: "BSR",
  tagline: "Turn your Instagram into WhatsApp orders",
  description:
    "We build small businesses a simple ordering page for their Instagram bio. Customers tap, pick what they want, and the order lands straight in your WhatsApp — organized and ready.",
  url: "https://buildsellrepeat.com",
  locale: "en_IN",

  contact: {
    whatsappNumber: "919000000000",
    whatsappMessage: "Hi! I'd like to know more about getting an ordering page.",
    email: "hello@buildsellrepeat.com",
  },

  cta: {
    primaryLabel: "Get your ordering page",
    primaryHref: "/#pricing",
    demoLabel: "Try the live demo",
    demoHref: "/#demo",
  },
};
