import type { FooterColumn, NavItem } from "@/types";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Navigation configuration. Kept separate from site config so links can
 * evolve without touching brand identity. Primary nav is intentionally
 * short (4 links) for clarity.
 */
export const mainNav: NavItem[] = [
  { label: "How it works", href: `/#${SECTION_IDS.howItWorks}` },
  { label: "Demos", href: `/#${SECTION_IDS.demo}` },
  { label: "Pricing", href: `/#${SECTION_IDS.pricing}` },
  { label: "FAQ", href: `/#${SECTION_IDS.faq}` },
];

export const footerNav: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: `/#${SECTION_IDS.howItWorks}` },
      { label: "Demos", href: `/#${SECTION_IDS.demo}` },
      { label: "Pricing", href: `/#${SECTION_IDS.pricing}` },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#founder" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: `/#${SECTION_IDS.faq}` },
      { label: "Email", href: "mailto:hello@buildsellrepeat.com", external: true },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund", href: "/refund" },
];
