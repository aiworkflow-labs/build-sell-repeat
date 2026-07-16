import { siteConfig, whatsappHref } from "@/config/site";
import { pricing } from "@/config/pricing";

/**
 * Structured data (JSON-LD) for search engines. Derived from the same config
 * as the rest of the site so it never drifts from what's on the page.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  areaServed: "IN",
  founder: {
    "@type": "Person",
    name: "Zaid",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: whatsappHref,
    availableLanguage: ["English", "Hindi"],
  },
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Instagram-to-WhatsApp ordering page",
  serviceType: "Ordering page setup for small businesses",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: "IN",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: String(pricing.amount),
    priceCurrency: "INR",
    url: siteConfig.url,
    availability: "https://schema.org/InStock",
  },
};
