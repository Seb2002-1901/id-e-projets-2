import { describe, expect, it } from 'vitest';
import { initialCtx, reduceWave, type WaveCtx, type WaveEvt } from '../src/rules/stateMachine';

const lapse = (at: string, on: string, id: string): WaveEvt =>
  ({ type: 'LAPSE_DECLARED', via: 'checkin', at, occurredOn: on, newWaveId: id });
const fxs = (r: { effects: { fx: string }[] }) => r.effects.map((e) => e.fx);

function completedProtocol(from: WaveCtx) {
  let r = reduceWave(from, { type: 'PROTOCOL_STARTED' });
  for (const s of [1, 2, 3] as const) r = reduceWave(r.ctx, { type: 'PROTOCOL_STEP_DONE', step: s });
  return reduceWave(r.ctx, { type: 'PROTOCOL_COMPLETED', at: '2026-01-11T22:00:00Z', planChanged: true });
}

describe('T1-T3 : ouverture et groupage de vague', () => {
  it('T1 : effets exacts dans l’ordre', () => {
    const r = reduceWave(initialCtx, lapse('2026-01-10T21:00:00Z', '2026-01-10', 'w1'));
    expect(r.ctx.state).toBe('WAVE_OPEN');
    expect(fxs(r)).toEqual(['OPEN_WAVE', 'ADD_EVENT', 'LOCK_ENVELOPE_24H', 'PROPOSE_PROTOCOL']);
  });
  it('T2 : ≤72 h → même vague (I1 : jamais deux vagues)', () => {
    const a = reduceWave(initialCtx, lapse('2026-01-10T21:00:00Z', '2026-01-10', 'w1'));
    const b = reduceWave(a.ctx, lapse('2026-01-12T21:00:00Z', '2026-01-12', 'w2'));
    expect(b.ctx.waveId).toBe('w1');
    expect(fxs(b)).toEqual(['ADD_EVENT']);
  });
  it('T3 : >72 h → clôture abandoned + nouvelle vague', () => {
    const a = reduceWave(initialCtx, lapse('2026-01-10T21:00:00Z', '2026-01-10', 'w1'));
    const b = reduceWave(a.ctx, lapse('2026-01-16T06:00:00Z', '2026-01-16', 'w3'));
    expect(b.ctx.waveId).toBe('w3');
    expect(b.effects[0]).toEqual({ fx: 'CLOSE_WAVE', waveId: 'w1', reason: 'abandoned' });
  });
});

describe('T4-T5 : report et relance unique (BR-20/C3)', () => {
  it('deferred arme N3 ; le timer envoie UNE fois (I2)', () => {
    const a = reduceWave(initialCtx, lapse('2026-01-10T21:00:00Z', '2026-01-10', 'w1'));
    const d = reduceWave(a.ctx, { type: 'PROTOCOL_DEFERRED' });
    expect(fxs(d)).toEqual(['ARM_N3']);
    const n1 = reduceWave(d.ctx, { type: 'TIMER_N3', at: 't1' });
    expect(fxs(n1)).toEqual(['SEND_N3']);
    const n2 = reduceWave(n1.ctx, { type: 'TIMER_N3', at: 't2' });
    expect(n2.effects).toHaveLength(0);
  });
  it('C3 : timer sur protocole déjà complété → rien', () => {
    const a = reduceWave(initialCtx, lapse('2026-01-10T21:00:00Z', '2026-01-10', 'w1'));
    const done = completedProtocol(a.ctx);
    const n = reduceWave(done.ctx, { type: 'TIMER_N3', at: 't' });
    expect(n.effects).toHaveLength(0);
  });
});

describe('T6-T9 : protocole → rebond', () => {
  it('I3 : COMPLETED refusé si étapes incomplètes', () => {
    const a = reduceWave(initialCtx, lapse('2026-01-10T21:00:00Z', '2026-01-10', 'w1'));
    const s = reduceWave(a.ctx, { type: 'PROTOCOL_STARTED' });
    const bad = reduceWave(s.ctx, { type: 'PROTOCOL_COMPLETED', at: 'z', planChanged: false });
    expect(bad.effects).toHaveLength(0);
  });
  it('happy path : rebond enregistré puis retour état initial', () => {
    const a = reduceWave(initialCtx, lapse('2026-01-10T21:00:00Z', '2026-01-10', 'w1'));
    const done = completedProtocol(a.ctx);
    expect(done.ctx.state).toBe('REBOUND_RECORDED');
    expect(fxs(done)).toEqual(['RECORD_REBOUND', 'SHOW_REBOUND_SCREEN']);
    const back = reduceWave(done.ctx, { type: 'ACK_REBOUND' });
    expect(back.ctx).toEqual(initialCtx);
  });
  it('T7 : abandon en cours → PENDING, réponses conservées, N3 réarmée une seule fois', () => {
    const a = reduceWave(initialCtx, lapse('2026-01-10T21:00:00Z', '2026-01-10', 'w1'));
    const s = reduceWave(a.ctx, { type: 'PROTOCOL_STARTED' });
    const s1 = reduceWave(s.ctx, { type: 'PROTOCOL_STEP_DONE', step: 1 });
    const ab = reduceWave(s1.ctx, { type: 'PROTOCOL_ABANDONED' });
    expect(ab.ctx.state).toBe('PROTOCOL_PENDING');
    expect(ab.ctx.protocolStep).toBe(1);
  });
});

describe('T10-T12 : silence et reprise douce', () => {
  it('I4 : SOFT_RESUME sort toujours vers IN_ENVELOPE ; adjust lève le verrou', () => {
    const a = reduceWave(initialCtx, lapse('2026-02-01T21:00:00Z', '2026-02-01', 'w9'));
    const d = reduceWave(a.ctx, { type: 'PROTOCOL_DEFERRED' });
    const s7 = reduceWave(d.ctx, { type: 'SILENCE_7D' });
    expect(s7.ctx.state).toBe('SOFT_RESUME');
    const keep = reduceWave(s7.ctx, { type: 'RESUME', choice: 'keep' });
    expect(keep.ctx.state).toBe('IN_ENVELOPE');
    const adj = reduceWave(s7.ctx, { type: 'RESUME', choice: 'adjust' });
    expect(fxs(adj)).toContain('NEW_ENVELOPE_VERSION_ALLOWED');
  });
  it('événements hors état → noop strict', () => {
    expect(reduceWave(initialCtx, { type: 'TIMER_N3', at: 't' }).effects).toHaveLength(0);
    expect(reduceWave(initialCtx, { type: 'SILENCE_7D' }).effects).toHaveLength(0);
    expect(reduceWave(initialCtx, { type: 'ACK_REBOUND' }).effects).toHaveLength(0);
  });
});
