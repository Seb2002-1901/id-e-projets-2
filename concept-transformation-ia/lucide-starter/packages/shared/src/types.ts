/**
 * LUCIDE — types de domaine (source de vérité TypeScript, gelée).
 * Règle : l'UI et le backend importent d'ICI. Aucune redéfinition locale.
 */

export type ULID = string;
export type ISODate = string;      // YYYY-MM-DD (date locale, tzAtStart)
export type ISODateTime = string;  // RFC3339

// ---------- Profil & objectif ----------
export type GoalMode = 'stop' | 'reduce';
export type Weekday = 1 | 2 | 3 | 4 | 5 | 6 | 7; // ISO : 1 = lundi
export type Slot = 'noon' | 'evening' | 'night';
export interface RiskSlot { dow: Weekday; slot: Slot }

export type TriggerSlug =
  | 'stress' | 'social' | 'boredom' | 'evening_habit'
  | 'conflict' | 'loneliness' | 'fatigue' | 'celebration';

export type ReasonSlug = 'sante' | 'sommeil' | 'argent' | 'controle' | 'proche' | 'autre';

export interface Profile {
  goal: GoalMode;
  reasons: ReasonSlug[];
  reasonOther?: string;            // 140 car. max
  triggers: TriggerSlug[];         // min 1
  riskSlots: RiskSlot[];
  allyName?: string;
  allyPhoneE164?: string;
  journeyStart: ISODate;
  tzAtStart: string;               // figé à la création (edge case fuseau)
}

// ---------- Enveloppe (BR-10/11) ----------
export type EnvelopeRules =
  | { zero: true }                                            // mode arrêt
  | { maxWeek: number; maxOccasion: number; offDays: Weekday[] }; // mode réduction

export interface Envelope { id: ULID; version: number; rules: EnvelopeRules; active: boolean; createdAt: ISODateTime }
export type EnvelopeLock = { locked: false } | { locked: true; reason: 'weekly' | 'post_lapse'; until: ISODateTime };

// ---------- Triage (LOCAL UNIQUEMENT — jamais synchronisé, décision C2) ----------
export interface TriageAnswers {
  auditC: [number, number, number];      // 0-4 chacun
  morningShakes: boolean;
  morningDrink: boolean;
  pastWithdrawal: boolean;
  dailyLongTerm: boolean;
  phq2: [number, number];                // 0-3 chacun
  sex: 'f' | 'm' | 'na';
}
export type TriageOutcome = 'green' | 'red';

// ---------- Boucle quotidienne ----------
export interface Checkin {
  id: ULID; date: ISODate;
  mood: 1 | 2 | 3 | 4 | 5;
  cravings: 0 | 1 | 2 | 3;
  withinEnvelope: boolean;
  drinksCount?: number;
  backfilled: boolean;                   // J-1 max (S1)
}

// ---------- SOS ----------
export type SosTool = 'curve' | 'voice' | 'breath' | 'ally' | 'walk';
export type PlaceSlug = 'maison' | 'bar' | 'chez_amis' | 'travail' | 'autre';
export interface SosSession {
  id: ULID; startedAt: ISODateTime;
  type: 'craving' | 'danger';
  durationS?: number;
  toolsUsed: SosTool[];
  outcome?: 'passed' | 'escalated' | 'abandoned';
  triggerChip?: TriggerSlug; placeChip?: PlaceSlug;
}

// ---------- Écart → Rebond (machine à états §6) ----------
export type WaveState =
  | 'IN_ENVELOPE' | 'WAVE_OPEN' | 'PROTOCOL_PENDING'
  | 'PROTOCOL_IN_PROGRESS' | 'REBOUND_RECORDED' | 'SOFT_RESUME';

export type LapseVia = 'checkin' | 'button' | 'silence';

export interface LapseWave {
  id: ULID; openedAt: ISODateTime; detectedVia: LapseVia;
  closedAt?: ISODateTime; closeReason?: 'rebound' | 'abandoned';
}
export interface LapseEvent { id: ULID; waveId: ULID; occurredOn: ISODate; drinksCount?: number }

export type WhoSlug = 'seul' | 'partenaire' | 'amis' | 'collegues';
export type EmotionSlug = 'stress' | 'ennui' | 'tristesse' | 'colere' | 'joie' | 'fatigue';
export type HelperSlug = 'partir_plus_tot' | 'un_plan' | 'en_parler' | 'rien_je_choisis';
export interface LapseContext { whereChip?: PlaceSlug; whoChip?: WhoSlug; emotionChip?: EmotionSlug; helperChip?: HelperSlug; freeText?: string }

export interface Rebound { waveId: ULID; protocolCompletedAt: ISODateTime; reboundHours: number; planId?: ULID }

// ---------- Plans si-alors ----------
export interface IfThenPlan {
  id: ULID; triggerLabel: string; ifText: string; thenText: string;
  version: number; active: boolean;
  source: 'onboarding' | 'weekly' | 'post_lapse';
  successCount: number;
}
export const MAX_ACTIVE_PLANS = 8;

// ---------- Coffre & preuves ----------
export interface VaultItem { id: ULID; kind: 'audio' | 'reason'; storageKey?: string; durationS?: number; milestoneLabel?: string; recordedAt: ISODateTime }
export type ProofKind = 'first_week' | 'craving_10' | 'rebound_record' | 'health_milestone' | 'started';
export interface Proof { id: ULID; kind: ProofKind; label: string; occurredAt: ISODateTime; payload?: Record<string, unknown> }

// ---------- Contenu (corpus embarqué) ----------
export type Evidence = 'green' | 'yellow' | 'white';
export type Arc = 'crossing' | 'rebuild' | 'plateau' | 'consolidate';
export interface SourceRef { authors: string; year: number; kind: string; summary3: string; notSaying: string }
export interface ContentCard {
  slug: string; dayIndex: number; arc: Arc;
  title: string;
  bodyMd: string;                        // blocs conditionnels {{#stop}} / {{#reduce}}
  evidence: Evidence; sourceRef: SourceRef; notSayingMd: string;
  action?: string; version: number;
}

// ---------- Bilan hebdomadaire (déterministe V1) ----------
export type Trend = 'up' | 'flat' | 'down';
export interface TriState { dimension: 'envelope' | 'cravings' | 'mood'; trend: Trend; phraseKey: string; evidence: Evidence }
export interface WeeklyReportPayload {
  weekStart: ISODate;
  dataSufficient: boolean;               // < 3 check-ins → false
  b1: { titleKey: string; slots: Record<string, string>; stats: { daysWithin: number; cravingsCrossed: number; checkins: number } };
  b2: TriState[];
  b3?: { factKey: string; slots: Record<string, string> };  // 1 max, toujours ⚪ prudent
  b4: { riskSlots: RiskSlot[]; plansToValidate: ULID[] };
  b5?: { proofId: ULID };
}

// ---------- Notifications (liste fermée CDC §7) ----------
export type NotifId = 'N1_daily_card' | 'N2_risk_slot' | 'N3_lapse_return' | 'N4_weekly' | 'N5_trial_end';
export const SERVER_PUSH: NotifId[] = ['N3_lapse_return', 'N4_weekly'];   // C4
export const LOCAL_SCHEDULED: NotifId[] = ['N1_daily_card', 'N2_risk_slot', 'N5_trial_end'];

// ---------- Abonnement ----------
export type SubStatus = 'trial' | 'active' | 'cancelled' | 'expired' | 'free';
export interface Subscription { status: SubStatus; trialEnd?: ISODateTime; renewsAt?: ISODateTime }

// ---------- Sync (outbox) ----------
export type OutboxKind = 'checkin' | 'sos' | 'wave' | 'lapse_event' | 'lapse_context' | 'protocol_completion' | 'plan' | 'proof' | 'prefs' | 'push_token';
export interface OutboxRow { id: ULID; kind: OutboxKind; payload: unknown; createdAt: ISODateTime; tries: number }
export interface SyncPushResponse { accepted: ULID[]; rejected: { id: ULID; reason: string }[] }
