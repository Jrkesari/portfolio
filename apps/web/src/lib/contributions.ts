import { contributions } from "@jrk/content";
import { useEffect, useState } from "react";

async function fetchTotals(url: string): Promise<Record<string, number>> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(String(res.status));
  const data = (await res.json()) as { totals?: Record<string, number> };
  return data.totals ?? {};
}

async function fetchContributions(): Promise<Record<number, number>> {
  // Live from api/contributions.ts (CDN-cached for an hour); if that's down, or in
  // `vite dev` where there are no functions, the snapshot written at build time by
  // scripts/contributions.ts. Either way, no third-party request from the browser.
  const totals = await fetchTotals("/api/contributions").catch(() => fetchTotals("/contributions.json"));
  const out: Record<number, number> = { ...contributions };
  for (const [y, n] of Object.entries(totals)) out[Number(y)] = n;
  return out;
}

/** GitHub contributions per year: the snapshot in content, then live once `when` is true. */
export function useContributions(when: boolean): Record<number, number> {
  const [counts, setCounts] = useState(contributions);
  useEffect(() => {
    if (!when) return;
    let live = true;
    fetchContributions().then(
      (c) => live && setCounts(c),
      () => {},
    );
    return () => {
      live = false;
    };
  }, [when]);
  return counts;
}
