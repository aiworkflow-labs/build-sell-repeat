import type { SiteConfig } from "@/types";
import { whatsappLink } from "@/lib/utils";

/**
 * Brand-level configuration — single source of truth for identity and
 * contact. Navigation lives in `config/navigation.ts`; pricing in
 * `config/pricing.ts`; SEO metadata in `config/metadata.ts`.
 */
const whatsappNumber = "918505823254";
const whatsappMessage =
  "Hi Zaid! I'd like to know more about getting an ordering page for my business.";

/**
 * The single WhatsApp destination every conversion CTA points to
 * (navbar, hero, pricing, founder, final CTA, footer). Kept here so the
 * whole site stays in sync from one place.
 */
export const whatsappHref = whatsappLink(whatsappNumber, whatsappMessage);

export const siteConfig: SiteConfig = {
  name: "Build. Sell. Repeat.",
  shortName: "BSR",
  tagline: "Turn Instagram followers into WhatsApp orders",
  description:
    "We build small businesses a simple ordering page for their Instagram bio. Customers browse your products and place orders straight to your WhatsApp — no website, no monthly fees, and no complicated setup.",
  // PLACEHOLDER — not live yet. Set this to the real Vercel URL (or custom
  // domain) after the first deployment. Canonical, Open Graph, sitemap, and
  // robots all derive from this, so update it here in one place post-launch.
  url: "https://buildsellrepeat.com",
  locale: "en_IN",

  contact: {
    whatsappNumber,
    whatsappMessage,
    email: "hello@buildsellrepeat.com",
  },

  cta: {
    primaryLabel: "Chat with me on WhatsApp",
    primaryHref: whatsappHref,
    demoLabel: "View live demo",
    demoHref: "/#demo",
  },
};
