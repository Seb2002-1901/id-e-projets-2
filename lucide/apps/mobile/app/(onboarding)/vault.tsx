import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { EnregistreurVocal } from '@/components/EnregistreurVocal';
import { Corps, Titre } from '@/components/Titre';
import { S } from '@/content/strings';
import { track } from '@/analytics/analytics';
import { kvSet } from '@/db/dao';
import { useSession } from '@/stores/session';

export default function Vault() {
  const { patchDraft } = useSession();
  return (
    <Ecran>
      <Titre>Ton coffre</Titre>
      <Corps>{S.vaultPrompt}</Corps>
      <Corps sub>Trois questions pour te guider : Pourquoi tu commences ? Qu’est-ce que tu ne veux plus ? Que veux-tu dire à celle qui doutera ?</Corps>
      <EnregistreurVocal onSaved={(uri) => {
        void kvSet('vault_audio_uri', uri);
        patchDraft({ vaultRecorded: true });
        track('vault_recorded');
      }} />
      <View style={{ marginTop: 24, gap: 8 }}>
        <Bouton label="Continuer" onPress={() => router.push('/(onboarding)/trajectory')} />
        <Bouton label="Passer pour l’instant" variant="ghost" onPress={() => { track('vault_skipped'); router.push('/(onboarding)/trajectory'); }} />
      </View>
    </Ecran>
  );
}
