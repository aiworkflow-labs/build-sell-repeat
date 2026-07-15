import { cn } from "@/lib/utils";

/**
 * Centered layout container with consistent responsive gutters.
 * Used by every section and shell region so horizontal rhythm stays
 * uniform across the site. Max width maps to our content width (72rem).
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
