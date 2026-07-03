/** N1 (carte du jour) + N5 (fin d'essai) : locales planifiées. Plafond & silence gérés par la planification. */
import * as Notifications from 'expo-notifications';

export async function requestPermission(): Promise<boolean> {
  const s = await Notifications.requestPermissionsAsync();
  return s.granted || s.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
}
export async function scheduleDailyCard(hour: number, minute: number, title: string): Promise<void> {
  await Notifications.cancelScheduledNotificationAsync('n1').catch(() => undefined);
  await Notifications.scheduleNotificationAsync({
    identifier: 'n1',
    content: { title: 'Aujourd’hui en toi', body: title, sound: false },
    trigger: { type: Notifications.SchedulableTriggerInputTypes.DAILY, hour, minute },
  });
}
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
