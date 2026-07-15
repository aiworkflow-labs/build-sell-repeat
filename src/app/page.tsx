/**
 * Placeholder route. Phase 1 is foundation-only — no UI, pages, or
 * sections are built yet. The homepage will be composed in Phase 2.
 */
export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-8 text-center">
      <div>
        <p className="font-display text-sm font-semibold tracking-tight text-brand">
          Build. Sell. Repeat.
        </p>
        <h1 className="mt-2 text-xl font-bold text-ink">
          Foundation ready — Phase 1 complete.
        </h1>
        <p className="mt-1 text-sm text-stone-600">
          Design system, tokens, and configuration are in place.
        </p>
      </div>
    </main>
  );
}
