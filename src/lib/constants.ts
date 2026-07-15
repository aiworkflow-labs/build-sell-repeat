/**
 * App-wide constants. Non-content, structural values live here so they
 * stay consistent across the codebase.
 */

/** Base URL for WhatsApp click-to-chat links. */
export const WHATSAPP_BASE_URL = "https://wa.me";

/** Homepage section anchor ids (used for nav links + scroll targets). */
export const SECTION_IDS = {
  hero: "hero",
  demo: "demo",
  howItWorks: "how-it-works",
  benefits: "benefits",
  pricing: "pricing",
  founder: "founder",
  faq: "faq",
} as const;

/** Top-level routes. */
export const ROUTES = {
  home: "/",
  pricing: "/pricing",
  contact: "/contact",
  faq: "/faq",
  demos: "/demos",
} as const;

/** Tailwind breakpoints (px) mirrored for use in JS (e.g. media queries). */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
