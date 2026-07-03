import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Ecran } from '@/components/Ecran';
import { TimelineVerticale } from '@/components/TimelineVerticale';
import { Bouton } from '@/components/Bouton';
import { Corps, Titre } from '@/components/Titre';
import { trajectory72h } from '@/content/trajectory';
import { track } from '@/analytics/analytics';
import { useSession } from '@/stores/session';

export default function Trajectory() {
  const { draft } = useSession();
  useEffect(() => track('trajectory_viewed'), []);
  return (
    <Ecran>
      <Titre>Tes 72 prochaines heures</Titre>
      <Corps sub>Personne ne te l’a jamais dit comme ça : voici ce qui va probablement se passer en toi — et pourquoi.</Corps>
      <TimelineVerticale items={trajectory72h(draft.goal ?? 'reduce')} />
      <Bouton label="Je suis prête" size="xl" onPress={() => router.push('/(onboarding)/account')} />
    </Ecran>
  );
}
