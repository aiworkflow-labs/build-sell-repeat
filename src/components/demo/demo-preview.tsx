/**
 * Static ordering-page preview for the demo phone (Milestone 4.1 polish).
 *
 * A believable, image-free ordering page — business header, category tabs,
 * realistic sample products with names + prices, and the "Order on WhatsApp"
 * bar. Presentation only (no state or interaction); interaction arrives in
 * 4.2. Mirrors the Hero mockup's visual language so the two feel like one
 * product. Sample content matches the default "Bakery" industry. Decorative,
 * so hidden from assistive tech.
 */
const products = [
  {
    name: "Chocolate Truffle Cake",
    note: "Bestseller · 500g",
    price: "₹899",
    tone: "from-brand/20 to-brand/5",
  },
  {
    name: "Red Velvet Jars",
    note: "Set of 2",
    price: "₹350",
    tone: "from-error/15 to-error/5",
  },
  {
    name: "Assorted Macarons",
    note: "Box of 6",
    price: "₹499",
    tone: "from-gold/25 to-gold/5",
  },
  {
    name: "Fudge Brownie Box",
    note: "Made to order",
    price: "₹420",
    tone: "from-stone-200 to-stone-100",
  },
];

const tabs = ["Popular", "Cakes", "Boxes"];

export function DemoPreview() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-paper">
      {/* Business header */}
      <div className="flex items-center gap-3 bg-surface px-4 pb-3 pt-4">
        <div className="size-11 rounded-full bg-gradient-to-br from-brand to-action" />
        <div>
          <div className="text-sm font-semibold text-ink">Sweet Crumb Bakery</div>
          <div className="text-xs text-stone-600">Fresh daily · Bengaluru</div>
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
      <div className="flex-1 space-y-2.5 p-4">
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
          <span className="text-xs opacity-90">2 items · ₹1,249</span>
        </div>
      </div>
    </div>
  );
}
