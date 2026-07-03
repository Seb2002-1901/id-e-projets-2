import { router } from 'expo-router';
import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { setAnalyticsConsent, track } from '@/analytics/analytics';
import { authMode, sendEmailCode, verifyEmailCode } from '@/auth/auth';
import { activePlans } from '@/db/dao';
import { requestPermission, scheduleDailyCard, scheduleRiskSlots } from '@/notifications/local';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

export default function Account() {
  const t = useTheme();
  const { draft } = useSession();
  const [dailyOn, setDailyOn] = useState(true);
  const [riskOn, setRiskOn] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(false);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [phase, setPhase] = useState<'email' | 'code' | 'done'>(authMode() === 'local' ? 'done' : 'email');
  const [err, setErr] = useState('');

  async function sendCode() {
    try { setErr(''); await sendEmailCode(email.trim()); setPhase('code'); }
    catch (e) { setErr(e instanceof Error ? e.message : 'Erreur réseau'); }
  }
  async function verify() {
    const ok = await verifyEmailCode(email.trim(), code.trim());
    if (ok) setPhase('done'); else setErr('Code invalide — vérifie tes e-mails.');
  }
  async function next() {
    setAnalyticsConsent(analyticsOn);
    if (dailyOn || riskOn) {
      const ok = await requestPermission();
      if (ok) {
        if (dailyOn) await scheduleDailyCard(8, 30, 'Ta carte du jour est prête.');
        if (riskOn && draft.riskSlots.length) {
          const plans = await activePlans();
          await scheduleRiskSlots(draft.riskSlots as never, plans[0]?.thenText.slice(0, 60) ?? null);
        }
      }
    }
    track('account_created', { method: authMode() });
    router.push('/(onboarding)/paywall');
  }

  const input = { backgroundColor: t.card, borderRadius: 12, borderWidth: 1, borderColor: t.line, padding: 14, color: t.text, fontSize: 16, marginBottom: 8 } as const;
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
      {phase === 'email' && (
        <>
          <Corps sub>Ton e-mail sert uniquement à retrouver tes données. Jamais de pub.</Corps>
          <TextInput style={input} value={email} onChangeText={setEmail} placeholder="ton@email.fr"
            placeholderTextColor={t.sub} keyboardType="email-address" autoCapitalize="none" accessibilityLabel="Adresse e-mail" />
          <Bouton label="Recevoir mon code" disabled={!email.includes('@')} onPress={() => void sendCode()} />
          {/* TODO(LUC-07): bouton Sign in with Apple (build EAS + capability — voir src/auth/auth.ts) */}
        </>
      )}
      {phase === 'code' && (
        <>
          <Corps sub>Un code à 6 chiffres vient d’être envoyé à {email}.</Corps>
          <TextInput style={input} value={code} onChangeText={setCode} placeholder="000000"
            placeholderTextColor={t.sub} keyboardType="number-pad" accessibilityLabel="Code reçu par e-mail" />
          <Bouton label="Valider" disabled={code.length < 6} onPress={() => void verify()} />
        </>
      )}
      {!!err && <Text style={{ color: t.accent, marginVertical: 8 }}>{err}</Text>}
      {phase === 'done' && (
        <>
          {authMode() === 'local' && <Corps sub>Mode local : tes données restent sur cet appareil (backend non configuré).</Corps>}
          <Row label="Carte du jour (8 h 30)" sub="Une par jour. Jamais plus de 2 notifications par jour, toutes catégories confondues." value={dailyOn} onChange={setDailyOn} />
          <Row label="Rappel de mes créneaux sensibles" sub="15 minutes avant, avec ton si-alors. 3 par semaine maximum." value={riskOn} onChange={setRiskOn} />
          <Row label="Statistiques d’usage anonymes" sub="Optionnel. Jamais tes textes, jamais revendu." value={analyticsOn} onChange={setAnalyticsOn} />
          <View style={{ marginTop: 24 }}>
            <Bouton label="Continuer" onPress={() => void next()} />
          </View>
        </>
      )}
    </Ecran>
  );
}
