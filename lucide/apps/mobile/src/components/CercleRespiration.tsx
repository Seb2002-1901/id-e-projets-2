/** Respiration 4-0-8 (expiration longue) — Animated core, pas de dépendance native supplémentaire. */
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export function CercleRespiration() {
  const scale = useRef(new Animated.Value(0.6)).current;
  const [label, setLabel] = useState('Inspire… 4');
  useEffect(() => {
    let mounted = true;
    const cycle = () => {
      setLabel('Inspire — 4 secondes');
      Animated.timing(scale, { toValue: 1, duration: 4000, easing: Easing.inOut(Easing.quad), useNativeDriver: true }).start(() => {
        if (!mounted) return;
        setLabel('Souffle — 8 secondes, lentement');
        Animated.timing(scale, { toValue: 0.6, duration: 8000, easing: Easing.inOut(Easing.quad), useNativeDriver: true }).start(() => { if (mounted) cycle(); });
      });
    };
    cycle();
    return () => { mounted = false; };
  }, [scale]);
  return (
    <View style={{ alignItems: 'center', gap: 16 }}>
      <Animated.View style={{ width: 160, height: 160, borderRadius: 80, backgroundColor: '#2E5EAA55', borderWidth: 2, borderColor: '#B9C0CC', transform: [{ scale }] }} />
      <Text accessibilityLiveRegion="polite" style={{ color: '#F2EDE6', fontSize: 18 }}>{label}</Text>
    </View>
  );
}
