import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/layout/wordmark";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/config/navigation";

/**
 * Sticky site header. Server Component; only the mobile menu overlay is
 * client-side. Desktop shows the wordmark, primary links, and one CTA.
 * Under `md` the links collapse into the mobile navigation.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-paper/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Wordmark />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-stone-600 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href={siteConfig.cta.primaryHref}>
                {siteConfig.cta.primaryLabel}
              </Link>
            </Button>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
