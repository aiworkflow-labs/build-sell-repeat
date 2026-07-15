import type { PricingConfig } from "@/types";

/**
 * Pricing configuration — SINGLE SOURCE OF TRUTH.
 *
 * Every price surface reads from this object. Nothing pricing-related is
 * hardcoded in any UI component. To change the offer, edit only this file.
 *
 * Planned ladder: Founding (now) -> Early -> Standard (+ optional maintenance).
 * To raise the price later, update `amount`; to show a strikethrough deal,
 * set `originalAmount` and flip `showOriginalPrice` to true.
 */
export const pricing: PricingConfig = {
  amount: 1999,
  originalAmount: null,
  showOriginalPrice: false,
  currency: "₹",
  billing: "one-time payment",
  tierLabel: "Founding Customer Offer",
  badge: "Limited Founding Spots",
  ctaLabel: "Claim Founding Price",
  supportingCopy:
    "Be one of our first customers and lock in this founding price. As Build. Sell. Repeat. grows, this price will increase for future customers.",
  features: [
    "Custom ordering page built for you in 48 hours",
    "Designed to match your brand",
    "Unlimited products, no monthly fees",
    "Orders sent straight to your WhatsApp",
    "Yours to keep",
  ],
};
