import React from 'react';
import { Text, View } from 'react-native';
import type { Evidence } from '@lucide/shared';
import { useTheme } from '@/theme/useTheme';

const LABELS: Record<Evidence, string> = {
  green: 'Ça, la science en est sûre',
  yellow: 'De bonnes raisons de le penser',
  white: 'Notre hypothèse — on l’explore',
};
export function BadgePreuve({ level, compact }: { level: Evidence; compact?: boolean }) {
  const t = useTheme();
  const color = level === 'green' ? t.green : level === 'yellow' ? t.yellow : t.gray;
  return (
    <View accessibilityLabel={`Niveau de preuve : ${LABELS[level]}`}
      style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color }} />
      {!compact && <Text style={{ color: t.sub, fontSize: 13 }}>{LABELS[level]}</Text>}
    </View>
  );
}
