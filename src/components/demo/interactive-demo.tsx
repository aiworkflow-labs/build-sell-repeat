"use client";

import { useState, type ReactNode } from "react";
import { IndustrySelector } from "@/components/demo/industry-selector";
import { defaultIndustryId } from "@/config/demo";

export type DemoFrame = {
  id: string;
  node: ReactNode;
};

/**
 * The only Client Component in the demo section.
 *
 * It manages a single piece of state — the selected industry id — and swaps
 * which pre-rendered phone frame is shown. The frames themselves are rendered
 * on the server (see `DemoSection`) and passed in as a slot array, so the
 * ordering-page markup stays in Server Components and never re-renders on the
 * client; selecting a chip just toggles which frame is displayed, so the
 * update is instant. No backend, API, storage, URL state, or animation libs.
 */
export function InteractiveDemo({ frames }: { frames: DemoFrame[] }) {
  const [activeId, setActiveId] = useState(defaultIndustryId);
  const active = frames.find((frame) => frame.id === activeId) ?? frames[0];

  return (
    <>
      {/* Industry selector — bleeds to the screen edge on mobile so the row
          can scroll horizontally without an awkward inset. */}
      <div className="-mx-5 mt-8 sm:mx-0 sm:mt-10">
        <IndustrySelector activeId={activeId} onSelect={setActiveId} />
      </div>

      {/* Phone preview */}
      <div className="mt-12 sm:mt-14">{active.node}</div>
    </>
  );
}
