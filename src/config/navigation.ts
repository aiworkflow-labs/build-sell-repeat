import type { NavItem } from "@/types";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Navigation configuration. Kept separate from site config so links can
 * evolve without touching brand identity. Primary nav is intentionally
 * short (4 links) for clarity. The footer keeps its own minimal link set.
 */
export const mainNav: NavItem[] = [
  { label: "How it works", href: `/#${SECTION_IDS.howItWorks}` },
  { label: "Demos", href: `/#${SECTION_IDS.demo}` },
  { label: "Pricing", href: `/#${SECTION_IDS.pricing}` },
  { label: "FAQ", href: `/#${SECTION_IDS.faq}` },
];
