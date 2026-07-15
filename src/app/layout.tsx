import { Geist, Inter } from "next/font/google";
import "@/styles/globals.css";
import { defaultMetadata } from "@/config/metadata";
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
