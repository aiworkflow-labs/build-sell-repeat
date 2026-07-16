import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/layout/wordmark";
import { siteConfig, whatsappHref } from "@/config/site";
import { ROUTES } from "@/lib/constants";

/**
 * Site footer. Server Component. Intentionally minimal — brand + one-line
 * description on the left, a short set of links (WhatsApp, Privacy, Terms) on
 * the right, and a copyright line below. All links stay config-driven.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200 bg-paper">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-14">
          {/* Brand + description */}
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-3 text-sm text-stone-600">
              Instagram ordering pages for small businesses.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stone-600 hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href={ROUTES.privacy}
                  className="text-stone-600 hover:text-ink"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.terms}
                  className="text-stone-600 hover:text-ink"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-200 py-6">
          <p className="text-sm text-stone-600">
            &copy; {year} {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
