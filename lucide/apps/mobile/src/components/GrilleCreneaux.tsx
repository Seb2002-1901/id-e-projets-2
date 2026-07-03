import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { RiskSlot, Slot, Weekday } from '@lucide/shared';
import { useTheme } from '@/theme/useTheme';

const DAYS: { d: Weekday; l: string }[] = [
  { d: 1, l: 'L' }, { d: 2, l: 'M' }, { d: 3, l: 'M' }, { d: 4, l: 'J' }, { d: 5, l: 'V' }, { d: 6, l: 'S' }, { d: 7, l: 'D' }];
const SLOTS: { s: Slot; l: string }[] = [{ s: 'noon', l: 'Midi' }, { s: 'evening', l: 'Soir' }, { s: 'night', l: 'Nuit' }];

export function GrilleCreneaux({ value, onChange }: { value: RiskSlot[]; onChange: (v: RiskSlot[]) => void }) {
  const t = useTheme();
  const has = (d: Weekday, s: Slot) => value.some((v) => v.dow === d && v.slot === s);
  const toggle = (d: Weekday, s: Slot) =>
    onChange(has(d, s) ? value.filter((v) => !(v.dow === d && v.slot === s)) : [...value, { dow: d, slot: s }]);
  return (
    <View>
      <View style={{ flexDirection: 'row', marginLeft: 52 }}>
        {DAYS.map((d, i) => <Text key={i} style={{ width: 38, textAlign: 'center', color: t.sub }}>{d.l}</Text>)}
      </View>
      {SLOTS.map((row) => (
        <View key={row.s} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
          <Text style={{ width: 52, color: t.sub, fontSize: 13 }}>{row.l}</Text>
          {DAYS.map((d) => (
            <Pressable key={`${d.d}${row.s}`} accessibilityRole="checkbox"
              accessibilityState={{ checked: has(d.d, row.s) }}
              accessibilityLabel={`${row.l} ${d.l}`}
              onPress={() => toggle(d.d, row.s)}
              style={{ width: 34, height: 34, margin: 2, borderRadius: 8, borderWidth: 1, borderColor: t.line, backgroundColor: has(d.d, row.s) ? t.accent : t.card }} />
          ))}
        </View>
      ))}
    </View>
  );
}
