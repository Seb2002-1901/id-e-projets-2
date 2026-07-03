/** Notifications LOCALES : N1 (carte du jour), N2 (créneaux à risque, ≤3/sem, 1/jour max), N5 (fin d'essai).
 *  N3/N4 = push serveur (cron n3-dispatch / weekly-report). Plafond BR-33 : N1+N2 ≤ 2/jour par construction. */
import * as Notifications from 'expo-notifications';
import type { RiskSlot } from '@lucide/shared';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, shouldPlaySound: false, shouldSetBadge: false,
    shouldShowBanner: true, shouldShowList: true,
  }),
});

export async function requestPermission(): Promise<boolean> {
  const s = await Notifications.requestPermissionsAsync();
  return s.granted || s.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
}

// --- N1 : carte du jour (quotidienne, heure choisie) ---
export async function scheduleDailyCard(hour: number, minute: number, title: string): Promise<void> {
  await Notifications.cancelScheduledNotificationAsync('n1').catch(() => undefined);
  await Notifications.scheduleNotificationAsync({
    identifier: 'n1',
    content: { title: 'Aujourd’hui en toi', body: title, sound: false },
    trigger: { type: Notifications.SchedulableTriggerInputTypes.DAILY, hour, minute },
  });
}

// --- N2 : rappel de créneau à risque (hebdo, 15 min avant, max 3/semaine, 1 max/jour) ---
const SLOT_TIME: Record<RiskSlot['slot'], { hour: number; minute: number }> = {
  noon: { hour: 11, minute: 45 }, evening: { hour: 17, minute: 45 }, night: { hour: 21, minute: 15 },
};
export async function scheduleRiskSlots(slots: RiskSlot[], planShort: string | null): Promise<number> {
  for (let i = 0; i < 3; i++) await Notifications.cancelScheduledNotificationAsync(`n2-${i}`).catch(() => undefined);
  const seenDays = new Set<number>();
  const picked = slots.filter((s) => (seenDays.has(s.dow) ? false : (seenDays.add(s.dow), true))).slice(0, 3);
  for (const [i, s] of picked.entries()) {
    const { hour, minute } = SLOT_TIME[s.slot];
    await Notifications.scheduleNotificationAsync({
      identifier: `n2-${i}`,
      content: {
        title: 'Ton créneau sensible approche',
        body: planShort ? `Ton plan : ${planShort}. Tu es prête.` : 'Relis ton si-alors. Tu es prête.',
        sound: false,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
        weekday: (s.dow % 7) + 1, // ISO lundi=1 → expo dimanche=1
        hour, minute,
      },
    });
  }
  return picked.length;
}

// --- N5 : fin d'essai (J6, honnête) ---
export async function scheduleTrialEnd(trialEnd: Date): Promise<void> {
  const fire = new Date(trialEnd.getTime() - 24 * 3600 * 1000);
  if (fire <= new Date()) return;
  await Notifications.scheduleNotificationAsync({
    identifier: 'n5',
    content: {
      title: 'Ton essai se termine demain',
      body: 'Sans action de ta part : version gratuite — le SOS reste à toi, pour toujours.',
      sound: false,
    },
    trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: fire },
  });
}
export async function cancelAll(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
