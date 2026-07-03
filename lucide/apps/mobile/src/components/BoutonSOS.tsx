import React from 'react';
import { Pressable, Text } from 'react-native';
import { router } from 'expo-router';

/** Le serment : toujours visible, zone ≥ 60 pt, contraste max. */
export function BoutonSOS() {
  return (
    <Pressable
      accessibilityRole="button" accessibilityLabel="SOS — j’ai besoin d’aide maintenant"
      onPress={() => router.push('/sos')}
      style={({ pressed }) => ({
        position: 'absolute', bottom: 24, alignSelf: 'center',
        minWidth: 120, minHeight: 60, borderRadius: 999, paddingHorizontal: 28,
        backgroundColor: pressed ? '#C4552F' : '#E8734A',
        alignItems: 'center', justifyContent: 'center',
        shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 8, shadowOffset: { width: 0, height: 3 }, elevation: 6,
      })}
    >
      <Text style={{ color: '#FFF', fontSize: 20, fontWeight: '800', letterSpacing: 1 }}>SOS</Text>
    </Pressable>
  );
}
