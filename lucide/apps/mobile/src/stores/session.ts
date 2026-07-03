/** État de session (auth, abonnement, onboarding). Les DONNÉES vivent en SQLite. */
import { create } from 'zustand';
import type { GoalMode, Profile, SubStatus, TriageOutcome } from '@lucide/shared';

export interface OnboardingDraft {
  goal?: GoalMode; reasons: string[]; triggers: string[];
  riskSlots: { dow: number; slot: string }[];
  auditC: [number, number, number]; phys: { shakes: boolean; morning: boolean; withdrawal: boolean };
  phq2: [number, number];
  envelope?: { maxWeek: number; maxOccasion: number; offDays: number[] } | { zero: true };
  vaultRecorded: boolean;
}
const emptyDraft: OnboardingDraft = {
  reasons: [], triggers: [], riskSlots: [],
  auditC: [0, 0, 0], phys: { shakes: false, morning: false, withdrawal: false }, phq2: [0, 0],
  vaultRecorded: false,
};

interface SessionState {
  hydrated: boolean;
  triage: TriageOutcome | null;
  onboarded: boolean;
  profile: Profile | null;
  subStatus: SubStatus;
  draft: OnboardingDraft;
  setHydrated(v: { triage: TriageOutcome | null; onboarded: boolean; profile: Profile | null; subStatus: SubStatus }): void;
  setTriage(t: TriageOutcome): void;
  patchDraft(p: Partial<OnboardingDraft>): void;
  completeOnboarding(profile: Profile): void;
  setSubStatus(s: SubStatus): void;
}

export const useSession = create<SessionState>((set) => ({
  hydrated: false, triage: null, onboarded: false, profile: null, subStatus: 'free', draft: emptyDraft,
  setHydrated: (v) => set({ hydrated: true, ...v }),
  setTriage: (triage) => set({ triage }),
  patchDraft: (p) => set((s) => ({ draft: { ...s.draft, ...p } })),
  completeOnboarding: (profile) => set({ onboarded: true, profile, draft: emptyDraft }),
  setSubStatus: (subStatus) => set({ subStatus }),
}));
