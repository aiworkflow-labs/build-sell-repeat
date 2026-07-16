import { HeartHandshake, Clock, ShieldCheck, type LucideIcon } from "lucide-react";

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
  /** Initials used as a fallback if no photo is set. */
  initials: string;
  /** Real founder photo. When present, it replaces the initials avatar. */
  photo?: { src: string; alt: string };
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
  eyebrow: "The founder",
  heading: "Hi, I'm Zaid.",
  paragraphs: [
    "I personally build every ordering page you see here.",
    "When you message me on WhatsApp, you're chatting directly with me\u2014not a sales team.",
    "My goal is simple: help your business start accepting more orders online without making technology feel complicated.",
  ],
  profile: {
    name: "Zaid",
    initials: "Z",
    photo: {
      src: "/founder-zaid.jpg",
      alt: "Zaid, founder of Build. Sell. Repeat.",
    },
    role: "Founder, Build. Sell. Repeat.",
    status: "Available on WhatsApp",
    trust: [
      { icon: HeartHandshake, label: "Personal support, start to finish" },
      { icon: Clock, label: "Usually replies within a few hours" },
      { icon: ShieldCheck, label: "No agencies or middlemen" },
    ],
  },
};
