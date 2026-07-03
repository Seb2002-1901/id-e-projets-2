import React from 'react';
import { Pressable, Text } from 'react-native';
import { radius, space } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

export function Chip({ label, selected, onToggle }: { label: string; selected: boolean; onToggle: () => void }) {
  const t = useTheme();
  return (
    <Pressable
      accessibilityRole="checkbox" accessibilityState={{ checked: selected }} accessibilityLabel={label}
      onPress={onToggle}
      style={{
        borderRadius: radius.pill, paddingVertical: 10, paddingHorizontal: space.m, margin: 4,
        backgroundColor: selected ? t.accent : t.card, borderWidth: 1, borderColor: selected ? t.accent : t.line,
        minHeight: 44, justifyContent: 'center',
      }}
    >
      <Text style={{ color: selected ? '#FFF' : t.text, fontSize: 15 }}>{label}</Text>
    </Pressable>
  );
}
