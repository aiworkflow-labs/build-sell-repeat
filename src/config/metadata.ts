import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Default SEO metadata, derived from site config. Page-level metadata can
 * override or extend this via Next's `metadata` export.
 */
const title = `${siteConfig.name} — ${siteConfig.tagline}`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Instagram orders",
    "WhatsApp ordering page",
    "ordering page for small business",
    "Instagram to WhatsApp",
    "online ordering India",
    "home baker ordering page",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};
