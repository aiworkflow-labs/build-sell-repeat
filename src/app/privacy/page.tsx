import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";
import { privacyPolicy } from "@/config/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Build. Sell. Repeat. collects, uses, and protects the information you share with us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalContent doc={privacyPolicy} />;
}
