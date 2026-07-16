"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/layout/wordmark";
import { siteConfig, whatsappHref } from "@/config/site";
import { mainNav } from "@/config/navigation";

/**
 * Mobile navigation: hamburger trigger + full-screen overlay menu.
 * This is the only Client Component in the shell (it needs open state,
 * scroll-lock, and keyboard handling). Shown under the `md` breakpoint.
 *
 * The overlay is rendered through a portal to `document.body`. The sticky
 * header uses `backdrop-blur`, and a `backdrop-filter` makes an element the
 * containing block for its `position: fixed` descendants — which would pin the
 * overlay to the 64px header instead of the viewport. Portaling to the body
 * escapes that containing block so `fixed inset-0` covers the whole screen.
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

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-paper"
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

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-5">
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
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                {siteConfig.cta.primaryLabel}
              </a>
            </Button>
          </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
