import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Chip } from '@/components/Chip';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

const Q = [
  { q: 'À quelle fréquence bois-tu de l’alcool ?', opts: ['Jamais', '≤ 1×/mois', '2-4×/mois', '2-3×/sem.', '≥ 4×/sem.'] },
  { q: 'Un jour où tu bois : combien de verres, en général ?', opts: ['1-2', '3-4', '5-6', '7-9', '10+'] },
  { q: 'À quelle fréquence 6 verres ou plus en une occasion ?', opts: ['Jamais', '< 1×/mois', '1×/mois', '1×/sem.', 'Presque chaque jour'] },
] as const;

export default function Consumption() {
  const { patchDraft } = useSession();
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const t = useTheme();
  const done = answers.every((a) => a !== null);
  return (
    <Ecran>
      <Titre>Ta consommation</Titre>
      <Corps sub>Sans jugement — c’est ta ligne de départ. 1 verre standard = 25 cl de bière, 10 cl de vin ou 3 cl d’alcool fort.</Corps>
      {Q.map((item, qi) => (
        <View key={item.q} style={{ marginBottom: 20 }}>
          <Text style={{ color: t.text, fontSize: 16, fontWeight: '600', marginBottom: 8 }}>{item.q}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {item.opts.map((o, oi) => (
              <Chip key={o} label={o} selected={answers[qi] === oi}
                onToggle={() => setAnswers((cur) => cur.map((v, i) => (i === qi ? oi : v)))} />
            ))}
          </View>
        </View>
      ))}
      <Bouton label="Continuer" disabled={!done}
        onPress={() => {
          patchDraft({ auditC: [answers[0] ?? 0, answers[1] ?? 0, answers[2] ?? 0] });
          router.push('/(onboarding)/safety');
        }} />
    </Ecran>
  );
}
