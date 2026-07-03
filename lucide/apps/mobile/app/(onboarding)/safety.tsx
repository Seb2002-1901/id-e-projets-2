import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { triageOutcome } from '@lucide/shared';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { S } from '@/content/strings';
import { track } from '@/analytics/analytics';
import { persistTriage } from '@/stores/persist';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

const PHYS = [
  { key: 'shakes', q: 'Le matin, as-tu parfois des tremblements qui se calment en buvant ?' },
  { key: 'morning', q: 'T’arrive-t-il de boire dès le matin pour te sentir d’aplomb ?' },
  { key: 'withdrawal', q: 'As-tu déjà vécu un arrêt très difficile physiquement (sueurs, tremblements forts, confusion) ?' },
] as const;
const PHQ = ['Peu d’intérêt ou de plaisir à faire les choses ?', 'Sentiment d’être triste, déprimée ou désespérée ?'] as const;
const FREQ = ['Jamais', 'Plusieurs jours', 'Plus de la moitié des jours', 'Presque chaque jour'] as const;

export default function Safety() {
  const { draft, patchDraft, setTriage } = useSession();
  const t = useTheme();
  const [phys, setPhys] = useState<Record<string, boolean | null>>({ shakes: null, morning: null, withdrawal: null });
  const [phq, setPhq] = useState<(number | null)[]>([null, null]);
  const done = Object.values(phys).every((v) => v !== null) && phq.every((v) => v !== null);

  function submit() {
    const answers = {
      auditC: draft.auditC, sex: 'na' as const,
      morningShakes: !!phys.shakes, morningDrink: !!phys.morning, pastWithdrawal: !!phys.withdrawal,
      dailyLongTerm: false, phq2: [phq[0] ?? 0, phq[1] ?? 0] as [number, number],
    };
    const outcome = triageOutcome(answers);
    patchDraft({ phys: { shakes: !!phys.shakes, morning: !!phys.morning, withdrawal: !!phys.withdrawal }, phq2: answers.phq2 });
    setTriage(outcome);
    void persistTriage(outcome); // C2 : local uniquement
    track('triage_completed', { outcome });
    router.replace(outcome === 'red' ? '/(onboarding)/orientation' : '/(onboarding)/triggers');
  }

  const YesNo = ({ k }: { k: string }) => (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Bouton label="Oui" variant={phys[k] === true ? 'primary' : 'secondary'} onPress={() => setPhys((c) => ({ ...c, [k]: true }))} style={{ flex: 1 }} />
      <Bouton label="Non" variant={phys[k] === false ? 'primary' : 'secondary'} onPress={() => setPhys((c) => ({ ...c, [k]: false }))} style={{ flex: 1 }} />
    </View>
  );

  return (
    <Ecran>
      <Titre>Deux minutes d’honnêteté</Titre>
      <Corps sub>{S.triageIntro}</Corps>
      {PHYS.map((p) => (
        <View key={p.key} style={{ marginBottom: 16 }}>
          <Text style={{ color: t.text, fontSize: 16, marginBottom: 8 }}>{p.q}</Text>
          <YesNo k={p.key} />
        </View>
      ))}
      <Corps sub>Ces deux dernières semaines, à quelle fréquence :</Corps>
      {PHQ.map((q, qi) => (
        <View key={q} style={{ marginBottom: 16 }}>
          <Text style={{ color: t.text, fontSize: 16, marginBottom: 8 }}>{q}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
            {FREQ.map((f, fi) => (
              <Bouton key={f} label={f} variant={phq[qi] === fi ? 'primary' : 'secondary'}
                onPress={() => setPhq((c) => c.map((v, i) => (i === qi ? fi : v)))} />
            ))}
          </View>
        </View>
      ))}
      <Bouton label="Valider" disabled={!done} onPress={submit} />
    </Ecran>
  );
}
