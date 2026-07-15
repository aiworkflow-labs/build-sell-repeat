import { cn } from "@/lib/utils";
import { demoIndustries, defaultIndustryId } from "@/config/demo";

/**
 * Industry selector — static chips (Milestone 4.1).
 *
 * Renders the available demo industries as a row of chips. Presentation only:
 * no client state or interaction yet (selection behavior arrives in 4.2). The
 * `activeId` prop marks the visually-selected chip so the same component can
 * be reused once it becomes interactive.
 */
export function IndustrySelector({
  activeId = defaultIndustryId,
}: {
  activeId?: string;
}) {
  return (
    <ul
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
            <span
              className={cn(
                "inline-flex items-center whitespace-nowrap rounded-pill border px-4 py-2 text-sm font-medium",
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-stone-200 bg-surface text-stone-600",
              )}
            >
              {industry.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
