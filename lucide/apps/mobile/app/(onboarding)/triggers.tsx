import { router } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import type { RiskSlot } from '@lucide/shared';
import { Bouton } from '@/components/Bouton';
import { Chip } from '@/components/Chip';
import { Ecran } from '@/components/Ecran';
import { GrilleCreneaux } from '@/components/GrilleCreneaux';
import { Corps, Titre } from '@/components/Titre';
import { useSession } from '@/stores/session';

const TRIGGERS = [
  ['stress', 'Le stress'], ['social', 'Les soirées'], ['boredom', 'L’ennui'],
  ['evening_habit', 'L’habitude du soir'], ['conflict', 'Les conflits'],
  ['loneliness', 'La solitude'], ['fatigue', 'La fatigue'], ['celebration', 'Les célébrations'],
] as const;

export default function Triggers() {
  const { patchDraft } = useSession();
  const [sel, setSel] = useState<string[]>([]);
  const [slots, setSlots] = useState<RiskSlot[]>([]);
  return (
    <Ecran>
      <Titre>Qu’est-ce qui te donne envie de boire ?</Titre>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 24 }}>
        {TRIGGERS.map(([slug, label]) => (
          <Chip key={slug} label={label} selected={sel.includes(slug)}
            onToggle={() => setSel((c) => (c.includes(slug) ? c.filter((x) => x !== slug) : [...c, slug]))} />
        ))}
      </View>
      <Titre level={2}>Tes moments sensibles</Titre>
      <Corps sub>Touche les créneaux où c’est le plus dur, en général.</Corps>
      <GrilleCreneaux value={slots} onChange={setSlots} />
      <View style={{ marginTop: 24 }}>
        <Bouton label="Continuer" disabled={sel.length === 0}
          onPress={() => { patchDraft({ triggers: sel, riskSlots: slots }); router.push('/(onboarding)/envelope'); }} />
      </View>
    </Ecran>
  );
}
