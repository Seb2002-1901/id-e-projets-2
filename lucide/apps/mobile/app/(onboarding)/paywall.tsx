import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import type { Profile } from '@lucide/shared';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { S } from '@/content/strings';
import { track } from '@/analytics/analytics';
import { todayIso } from '@/stores/journey';
import { persistProfile, persistSub } from '@/stores/persist';
import { kvSet } from '@/db/dao';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

export default function Paywall() {
  const { draft, completeOnboarding, setSubStatus } = useSession();
  const t = useTheme();

  async function finish(sub: 'trial' | 'free') {
    const profile: Profile = {
      goal: draft.goal ?? 'reduce',
      reasons: draft.reasons as Profile['reasons'],
      triggers: draft.triggers as Profile['triggers'],
      riskSlots: draft.riskSlots as Profile['riskSlots'],
      journeyStart: todayIso(),
      tzAtStart: Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Europe/Paris',
    };
    await persistProfile(profile);
    await kvSet('envelope', JSON.stringify(draft.envelope ?? { zero: true }));
    await persistSub(sub);
    setSubStatus(sub);
    completeOnboarding(profile);
    track(sub === 'trial' ? 'trial_started' : 'paywall_dismissed_to_free');
    track('onboarding_completed');
    router.replace('/(tabs)/today');
  }

  return (
    <Ecran>
      <Titre>7 jours pour vérifier par toi-même</Titre>
      <Corps>Comprendre chaque jour · voir venir les moments difficiles · te relever sans jour zéro.</Corps>
      <View style={{ backgroundColor: t.card, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: t.line, marginBottom: 16 }}>
        <Text style={{ color: t.text, fontSize: 18, fontWeight: '700' }}>79,99 €/an — soit 6,70 €/mois</Text>
        <Text style={{ color: t.sub, marginTop: 4 }}>ou 14,99 €/mois · essai gratuit 7 jours · remboursé 30 jours sans condition</Text>
      </View>
      <Corps sub>{S.paywallSafety}</Corps>
      {/* TODO(LUC-43): RevenueCat + StoreKit — achat réel. En dev : essai simulé. */}
      <View style={{ gap: 8 }}>
        <Bouton label="Commencer mes 7 jours" size="xl" onPress={() => void finish('trial')} />
        <Bouton label="Continuer en version gratuite" variant="ghost" onPress={() => void finish('free')} />
      </View>
    </Ecran>
  );
}
