import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/theme/useTheme';

export function RangeeCompteur({ label, value, sub }: { label: string; value: string; sub?: string }) {
  const t = useTheme();
  return (
    <View accessibilityLabel={`${label} : ${value}${sub ? `, ${sub}` : ''}`}
      style={{ paddingVertical: 14, borderBottomWidth: 1, borderColor: t.line }}>
      <Text style={{ color: t.sub, fontSize: 14, marginBottom: 2 }}>{label}</Text>
      <Text style={{ color: t.text, fontSize: 24, fontWeight: '700' }}>{value}</Text>
      {sub ? <Text style={{ color: t.green, fontSize: 14, marginTop: 2 }}>{sub}</Text> : null}
    </View>
  );
}
