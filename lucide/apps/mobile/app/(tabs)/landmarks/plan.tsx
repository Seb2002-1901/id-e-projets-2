import React, { useCallback, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import type { EnvelopeRules, IfThenPlan } from '@lucide/shared';
import { MAX_ACTIVE_PLANS } from '@lucide/shared';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Sheet } from '@/components/Sheet';
import { Corps, Titre } from '@/components/Titre';
import { activePlans, kvGet, kvSet, upsertPlan } from '@/db/dao';
import { useTheme } from '@/theme/useTheme';

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export default function Plan() {
  const t = useTheme();
  const [plans, setPlans] = useState<IfThenPlan[]>([]);
  const [envelope, setEnvelope] = useState<EnvelopeRules | null>(null);
  const [ally, setAlly] = useState('');
  const [editOpen, setEditOpen] = useState(false);
  const [ifText, setIfText] = useState('');
  const [thenText, setThenText] = useState('');

  useFocusEffect(useCallback(() => {
    void activePlans().then(setPlans);
    void kvGet('envelope').then((raw) => raw && setEnvelope(JSON.parse(raw) as EnvelopeRules));
    void kvGet('ally_phone').then((p) => setAlly(p ?? ''));
  }, []));

  const envText = envelope
    ? 'zero' in envelope
      ? 'Zéro alcool — tout verre compte comme un écart.'
      : `≤ ${envelope.maxWeek} verres/semaine · ≤ ${envelope.maxOccasion} par occasion · jamais ${envelope.offDays.map((d) => DAYS[d - 1]).join(', ')}`
    : '—';

  return (
    <Ecran>
      <Titre>Mon plan</Titre>
      <Text style={{ color: t.sub, fontSize: 14, marginBottom: 4 }}>MON ENVELOPPE</Text>
      <Corps>{envText}</Corps>
      {/* TODO(LUC-24): édition avec verrous BR-11 (hebdo + 24 h post-écart) — envelopeLock est prête dans shared. */}

      <Text style={{ color: t.sub, fontSize: 14, marginVertical: 8 }}>MES SI-ALORS ({plans.length}/{MAX_ACTIVE_PLANS})</Text>
      {plans.map((p) => (
        <View key={p.id} style={{ backgroundColor: t.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: t.line, marginBottom: 8 }}>
          <Text style={{ color: t.text }}>Si {p.ifText.replace(/^Si /i, '')}</Text>
          <Text style={{ color: t.accent, marginTop: 4 }}>→ {p.thenText}</Text>
          <Text style={{ color: t.sub, fontSize: 12, marginTop: 4 }}>v{p.version} · {p.source === 'post_lapse' ? 'né d’un écart' : p.source === 'onboarding' ? 'de départ' : 'du dimanche'}</Text>
        </View>
      ))}
      {plans.length < MAX_ACTIVE_PLANS && <Bouton label="Ajouter un si-alors" variant="secondary" onPress={() => setEditOpen(true)} />}

      <Text style={{ color: t.sub, fontSize: 14, marginVertical: 8 }}>MON ALLIÉ</Text>
      <TextInput
        accessibilityLabel="Numéro de mon allié"
        value={ally} onChangeText={setAlly} keyboardType="phone-pad" placeholder="+33 6 …" placeholderTextColor={t.sub}
        onEndEditing={() => void kvSet('ally_phone', ally)}
        style={{ backgroundColor: t.card, borderRadius: 12, borderWidth: 1, borderColor: t.line, padding: 14, color: t.text, fontSize: 16, marginBottom: 8 }}
      />
      <Corps sub>Appelable en un geste depuis le SOS. Il ne voit aucune donnée — c’est toi qui appelles.</Corps>

      <Sheet visible={editOpen} onClose={() => setEditOpen(false)}>
        <Text style={{ color: t.text, fontWeight: '700', fontSize: 17, marginBottom: 12 }}>Nouveau si-alors</Text>
        <TextInput value={ifText} onChangeText={setIfText} placeholder="Si… (ex. on me ressert sans me demander)" placeholderTextColor={t.sub} maxLength={140}
          style={{ backgroundColor: t.card, borderRadius: 12, borderWidth: 1, borderColor: t.line, padding: 14, color: t.text, marginBottom: 8 }} />
        <TextInput value={thenText} onChangeText={setThenText} placeholder="Alors… (ex. je pose la main sur le verre : « je suis calée »)" placeholderTextColor={t.sub} maxLength={140}
          style={{ backgroundColor: t.card, borderRadius: 12, borderWidth: 1, borderColor: t.line, padding: 14, color: t.text, marginBottom: 12 }} />
        <Bouton label="Enregistrer" disabled={!ifText || !thenText} onPress={() => {
          void upsertPlan({ triggerLabel: ifText.slice(0, 60), ifText, thenText, source: 'weekly' })
            .then(() => activePlans()).then(setPlans);
          setIfText(''); setThenText(''); setEditOpen(false);
        }} />
      </Sheet>
    </Ecran>
  );
}
