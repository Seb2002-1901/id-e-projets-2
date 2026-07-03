import React from 'react';
import { Text, View } from 'react-native';
import type { Proof } from '@lucide/shared';
import { useTheme } from '@/theme/useTheme';

export function RangeePreuve({ proof }: { proof: Proof }) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, gap: 10 }}>
      <Text style={{ fontSize: 18 }}>🪨</Text>
      <View style={{ flex: 1 }}>
        <Text style={{ color: t.text, fontSize: 15 }}>{proof.label}</Text>
        <Text style={{ color: t.sub, fontSize: 12 }}>{new Date(proof.occurredAt).toLocaleDateString('fr-FR')}</Text>
      </View>
    </View>
  );
}
