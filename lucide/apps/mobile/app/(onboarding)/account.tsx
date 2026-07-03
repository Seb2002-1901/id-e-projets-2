import { router } from 'expo-router';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { track } from '@/analytics/analytics';
import { requestPermission, scheduleDailyCard } from '@/notifications/local';
import { setAnalyticsConsent } from '@/analytics/analytics';
import { useTheme } from '@/theme/useTheme';

export default function Account() {
  const t = useTheme();
  const [dailyOn, setDailyOn] = useState(true);
  const [analyticsOn, setAnalyticsOn] = useState(false);

  async function next() {
    setAnalyticsConsent(analyticsOn);
    if (dailyOn) {
      const ok = await requestPermission();
      if (ok) await scheduleDailyCard(8, 30, 'Ta carte du jour est prête.');
    }
    track('account_created', { method: 'local' });
    router.push('/(onboarding)/paywall');
  }
  const Row = ({ label, sub, value, onChange }: { label: string; sub: string; value: boolean; onChange: (v: boolean) => void }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, gap: 12 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: t.text, fontSize: 16 }}>{label}</Text>
        <Text style={{ color: t.sub, fontSize: 13 }}>{sub}</Text>
      </View>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
  return (
    <Ecran>
      <Titre>Ton compte</Titre>
      {/* TODO(LUC-07): Sign in with Apple + OTP e-mail via Supabase — actif dès que EXPO_PUBLIC_SUPABASE_URL est renseignée.
          En dev sans backend : compte local (les données restent sur l'appareil). */}
      <Corps sub>Mode développement : compte local — tes données restent sur cet appareil.</Corps>
      <Row label="Carte du jour (8 h 30)" sub="Une notification par jour, jamais plus de 2 toutes catégories confondues." value={dailyOn} onChange={setDailyOn} />
      <Row label="Statistiques d’usage anonymes" sub="Optionnel. Jamais tes textes, jamais revendu." value={analyticsOn} onChange={setAnalyticsOn} />
      <View style={{ marginTop: 24 }}>
        <Bouton label="Continuer" onPress={() => void next()} />
      </View>
    </Ecran>
  );
}
