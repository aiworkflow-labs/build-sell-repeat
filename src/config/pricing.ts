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
  badge: "Founding Offer",
  headline: "Everything you need to start taking orders",
  supportingCopy:
    "One flat payment to set everything up. No monthly fees, no subscriptions, and no surprise charges — the page is yours to keep.",
  features: [
    "Custom ordering page",
    "Mobile-first responsive design",
    "WhatsApp ordering built in",
    "Instagram bio link ready",
    "Delivered in 48 hours",
    "Free minor revisions after delivery",
  ],
  ctaLabel: "Get your ordering page",
  ctaTrustNote: "One-time payment • No subscriptions",
};
