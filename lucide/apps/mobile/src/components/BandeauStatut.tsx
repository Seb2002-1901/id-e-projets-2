import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/theme/useTheme';

export function BandeauStatut({ kind, text }: { kind: 'offline' | 'free' | 'resume'; text: string }) {
  const t = useTheme();
  return (
    <View style={{ backgroundColor: kind === 'resume' ? t.accent + '22' : t.card, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: t.line, marginBottom: 12 }}>
      <Text style={{ color: t.text }}>{text}</Text>
    </View>
  );
}
