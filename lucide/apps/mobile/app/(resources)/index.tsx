import React from 'react';
import { Linking, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { CRISIS_LINES, S } from '@/content/strings';

export default function Resources() {
  return (
    <Ecran>
      <Titre>Tes ressources</Titre>
      <Corps>{S.orientation}</Corps>
      <View style={{ gap: 10, marginTop: 12 }}>
        {CRISIS_LINES.map((l) => (
          <Bouton key={l.tel} label={l.label} variant="secondary" onPress={() => void Linking.openURL(`tel:${l.tel}`)} />
        ))}
      </View>
      <Corps sub>Tu pourras refaire le point quand tu veux — Lucide reste là, en complément d’un accompagnement humain.</Corps>
    </Ecran>
  );
}
