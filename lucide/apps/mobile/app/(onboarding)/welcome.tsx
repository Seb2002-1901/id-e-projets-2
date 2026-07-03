import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { S } from '@/content/strings';
import { track } from '@/analytics/analytics';
import { useTheme } from '@/theme/useTheme';

export default function Welcome() {
  const t = useTheme();
  useEffect(() => track('onboarding_started'), []);
  return (
    <Ecran scroll={false}>
      <View style={{ flex: 1, justifyContent: 'center', gap: 24 }}>
        <Text style={{ fontSize: 26, lineHeight: 36, fontWeight: '700', color: t.text }}>{S.promise}</Text>
        <Text style={{ color: t.sub, fontSize: 15 }}>{S.promiseSub}</Text>
      </View>
      <Bouton label={S.start} size="xl" onPress={() => router.push('/(onboarding)/goal')} />
    </Ecran>
  );
}
