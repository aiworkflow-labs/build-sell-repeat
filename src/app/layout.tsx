import type { Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "@/styles/globals.css";
import { defaultMetadata } from "@/config/metadata";
import { organizationJsonLd } from "@/config/structured-data";
import { SiteShell } from "@/components/layout/site-shell";

/** Body font. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Display font (temporary — self-hosted Satoshi may replace this later). */
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          // Site-wide organization schema for search engines.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
