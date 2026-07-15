import { MessageCircle } from "lucide-react";

/**
 * Hero phone mockup.
 *
 * An image-free, CSS-only representation of a real ordering page: business
 * header, category tabs, product cards with names + prices, and the
 * "Order on WhatsApp" button, plus a small floating order chip for depth.
 * Purely illustrative (no functionality), so it stays hidden from assistive
 * tech. Neutral sample content keeps the brand industry-agnostic.
 */
const products = [
  { name: "Signature Gift Box", note: "Best seller", price: "₹899", tone: "from-gold/25 to-gold/5" },
  { name: "Classic Favourite", note: "Made to order", price: "₹450", tone: "from-brand/20 to-brand/5" },
  { name: "Weekend Special", note: "Limited", price: "₹650", tone: "from-stone-200 to-stone-100" },
];

const tabs = ["Popular", "Boxes", "Gifts"];

export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[340px]">
      {/* Phone */}
      <div className="rounded-[2.5rem] border border-stone-200 bg-surface p-3 shadow-float">
        {/* Screen */}
        <div className="overflow-hidden rounded-[1.85rem] bg-paper">
          {/* Business header */}
          <div className="flex items-center gap-3 bg-surface px-4 pb-3 pt-4">
            <div className="size-10 rounded-full bg-gradient-to-br from-brand to-action" />
            <div>
              <div className="text-sm font-semibold text-ink">Rosewood Studio</div>
              <div className="text-xs text-stone-600">Made to order · Mumbai</div>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-5 border-b border-stone-200 bg-surface px-4 text-xs font-medium">
            {tabs.map((tab, i) => (
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
          <div className="space-y-2.5 p-4">
            {products.map((p) => (
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
              <span className="text-xs opacity-90">2 items · ₹1,349</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating order chip — adds depth (desktop only to avoid mobile overflow) */}
      <div className="absolute -right-4 top-24 hidden items-center gap-2 rounded-2xl border border-stone-200 bg-surface px-3 py-2 shadow-float sm:flex">
        <span className="flex size-6 items-center justify-center rounded-full bg-action text-white">
          <MessageCircle className="size-3.5" />
        </span>
        <span className="text-xs font-semibold text-ink">New order received</span>
      </div>
    </div>
  );
}
