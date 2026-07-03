/** Branche reduceWave : persiste le contexte, exécute les effets (SQLite + outbox). */
import { reboundHours, reduceWave, type WaveEvt, type WaveFx } from '@lucide/shared';
import { addProof, closeWave, insertLapseEvent, insertWave, kvSet, saveRebound, saveWaveCtx } from '@/db/dao';
import { ulid } from '@/db/database';
import { useJourney } from '@/stores/journey';
import { useSession } from '@/stores/session';
import { reboundStats } from './useCounters';

export function useWave() {
  const { waveCtx, setWaveCtx } = useJourney();

  async function dispatch(evt: WaveEvt): Promise<WaveFx[]> {
    const { ctx, effects } = reduceWave(waveCtx, evt);
    setWaveCtx(ctx);
    await saveWaveCtx(ctx);
    for (const fx of effects) await runFx(fx, evt);
    return effects;
  }

  async function runFx(fx: WaveFx, evt: WaveEvt): Promise<void> {
    switch (fx.fx) {
      case 'OPEN_WAVE': await insertWave(fx.waveId, fx.via, new Date().toISOString()); break;
      case 'ADD_EVENT': await insertLapseEvent(fx.waveId, fx.occurredOn); break;
      case 'CLOSE_WAVE': await closeWave(fx.waveId, fx.reason); break;
      case 'LOCK_ENVELOPE_24H': await kvSet('last_lapse_at', new Date().toISOString()); break;
      case 'RECORD_REBOUND': {
        const on = evt.type === 'PROTOCOL_COMPLETED' ? useJourney.getState().waveCtx.lastOccurredOn : null;
        const tz = useSession.getState().profile?.tzAtStart ?? 'Europe/Paris';
        const hours = reboundHours(on ?? new Date().toISOString().slice(0, 10), tz, new Date(fx.completedAt));
        await saveRebound(fx.waveId, fx.completedAt, hours);
        const prev = await reboundStats();
        if (prev.best === null || hours < prev.best) await addProof('rebound_record', `Record de rebond : ${fmtHours(hours)}`);
        break;
      }
      // ARM_N3 / SEND_N3 : côté serveur (cron). PROPOSE_PROTOCOL / SHOW_* : effets d'UI gérés par l'appelant.
      case 'ARM_N3': case 'SEND_N3': case 'PROPOSE_PROTOCOL':
      case 'SHOW_REBOUND_SCREEN': case 'SHOW_SOFT_RESUME': case 'NEW_ENVELOPE_VERSION_ALLOWED': break;
    }
  }
  return { waveCtx, dispatch, newWaveId: ulid };
}
export function fmtHours(h: number): string {
  return h < 72 ? `${Math.round(h)} h` : `${Math.round(h / 24)} j`;
}
