/** Purge locale complète : SQLite supprimée, audio du coffre effacé, notifications annulées, stores réinitialisés. */
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { kvGet } from './dao';
import { resetDbHandle } from './database';
import { cancelAll } from '@/notifications/local';
import { useJourney } from '@/stores/journey';
import { useSession } from '@/stores/session';
import { initialCtx } from '@lucide/shared';

export async function purgeAllLocal(): Promise<void> {
  const audio = await kvGet('vault_audio_uri').catch(() => null);
  if (audio) await FileSystem.deleteAsync(audio, { idempotent: true }).catch(() => undefined);
  await cancelAll().catch(() => undefined);
  await resetDbHandle();
  await SQLite.deleteDatabaseAsync('lucide.db').catch(() => undefined);
  useSession.getState().reset();
  useJourney.getState().setWaveCtx(initialCtx);
  // TODO(LUC-48): quand le backend est branché → POST /delete-account (purge serveur ≤ 30 j).
}
