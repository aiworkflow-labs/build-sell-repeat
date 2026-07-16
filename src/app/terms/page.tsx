import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";
import { termsOfService } from "@/config/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "What you can expect from Build. Sell. Repeat. and what we expect from you.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalContent doc={termsOfService} />;
}
