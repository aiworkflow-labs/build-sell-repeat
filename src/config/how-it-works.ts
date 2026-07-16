import {
  ClipboardList,
  PencilRuler,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

/**
 * "How it works" content (single source of truth).
 *
 * The three-step customer journey, kept as data so copy and icons can change
 * without touching the component. Icons are Lucide components referenced
 * directly; the section renders them at a consistent size.
 */
export type HowItWorksStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const howItWorksHeading = {
  title: "How it works",
  supporting: "From first message to first order in three simple steps.",
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    icon: ClipboardList,
    title: "Tell us about your business",
    description:
      "Share your products, prices, and photos over WhatsApp. No forms and no tech setup — just a quick chat.",
  },
  {
    icon: PencilRuler,
    title: "We build your ordering page",
    description:
      "We design a clean, mobile-first ordering page for your Instagram bio, ready for you to review — usually within 48 hours.",
  },
  {
    icon: MessageCircle,
    title: "Orders arrive on WhatsApp",
    description:
      "Customers browse, pick what they want, and their order lands straight in your WhatsApp — organized and ready to fulfil.",
  },
];
