/**
 * Interactive Demo configuration (single source of truth).
 *
 * All demo content lives here so the UI stays fully data-driven: adding an
 * industry or editing a product/price never requires touching a component.
 * Each industry carries everything the phone preview needs — business
 * identity, category tabs, products, and a cart summary. `tone` values are
 * Tailwind gradient class fragments (design-system tokens only) used for the
 * product thumbnail.
 */
export type DemoProduct = {
  name: string;
  note: string;
  price: string;
  tone: string;
};

export type DemoIndustry = {
  id: string;
  /** Chip label. */
  label: string;
  /** Business name shown in the preview header. */
  business: string;
  /** Header subtitle (offering · city). */
  location: string;
  /** Category tabs; the first is shown active. */
  tabs: string[];
  products: DemoProduct[];
  /** Static cart summary shown on the order bar. */
  cart: {
    items: string;
    total: string;
  };
};

export const demoIndustries: DemoIndustry[] = [
  {
    id: "bakery",
    label: "Bakery",
    business: "Sweet Crumb Bakery",
    location: "Fresh daily · Bengaluru",
    tabs: ["Popular", "Cakes", "Boxes"],
    products: [
      { name: "Chocolate Truffle Cake", note: "Bestseller · 500g", price: "₹899", tone: "from-brand/20 to-brand/5" },
      { name: "Red Velvet Jars", note: "Set of 2", price: "₹350", tone: "from-error/15 to-error/5" },
      { name: "Assorted Macarons", note: "Box of 6", price: "₹499", tone: "from-gold/25 to-gold/5" },
      { name: "Fudge Brownie Box", note: "Made to order", price: "₹420", tone: "from-stone-200 to-stone-100" },
    ],
    cart: { items: "2 items", total: "₹1,249" },
  },
  {
    id: "florist",
    label: "Florist",
    business: "Petal & Stem",
    location: "Same-day delivery · Delhi",
    tabs: ["Bouquets", "Plants", "Gifts"],
    products: [
      { name: "Rose Hand Bouquet", note: "Bestseller", price: "₹749", tone: "from-error/15 to-error/5" },
      { name: "Seasonal Tulips", note: "Bunch of 10", price: "₹599", tone: "from-gold/25 to-gold/5" },
      { name: "Peace Lily Plant", note: "Indoor", price: "₹450", tone: "from-action/20 to-action/5" },
      { name: "Orchid Gift Box", note: "Premium", price: "₹1,200", tone: "from-brand/20 to-brand/5" },
    ],
    cart: { items: "2 items", total: "₹1,349" },
  },
  {
    id: "boutique",
    label: "Boutique",
    business: "Indie Thread",
    location: "New drop · Mumbai",
    tabs: ["New In", "Ethnic", "Sale"],
    products: [
      { name: "Handloom Kurta", note: "New in", price: "₹1,299", tone: "from-brand/20 to-brand/5" },
      { name: "Block-print Scarf", note: "Bestseller", price: "₹499", tone: "from-gold/25 to-gold/5" },
      { name: "Silk Dupatta", note: "Limited", price: "₹899", tone: "from-error/15 to-error/5" },
      { name: "Cotton Tote Bag", note: "Everyday", price: "₹349", tone: "from-stone-200 to-stone-100" },
    ],
    cart: { items: "2 items", total: "₹1,798" },
  },
  {
    id: "salon",
    label: "Salon",
    business: "Gloss Studio",
    location: "By appointment · Pune",
    tabs: ["Popular", "Hair", "Skin"],
    products: [
      { name: "Haircut & Style", note: "45 min", price: "₹600", tone: "from-action/20 to-action/5" },
      { name: "Root Touch-up", note: "Colour", price: "₹1,200", tone: "from-brand/20 to-brand/5" },
      { name: "Classic Facial", note: "60 min", price: "₹900", tone: "from-gold/25 to-gold/5" },
      { name: "Gel Manicure", note: "Add-on", price: "₹550", tone: "from-info/15 to-info/5" },
    ],
    cart: { items: "2 items", total: "₹1,500" },
  },
  {
    id: "gifts",
    label: "Gifts",
    business: "The Gift Loft",
    location: "Custom hampers · Jaipur",
    tabs: ["Popular", "Hampers", "Custom"],
    products: [
      { name: "Celebration Hamper", note: "Bestseller", price: "₹1,499", tone: "from-gold/25 to-gold/5" },
      { name: "Scented Candle Set", note: "Set of 3", price: "₹699", tone: "from-brand/20 to-brand/5" },
      { name: "Personalised Mug", note: "Custom", price: "₹399", tone: "from-info/15 to-info/5" },
      { name: "Chocolate Gift Box", note: "Assorted", price: "₹599", tone: "from-error/15 to-error/5" },
    ],
    cart: { items: "2 items", total: "₹2,098" },
  },
];

/** Industry shown by default. */
export const defaultIndustryId = demoIndustries[0].id;
