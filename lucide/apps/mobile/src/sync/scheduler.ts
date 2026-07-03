/** Flush de l'outbox : à l'ouverture, au foreground, toutes les 15 min. Jamais depuis le module SOS. */
import { AppState } from 'react-native';
import { outboxAck, outboxBatch, outboxFail } from '@/db/dao';
import { makeTransport } from './transport';

const transport = makeTransport();
let timer: ReturnType<typeof setInterval> | null = null;
let running = false;

export async function flushOutbox(): Promise<void> {
  if (running) return;
  running = true;
  try {
    const batch = await outboxBatch(100);
    if (batch.length) {
      const { accepted, rejected } = await transport.push(batch);
      await outboxAck(accepted);
      await outboxFail(rejected);
    }
  } catch {
    await outboxFail((await outboxBatch(100)).map((b) => b.id));
  } finally {
    running = false;
  }
}

export function startSyncScheduler(): () => void {
  void flushOutbox();
  const sub = AppState.addEventListener('change', (s) => { if (s === 'active') void flushOutbox(); });
  timer = setInterval(() => void flushOutbox(), 15 * 60 * 1000);
  return () => { sub.remove(); if (timer) clearInterval(timer); };
}
