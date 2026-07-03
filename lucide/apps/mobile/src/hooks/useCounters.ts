import { daysWithinCumulative } from '@lucide/shared';
import { useCallback, useEffect, useState } from 'react';
import { allCheckins, listProofs, reboundList, sosStats } from '@/db/dao';
import type { Proof } from '@lucide/shared';

export interface Counters {
  within: number; total: number;
  lastRebound: number | null; bestRebound: number | null; prevRebound: number | null;
  cravingsCrossed: number; medianMin: number | null;
  proofs: Proof[];
}
export async function reboundStats(): Promise<{ last: number | null; best: number | null; prev: number | null }> {
  const list = await reboundList();
  if (!list.length) return { last: null, best: null, prev: null };
  const hours = list.map((r) => r.hours);
  return {
    last: hours[hours.length - 1] ?? null,
    best: Math.min(...hours),
    prev: hours.length > 1 ? hours[hours.length - 2] ?? null : null,
  };
}
export function useCounters(): { counters: Counters | null; refresh: () => void } {
  const [counters, setCounters] = useState<Counters | null>(null);
  const refresh = useCallback(() => {
    void (async () => {
      const [cks, rb, sos, proofs] = await Promise.all([allCheckins(), reboundStats(), sosStats(), listProofs()]);
      const { within, total } = daysWithinCumulative(cks);
      setCounters({
        within, total,
        lastRebound: rb.last, bestRebound: rb.best, prevRebound: rb.prev,
        cravingsCrossed: sos.crossed,
        medianMin: sos.medianS != null ? Math.round(sos.medianS / 60) : null,
        proofs,
      });
    })();
  }, []);
  useEffect(refresh, [refresh]);
  return { counters, refresh };
}
