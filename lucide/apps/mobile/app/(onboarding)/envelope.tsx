import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Chip } from '@/components/Chip';
import { Ecran } from '@/components/Ecran';
import { SliderVerres } from '@/components/SliderVerres';
import { Corps, Titre } from '@/components/Titre';
import { track } from '@/analytics/analytics';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export default function Envelope() {
  const { draft, patchDraft } = useSession();
  const t = useTheme();
  const [maxWeek, setMaxWeek] = useState(4);
  const [maxOccasion, setMaxOccasion] = useState(2);
  const [offDays, setOffDays] = useState<number[]>([1, 2, 3, 4]);

  if (draft.goal === 'stop') {
    return (
      <Ecran>
        <Titre>Ton cadre : zéro alcool</Titre>
        <Corps>Simple et clair : ton enveloppe, c’est zéro. Tout verre compte comme un écart — une donnée, jamais un verdict.</Corps>
        <Bouton label="C’est mon cadre" onPress={() => {
          patchDraft({ envelope: { zero: true } });
          track('envelope_created');
          router.push('/(onboarding)/vault');
        }} />
      </Ecran>
    );
  }
  const summary = `≤ ${maxWeek} verres/semaine · ≤ ${maxOccasion} par occasion · jamais ${offDays.map((d) => DAYS[d - 1]).join(', ')}`;
  return (
    <Ecran>
      <Titre>Ton enveloppe personnelle</Titre>
      <Corps sub>C’est TON cadre — « écart » voudra dire : sortir de TON enveloppe, pas d’une règle imposée.</Corps>
      <Text style={{ color: t.text, fontWeight: '600', marginBottom: 8 }}>Maximum par semaine</Text>
      <SliderVerres value={maxWeek} onChange={setMaxWeek} max={20} />
      <Text style={{ color: t.text, fontWeight: '600', marginVertical: 8 }}>Maximum par occasion</Text>
      <SliderVerres value={maxOccasion} onChange={setMaxOccasion} max={8} />
      <Text style={{ color: t.text, fontWeight: '600', marginVertical: 8 }}>Mes jours sans</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 }}>
        {DAYS.map((d, i) => (
          <Chip key={d} label={d} selected={offDays.includes(i + 1)}
            onToggle={() => setOffDays((c) => (c.includes(i + 1) ? c.filter((x) => x !== i + 1) : [...c, i + 1]))} />
        ))}
      </View>
      <Corps>Mon enveloppe : {summary}.</Corps>
      <Bouton label="C’est mon cadre" onPress={() => {
        patchDraft({ envelope: { maxWeek, maxOccasion, offDays } });
        track('envelope_created');
        router.push('/(onboarding)/vault');
      }} />
    </Ecran>
  );
}
