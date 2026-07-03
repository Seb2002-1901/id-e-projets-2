import React from 'react';
import { Text, View } from 'react-native';
import type { Evidence } from '@lucide/shared';
import { useTheme } from '@/theme/useTheme';
import { BadgePreuve } from './BadgePreuve';

export function TimelineVerticale({ items }: { items: { when: string; text: string; evidence: Evidence }[] }) {
  const t = useTheme();
  return (
    <View>
      {items.map((it, i) => (
        <View key={it.when} style={{ flexDirection: 'row', marginBottom: 4 }}>
          <View style={{ alignItems: 'center', width: 24 }}>
            <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: t.accent, marginTop: 4 }} />
            {i < items.length - 1 && <View style={{ width: 2, flex: 1, backgroundColor: t.line }} />}
          </View>
          <View style={{ flex: 1, paddingBottom: 16 }}>
            <Text style={{ fontWeight: '700', color: t.text, marginBottom: 2 }}>{it.when}</Text>
            <Text style={{ color: t.sub, lineHeight: 21, marginBottom: 4 }}>{it.text}</Text>
            <BadgePreuve level={it.evidence} compact />
          </View>
        </View>
      ))}
    </View>
  );
}
