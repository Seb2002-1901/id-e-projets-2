import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTheme } from '@/theme/useTheme';

/** Stepper de verres (0-15) — plus fiable qu'un slider au doigt fatigué. */
export function SliderVerres({ value, onChange, max = 15 }: { value: number; onChange: (v: number) => void; max?: number }) {
  const t = useTheme();
  const Btn = ({ d, label }: { d: number; label: string }) => (
    <Pressable accessibilityRole="button" accessibilityLabel={label}
      onPress={() => onChange(Math.min(max, Math.max(0, value + d)))}
      style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: t.card, borderWidth: 1, borderColor: t.line, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26, color: t.text }}>{d > 0 ? '+' : '−'}</Text>
    </Pressable>
  );
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
      <Btn d={-1} label="Un verre de moins" />
      <Text accessibilityLabel={`${value} verres`} style={{ fontSize: 40, fontWeight: '700', color: t.text, minWidth: 70, textAlign: 'center' }}>{value}</Text>
      <Btn d={1} label="Un verre de plus" />
    </View>
  );
}
