import { router } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Chip } from '@/components/Chip';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { track } from '@/analytics/analytics';
import { useSession } from '@/stores/session';

const REASONS = ['Santé', 'Sommeil', 'Argent', 'Reprendre le contrôle', 'Un proche', 'Autre'];

export default function Goal() {
  const { patchDraft } = useSession();
  const [goal, setGoal] = useState<'stop' | 'reduce' | null>(null);
  const [reasons, setReasons] = useState<string[]>([]);
  return (
    <Ecran>
      <Titre>Ton objectif ?</Titre>
      <View style={{ gap: 12, marginBottom: 24 }}>
        <Bouton label="Réduire ma consommation" variant={goal === 'reduce' ? 'primary' : 'secondary'} onPress={() => setGoal('reduce')} />
        <Bouton label="Arrêter complètement" variant={goal === 'stop' ? 'primary' : 'secondary'} onPress={() => setGoal('stop')} />
      </View>
      <Titre level={2}>Pourquoi maintenant ?</Titre>
      <Corps sub>Ces raisons iront dans ton coffre — elles te serviront un soir de doute.</Corps>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 24 }}>
        {REASONS.map((r) => (
          <Chip key={r} label={r} selected={reasons.includes(r)}
            onToggle={() => setReasons((cur) => cur.includes(r) ? cur.filter((x) => x !== r) : [...cur, r])} />
        ))}
      </View>
      <Bouton label="Continuer" disabled={!goal || reasons.length === 0}
        onPress={() => {
          if (!goal) return;
          patchDraft({ goal, reasons });
          track('goal_set', { mode: goal });
          router.push('/(onboarding)/consumption');
        }} />
    </Ecran>
  );
}
