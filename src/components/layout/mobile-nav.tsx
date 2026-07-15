"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/layout/wordmark";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/config/navigation";
import { whatsappLink } from "@/lib/utils";

/**
 * Mobile navigation: hamburger trigger + full-screen overlay menu.
 * This is the only Client Component in the shell (it needs open state,
 * scroll-lock, and keyboard handling). Shown under the `md` breakpoint.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll, focus the close button, and wire Escape-to-close.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="inline-flex size-11 items-center justify-center rounded-btn text-ink hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="flex h-16 shrink-0 items-center justify-between px-5">
            <Wordmark href="/" />
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-btn text-ink hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-5 pt-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-btn px-2 py-3 text-xl font-medium text-ink hover:bg-stone-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 border-t border-stone-200 p-5">
            <Button asChild size="lg" className="w-full">
              <Link href={siteConfig.cta.primaryHref} onClick={close}>
                {siteConfig.cta.primaryLabel}
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a
                href={whatsappLink(
                  siteConfig.contact.whatsappNumber,
                  siteConfig.contact.whatsappMessage,
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
