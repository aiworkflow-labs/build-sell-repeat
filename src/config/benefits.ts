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
    description:
      "A clear, tap-to-order page turns curious followers into paying customers — instead of orders getting lost in your DMs.",
  },
  {
    icon: Timer,
    title: "Save hours every week",
    description:
      "No more copying names, addresses, and totals by hand. Orders arrive neatly organized, so you spend time on your craft, not admin.",
  },
  {
    icon: AtSign,
    title: "Built for Instagram",
    description:
      "Made for how customers already find you — one link in your bio takes them straight to your products.",
  },
  {
    icon: MessageCircle,
    title: "Keep using WhatsApp",
    description:
      "No new apps to learn. Every order lands in the same WhatsApp you already check all day.",
  },
  {
    icon: WalletMinimal,
    title: "No monthly fees",
    description:
      "Pay once and it's yours. No subscriptions and no surprise charges quietly eating into your margins.",
  },
  {
    icon: Rocket,
    title: "Ready in 48 hours",
    description:
      "Send us your details today and start taking orders in about two days — not two weeks.",
  },
];
