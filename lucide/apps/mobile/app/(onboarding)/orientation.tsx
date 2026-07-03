import React, { useEffect } from 'react';
import { Linking, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { S } from '@/content/strings';
import { track } from '@/analytics/analytics';
import { router } from 'expo-router';

export default function Orientation() {
  useEffect(() => track('orientation_shown'), []);
  return (
    <Ecran>
      <Titre>On te doit la vérité</Titre>
      <Corps>{S.orientation}</Corps>
      <View style={{ gap: 12, marginTop: 16 }}>
        <Bouton label="Appeler Alcool Info Service (gratuit, anonyme)" onPress={() => void Linking.openURL('tel:0980980930')} />
        <Bouton label="En parler à mon médecin — préparer la consultation" variant="secondary"
          onPress={() => void Linking.openURL('https://www.alcool-info-service.fr')} />
        <Bouton label="Voir les ressources" variant="ghost" onPress={() => router.replace('/(resources)')} />
      </View>
    </Ecran>
  );
}
