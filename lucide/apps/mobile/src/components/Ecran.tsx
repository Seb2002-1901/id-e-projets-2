/** Conteneur d'écran standard : safe area + scroll + padding. */
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { space } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

export function Ecran({ children, scroll = true }: { children: React.ReactNode; scroll?: boolean }) {
  const t = useTheme();
  const insets = useSafeAreaInsets();
  const style = { flex: 1, backgroundColor: t.bg } as const;
  const pad = { padding: space.l, paddingTop: insets.top + space.m, paddingBottom: insets.bottom + 100 };
  if (!scroll) return <View style={[style, pad]}>{children}</View>;
  return <ScrollView style={style} contentContainerStyle={pad}>{children}</ScrollView>;
}
