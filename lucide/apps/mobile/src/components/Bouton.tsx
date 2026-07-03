import React from 'react';
import { Pressable, StyleSheet, Text, type ViewStyle } from 'react-native';
import { radius, space, type_ } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

export function Bouton({ label, onPress, variant = 'primary', size = 'md', disabled, style }: {
  label: string; onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost'; size?: 'md' | 'xl';
  disabled?: boolean; style?: ViewStyle;
}) {
  const t = useTheme();
  const bg = variant === 'primary' ? t.accent : variant === 'secondary' ? t.card : 'transparent';
  const fg = variant === 'primary' ? '#FFFFFF' : t.text;
  return (
    <Pressable
      accessibilityRole="button" accessibilityLabel={label} disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: bg, opacity: disabled ? 0.4 : pressed ? 0.85 : 1, minHeight: size === 'xl' ? 64 : 48 },
        variant === 'secondary' && { borderWidth: 1, borderColor: t.line },
        style,
      ]}
    >
      <Text style={{ color: fg, fontSize: size === 'xl' ? 20 : type_.body, fontWeight: '600', textAlign: 'center' }}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  base: { borderRadius: radius.button, paddingHorizontal: space.l, justifyContent: 'center', alignItems: 'center', paddingVertical: space.m },
});
