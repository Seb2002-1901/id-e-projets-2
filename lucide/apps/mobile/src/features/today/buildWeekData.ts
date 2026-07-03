import type { WeekData } from '@lucide/shared';
import { checkinsBetween, reboundList } from '@/db/dao';
import { getDb } from '@/db/database';
import { dayOfJourney, todayIso } from '@/stores/journey';
import { useSession } from '@/stores/session';

function shiftIso(iso: string, days: number): string {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
function mondayOf(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  const dow = d.getDay() === 0 ? 7 : d.getDay();
  return shiftIso(iso, -(dow - 1));
}

export async function buildWeekData(): Promise<WeekData> {
  const profile = useSession.getState().profile;
  const today = todayIso();
  const weekStart = mondayOf(today);
  const prevStart = shiftIso(weekStart, -7);
  const [checkins, prevCheckins, rebounds] = await Promise.all([
    checkinsBetween(weekStart, today),
    checkinsBetween(prevStart, shiftIso(weekStart, -1)),
    reboundList(),
  ]);
  const db = await getDb();
  const sosRows = await db.getAllAsync<Record<string, unknown>>(
    "select * from sos_sessions where started_at >= ? order by started_at asc", `${weekStart}T00:00:00`);
  const reboundThisWeek = rebounds.filter((r) => r.at >= `${weekStart}T00:00:00`).at(-1)?.hours ?? null;
  return {
    weekStart,
    weekIndex: Math.max(1, Math.ceil(dayOfJourney(profile?.journeyStart ?? today) / 7)),
    checkins, prevCheckins,
    sosSessions: sosRows.map((r) => ({
      id: r.id as string, startedAt: r.started_at as string,
      type: r.type as 'craving' | 'danger',
      durationS: (r.duration_s as number | null) ?? undefined,
      toolsUsed: JSON.parse((r.tools_used as string) ?? '[]') as never[],
      outcome: (r.outcome as 'passed' | null) ?? undefined,
      triggerChip: (r.trigger_chip as never) ?? undefined,
      placeChip: (r.place_chip as never) ?? undefined,
    })),
    reboundHoursThisWeek: reboundThisWeek,
    declaredRiskSlots: profile?.riskSlots ?? [],
    plansToValidate: [], proofOfWeekId: null,
  };
}
