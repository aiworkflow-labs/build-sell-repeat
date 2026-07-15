/**
 * Interactive Demo configuration.
 *
 * The industries that can be previewed in the demo section. Kept as data so
 * the selector and (later) the interactive preview stay config-driven — new
 * industries are added here without touching components.
 */
export type DemoIndustry = {
  id: string;
  label: string;
};

export const demoIndustries: DemoIndustry[] = [
  { id: "bakery", label: "Bakery" },
  { id: "boutique", label: "Boutique" },
  { id: "florist", label: "Florist" },
  { id: "gifts", label: "Gifts" },
  { id: "salon", label: "Salon" },
];

/** Industry shown by default. */
export const defaultIndustryId = demoIndustries[0].id;
