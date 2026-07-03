/**
 * LUCIDE — machine à états écart→rebond (implémentation normative des transitions T1-T12).
 * Reducer PUR : (contexte, événement) → { contexte', effets[] }.
 * Le client ET le serveur exécutent CE fichier — aucune autre implémentation autorisée.
 */
import type { ISODate, ISODateTime, LapseVia, ULID, WaveState } from '../types';
import { belongsToWave } from './rules';

export interface WaveCtx {
  state: WaveState;
  waveId: ULID | null;
  lastEventAt: ISODateTime | null;      // horodatage de déclaration du dernier écart
  lastOccurredOn: ISODate | null;
  n3Sent: boolean;
  protocolStep: 0 | 1 | 2 | 3;
}

export const initialCtx: WaveCtx = {
  state: 'IN_ENVELOPE', waveId: null, lastEventAt: null,
  lastOccurredOn: null, n3Sent: false, protocolStep: 0,
};

export type WaveEvt =
  | { type: 'LAPSE_DECLARED'; via: LapseVia; at: ISODateTime; occurredOn: ISODate; newWaveId: ULID }
  | { type: 'PROTOCOL_DEFERRED' }
  | { type: 'TIMER_N3'; at: ISODateTime }               // cron serveur, +24 h ±2 h, fenêtre 10-20 h locale
  | { type: 'PROTOCOL_STARTED' }
  | { type: 'PROTOCOL_STEP_DONE'; step: 1 | 2 | 3 }
  | { type: 'PROTOCOL_ABANDONED' }                      // app fermée > 30 min à l'étape 1-2
  | { type: 'PROTOCOL_COMPLETED'; at: ISODateTime; planChanged: boolean }
  | { type: 'SILENCE_7D' }
  | { type: 'RESUME'; choice: 'keep' | 'adjust' }
  | { type: 'ACK_REBOUND' };                            // T9 : retour IN_ENVELOPE après affichage

export type WaveFx =
  | { fx: 'OPEN_WAVE'; waveId: ULID; via: LapseVia }
  | { fx: 'ADD_EVENT'; waveId: ULID; occurredOn: ISODate }
  | { fx: 'CLOSE_WAVE'; waveId: ULID; reason: 'abandoned' }
  | { fx: 'LOCK_ENVELOPE_24H' }
  | { fx: 'PROPOSE_PROTOCOL' }
  | { fx: 'ARM_N3'; waveId: ULID }                      // le serveur planifie ; garde C3 au tir
  | { fx: 'SEND_N3' }                                   // émis UNE fois max par vague (BR-20)
  | { fx: 'RECORD_REBOUND'; waveId: ULID; completedAt: ISODateTime; planChanged: boolean }
  | { fx: 'SHOW_REBOUND_SCREEN' }
  | { fx: 'SHOW_SOFT_RESUME' }
  | { fx: 'NEW_ENVELOPE_VERSION_ALLOWED' };             // T11 adjust : verrou levé « à froid »

export function reduceWave(ctx: WaveCtx, evt: WaveEvt): { ctx: WaveCtx; effects: WaveFx[] } {
  switch (evt.type) {
    case 'LAPSE_DECLARED': {
      // T2 : même vague si ≤ 72 h
      if ((ctx.state === 'WAVE_OPEN' || ctx.state === 'PROTOCOL_PENDING') &&
          ctx.lastEventAt && belongsToWave(ctx.lastEventAt, evt.at) && ctx.waveId) {
        return {
          ctx: { ...ctx, lastEventAt: evt.at, lastOccurredOn: evt.occurredOn },
          effects: [{ fx: 'ADD_EVENT', waveId: ctx.waveId, occurredOn: evt.occurredOn }],
        };
      }
      const effects: WaveFx[] = [];
      // T3 : > 72 h → l'ancienne vague se clôt sans rebond
      if (ctx.waveId && ctx.state !== 'IN_ENVELOPE' && ctx.state !== 'REBOUND_RECORDED') {
        effects.push({ fx: 'CLOSE_WAVE', waveId: ctx.waveId, reason: 'abandoned' });
      }
      // T1 : nouvelle vague
      effects.push(
        { fx: 'OPEN_WAVE', waveId: evt.newWaveId, via: evt.via },
        { fx: 'ADD_EVENT', waveId: evt.newWaveId, occurredOn: evt.occurredOn },
        { fx: 'LOCK_ENVELOPE_24H' },
        { fx: 'PROPOSE_PROTOCOL' },
      );
      return {
        ctx: { state: 'WAVE_OPEN', waveId: evt.newWaveId, lastEventAt: evt.at,
               lastOccurredOn: evt.occurredOn, n3Sent: false, protocolStep: 0 },
        effects,
      };
    }

    case 'PROTOCOL_DEFERRED': // T4
      if (ctx.state !== 'WAVE_OPEN' || !ctx.waveId) return noop(ctx);
      return { ctx: { ...ctx, state: 'PROTOCOL_PENDING' }, effects: [{ fx: 'ARM_N3', waveId: ctx.waveId }] };

    case 'TIMER_N3': // T5 — garde C3 : protocole non complété ; BR-20 : une seule fois
      if (ctx.state !== 'PROTOCOL_PENDING' || ctx.n3Sent) return noop(ctx);
      return { ctx: { ...ctx, n3Sent: true }, effects: [{ fx: 'SEND_N3' }] };

    case 'PROTOCOL_STARTED': // T6
      if (ctx.state !== 'WAVE_OPEN' && ctx.state !== 'PROTOCOL_PENDING') return noop(ctx);
      return { ctx: { ...ctx, state: 'PROTOCOL_IN_PROGRESS', protocolStep: 0 }, effects: [] };

    case 'PROTOCOL_STEP_DONE':
      if (ctx.state !== 'PROTOCOL_IN_PROGRESS') return noop(ctx);
      return { ctx: { ...ctx, protocolStep: evt.step }, effects: [] };

    case 'PROTOCOL_ABANDONED': // T7 — réponses conservées
      if (ctx.state !== 'PROTOCOL_IN_PROGRESS') return noop(ctx);
      return { ctx: { ...ctx, state: 'PROTOCOL_PENDING' }, effects: ctx.n3Sent || !ctx.waveId ? [] : [{ fx: 'ARM_N3', waveId: ctx.waveId }] };

    case 'PROTOCOL_COMPLETED': { // T8
      if (ctx.state !== 'PROTOCOL_IN_PROGRESS' || ctx.protocolStep < 3 || !ctx.waveId) return noop(ctx);
      return {
        ctx: { ...ctx, state: 'REBOUND_RECORDED' },
        effects: [
          { fx: 'RECORD_REBOUND', waveId: ctx.waveId, completedAt: evt.at, planChanged: evt.planChanged },
          { fx: 'SHOW_REBOUND_SCREEN' },
        ],
      };
    }

    case 'ACK_REBOUND': // T9
      if (ctx.state !== 'REBOUND_RECORDED') return noop(ctx);
      return { ctx: { ...initialCtx }, effects: [] };

    case 'SILENCE_7D': // T10
      if (ctx.state !== 'PROTOCOL_PENDING') return noop(ctx);
      return { ctx: { ...ctx, state: 'SOFT_RESUME' }, effects: [{ fx: 'SHOW_SOFT_RESUME' }] };

    case 'RESUME': { // T11 — vague clôturée abandoned ; cumul intact (BR-13)
      if (ctx.state !== 'SOFT_RESUME') return noop(ctx);
      const effects: WaveFx[] = ctx.waveId ? [{ fx: 'CLOSE_WAVE', waveId: ctx.waveId, reason: 'abandoned' }] : [];
      if (evt.choice === 'adjust') effects.push({ fx: 'NEW_ENVELOPE_VERSION_ALLOWED' });
      return { ctx: { ...initialCtx }, effects };
    }
  }
}

const noop = (ctx: WaveCtx) => ({ ctx, effects: [] as WaveFx[] });

/** Invariants (suite de tests obligatoire, LUC-32) :
 * I1 jamais 2 vagues ouvertes · I2 jamais 2 SEND_N3 par vague · I3 REBOUND exige step=3
 * I4 tout chemin sort de SOFT_RESUME vers IN_ENVELOPE · I5 aucun effet réseau dans ce fichier. */
