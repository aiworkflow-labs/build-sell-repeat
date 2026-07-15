import { cn } from "@/lib/utils";
import { demoIndustries } from "@/config/demo";

/**
 * Industry selector chips.
 *
 * Presentational and controlled: the parent owns the selection via `activeId`
 * and is notified through `onSelect`. It carries no state of its own (state
 * lives in the single `InteractiveDemo` client boundary that renders it), so
 * this stays a thin, reusable component. Mobile shows a single
 * horizontally-scrollable row; desktop centers the row.
 */
export function IndustrySelector({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ul
      aria-label="Choose an industry to preview"
      className={cn(
        // Mobile: single horizontally-scrollable row (no wrap), scrollbar hidden.
        "flex flex-nowrap gap-2 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        // Desktop: centered row, no scroll needed.
        "sm:justify-center sm:overflow-visible sm:px-0",
      )}
    >
      {demoIndustries.map((industry) => {
        const isActive = industry.id === activeId;
        return (
          <li key={industry.id} className="shrink-0">
            <button
              type="button"
              onClick={() => onSelect(industry.id)}
              aria-pressed={isActive}
              className={cn(
                "inline-flex cursor-pointer items-center whitespace-nowrap rounded-pill border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-stone-200 bg-surface text-stone-600 hover:border-stone-400 hover:text-ink",
              )}
            >
              {industry.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
