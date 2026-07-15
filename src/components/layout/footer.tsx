import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/layout/wordmark";
import { siteConfig } from "@/config/site";
import { footerNav, legalNav } from "@/config/navigation";
import { whatsappLink } from "@/lib/utils";

/**
 * Site footer. Server Component. Navigation columns + contact + legal are
 * all config-driven. No marketing copy — structural shell only.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200 bg-paper">
      <Container>
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + primary actions */}
          <div className="flex flex-col gap-4">
            <Wordmark />
            <div className="flex flex-col gap-2">
              <Button asChild size="sm" className="w-fit">
                <Link href={siteConfig.cta.primaryHref}>
                  {siteConfig.cta.primaryLabel}
                </Link>
              </Button>
              <a
                href={whatsappLink(
                  siteConfig.contact.whatsappNumber,
                  siteConfig.contact.whatsappMessage,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-stone-600 hover:text-ink"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {footerNav.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-sm font-semibold text-ink">{column.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-stone-600 hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-stone-600 hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-stone-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-600">
            &copy; {year} {siteConfig.name}
          </p>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-stone-600 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-sm text-stone-600">Made in India</p>
        </div>
      </Container>
    </footer>
  );
}
