import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { BadgePreuve } from '@/components/BadgePreuve';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Sheet } from '@/components/Sheet';
import { Corps, Titre } from '@/components/Titre';
import { cardForDay, renderBody } from '@/content/corpus';
import { track } from '@/analytics/analytics';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

export default function CardDetail() {
  const { day } = useLocalSearchParams<{ day: string }>();
  const { profile } = useSession();
  const t = useTheme();
  const [sourceOpen, setSourceOpen] = useState(false);
  const card = cardForDay(Number(day));
  useEffect(() => { if (card) track('card_opened', { day: card.dayIndex }); }, [card]);
  if (!card) return <Ecran><Corps>Carte introuvable.</Corps></Ecran>;
  const body = renderBody(card.bodyMd, profile?.goal ?? 'reduce');
  return (
    <Ecran>
      <Titre>{card.title}</Titre>
      <BadgePreuve level={card.evidence} />
      <View style={{ height: 12 }} />
      <Corps>{body}</Corps>
      <View style={{ backgroundColor: t.card, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: t.line, marginBottom: 16 }}>
        <Text style={{ color: t.sub, fontSize: 13, fontWeight: '700', marginBottom: 4 }}>CE QUE ÇA NE DIT PAS</Text>
        <Text style={{ color: t.sub, lineHeight: 20 }}>{card.notSayingMd}</Text>
      </View>
      {card.action ? <Corps>👉 {card.action}</Corps> : null}
      <Bouton label="La source en 3 phrases" variant="secondary" onPress={() => { setSourceOpen(true); track('source_sheet_opened'); }} />
      <Sheet visible={sourceOpen} onClose={() => setSourceOpen(false)}>
        <Text style={{ color: t.text, fontWeight: '700', fontSize: 17, marginBottom: 8 }}>
          {card.sourceRef.authors} ({card.sourceRef.year}) — {card.sourceRef.kind}
        </Text>
        <Corps>{card.sourceRef.summary3}</Corps>
        <Text style={{ color: t.sub, fontStyle: 'italic' }}>{card.sourceRef.notSaying}</Text>
      </Sheet>
    </Ecran>
  );
}
