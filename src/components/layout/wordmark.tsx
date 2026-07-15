import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Brand wordmark. Preserves the deliberate periods in the name and links
 * home. Used in the navbar and footer.
 */
export function Wordmark({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "font-display text-lg font-extrabold tracking-tight text-ink",
        className,
      )}
    >
      Build.<span className="text-brand"> Sell.</span> Repeat.
    </Link>
  );
}
