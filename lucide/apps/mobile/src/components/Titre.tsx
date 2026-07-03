import React from 'react';
import { Text } from 'react-native';
import { type_ } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

export function Titre({ children, level = 1 }: { children: React.ReactNode; level?: 1 | 2 }) {
  const t = useTheme();
  return (
    <Text accessibilityRole="header" style={{
      fontSize: level === 1 ? type_.title : type_.h2, fontWeight: '700', color: t.text, marginBottom: 12,
    }}>{children}</Text>
  );
}
export function Corps({ children, sub }: { children: React.ReactNode; sub?: boolean }) {
  const t = useTheme();
  return <Text style={{ fontSize: 17, lineHeight: 25, color: sub ? t.sub : t.text, marginBottom: 12 }}>{children}</Text>;
}
