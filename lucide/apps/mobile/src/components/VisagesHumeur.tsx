import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTheme } from '@/theme/useTheme';

const FACES = ['😞', '😕', '😐', '🙂', '😌'] as const;
const LABELS = ['très bas', 'bas', 'neutre', 'bien', 'serein'] as const;

export function VisagesHumeur({ value, onChange }: { value: 1 | 2 | 3 | 4 | 5 | null; onChange: (v: 1 | 2 | 3 | 4 | 5) => void }) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {FACES.map((f, i) => {
        const v = (i + 1) as 1 | 2 | 3 | 4 | 5;
        const sel = value === v;
        return (
          <Pressable key={f} accessibilityRole="radio" accessibilityLabel={`Humeur : ${LABELS[i]}`}
            accessibilityState={{ selected: sel }} onPress={() => onChange(v)}
            style={{ padding: 8, borderRadius: 12, backgroundColor: sel ? t.accent + '22' : 'transparent', borderWidth: sel ? 1 : 0, borderColor: t.accent, minWidth: 52, alignItems: 'center' }}>
            <Text style={{ fontSize: 28 }}>{f}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
