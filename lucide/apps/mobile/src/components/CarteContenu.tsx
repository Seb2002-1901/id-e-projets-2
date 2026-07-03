import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { Evidence } from '@lucide/shared';
import { radius, space } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';
import { BadgePreuve } from './BadgePreuve';

export function CarteContenu({ title, excerpt, badge, locked, onPress }: {
  title: string; excerpt?: string; badge: Evidence; locked?: boolean; onPress: () => void;
}) {
  const t = useTheme();
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={title} onPress={onPress}
      style={{ backgroundColor: t.card, borderRadius: radius.card, padding: space.m, borderWidth: 1, borderColor: t.line, opacity: locked ? 0.75 : 1 }}>
      <Text style={{ fontSize: 18, fontWeight: '600', color: t.text, marginBottom: 6 }}>{title}</Text>
      {excerpt ? <Text numberOfLines={2} style={{ color: t.sub, marginBottom: 8, lineHeight: 20 }}>{excerpt}</Text> : null}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <BadgePreuve level={badge} />
        {locked ? <Text style={{ color: t.sub, fontSize: 13 }}>Parcours complet</Text> : null}
      </View>
    </Pressable>
  );
}
