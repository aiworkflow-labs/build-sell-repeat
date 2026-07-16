import { cn } from "@/lib/utils";

/**
 * Reusable phone frame shell for the demo section. Renders the device chrome
 * (bezel + soft ambient shadow) and a scroll-safe screen area; `children`
 * become the screen content. In 4.2 the interactive ordering page will render
 * inside this same frame. Slightly larger and deeper than the Hero mockup so
 * it anchors the section, while reusing the same tokens.
 */
export function DemoPhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[400px]", className)}>
      {/* Ambient shadow for extra depth (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-2 top-8 rounded-[2.5rem] bg-ink/12 blur-2xl"
      />
      {/* Phone bezel */}
      <div className="relative rounded-[2.75rem] border border-stone-200 bg-surface p-3.5 shadow-[0_2px_4px_rgba(23,24,26,0.05),0_30px_70px_rgba(23,24,26,0.20)]">
        {/* Screen */}
        <div className="min-h-[560px] overflow-hidden rounded-[2.1rem] bg-paper ring-1 ring-stone-200/70">
          {children}
        </div>
      </div>
    </div>
  );
}
