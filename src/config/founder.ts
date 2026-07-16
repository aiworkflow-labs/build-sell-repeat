import { HeartHandshake, Clock, Code2, type LucideIcon } from "lucide-react";

/**
 * "Founder" content (single source of truth).
 *
 * Introduces the person behind the brand to build trust. Copy and the profile
 * card are kept as data so they can change without touching the component.
 */
export type FounderTrustPoint = {
  icon: LucideIcon;
  label: string;
};

export type FounderProfile = {
  name: string;
  /** Initials for the placeholder avatar (no photo yet). */
  initials: string;
  role: string;
  status: string;
  trust: FounderTrustPoint[];
};

export type FounderContent = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  profile: FounderProfile;
};

export const founder: FounderContent = {
  eyebrow: "About",
  heading: "Built by someone who believes selling online should be simple.",
  paragraphs: [
    "Build. Sell. Repeat. exists to help small businesses accept orders without the usual friction — no clunky checkout and no orders lost in the DMs, just a simple page your customers already know how to use.",
    "No agencies and no complicated software. You get one clean ordering page, set up for you, that sends every order straight to your WhatsApp.",
    "And you work with me directly — personal support from the first message to long after your page goes live.",
  ],
  profile: {
    name: "Zaid",
    initials: "Z",
    role: "Founder, Build. Sell. Repeat.",
    status: "Available on WhatsApp",
    trust: [
      { icon: HeartHandshake, label: "Personal support" },
      { icon: Clock, label: "Usually replies within a few hours" },
      { icon: Code2, label: "Built with Next.js" },
    ],
  },
};
