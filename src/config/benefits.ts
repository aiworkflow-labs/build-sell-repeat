import {
  TrendingUp,
  Timer,
  AtSign,
  MessageCircle,
  WalletMinimal,
  Rocket,
  type LucideIcon,
} from "lucide-react";

/**
 * "Benefits" content (single source of truth).
 *
 * Six cards, each communicating a customer *outcome* (not a feature). Copy is
 * written from the owner's point of view — what they gain — so the section
 * answers "why is this valuable to me?". Icons are Lucide components.
 */
export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefitsHeading = {
  title: "Why business owners choose us",
  supporting:
    "Everything is built around one goal — more orders, with less manual work.",
};

export const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: "Get more orders",
    description: "Turn Instagram visitors into paying customers.",
  },
  {
    icon: Timer,
    title: "Save hours every week",
    description: "No more copying order details by hand.",
  },
  {
    icon: AtSign,
    title: "Built for Instagram",
    description: "One bio link takes followers straight to your products.",
  },
  {
    icon: MessageCircle,
    title: "Keep using WhatsApp",
    description: "Every order lands in the WhatsApp you already use.",
  },
  {
    icon: WalletMinimal,
    title: "No monthly fees",
    description: "Pay once. No subscriptions, ever.",
  },
  {
    icon: Rocket,
    title: "Ready in 48 hours",
    description: "Start taking orders in about two days.",
  },
];
