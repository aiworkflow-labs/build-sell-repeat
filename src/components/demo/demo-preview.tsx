import type { DemoIndustry } from "@/config/demo";

/**
 * Static ordering-page preview for the demo phone.
 *
 * Presentational Server Component: renders a believable, image-free ordering
 * page purely from the given `industry` data (header, category tabs, product
 * cards with prices, and the "Order on WhatsApp" bar). No state or
 * interaction — the parent Client Component swaps which industry is shown.
 * Mirrors the Hero mockup's visual language. Decorative, so hidden from
 * assistive tech.
 */
export function DemoPreview({ industry }: { industry: DemoIndustry }) {
  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-paper">
      {/* Business header */}
      <div className="flex items-center gap-3 bg-surface px-4 pb-3 pt-4">
        <div className="size-11 rounded-full bg-gradient-to-br from-brand to-action" />
        <div>
          <div className="text-sm font-semibold text-ink">{industry.business}</div>
          <div className="text-xs text-stone-600">{industry.location}</div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-5 border-b border-stone-200 bg-surface px-4 text-xs font-medium">
        {industry.tabs.map((tab, i) => (
          <span
            key={tab}
            className={
              i === 0
                ? "border-b-2 border-brand pb-2.5 font-semibold text-ink"
                : "pb-2.5 text-stone-400"
            }
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Product cards */}
      <div className="flex-1 space-y-2.5 p-4">
        {industry.products.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-card border border-stone-200 bg-surface p-2.5 shadow-card"
          >
            <div className={`size-14 shrink-0 rounded-[10px] bg-gradient-to-br ${p.tone}`} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-ink">{p.name}</div>
              <div className="text-xs text-stone-400">{p.note}</div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-semibold text-ink">{p.price}</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-stone-100 text-base leading-none text-ink">
                +
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Order button */}
      <div className="p-4 pt-1">
        <div className="flex items-center justify-between rounded-pill bg-action px-5 py-3 text-white shadow-card">
          <span className="text-sm font-semibold">Order on WhatsApp</span>
          <span className="text-xs opacity-90">
            {industry.cart.items} · {industry.cart.total}
          </span>
        </div>
      </div>
    </div>
  );
}
