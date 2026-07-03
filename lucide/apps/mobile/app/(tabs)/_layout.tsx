import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { BoutonSOS } from '@/components/BoutonSOS';
import { useTheme } from '@/theme/useTheme';

export default function TabsLayout() {
  const t = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: t.bg, borderTopColor: t.line },
        tabBarActiveTintColor: t.accent, tabBarInactiveTintColor: t.sub,
      }}>
        <Tabs.Screen name="today" options={{ title: 'Aujourd’hui', tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>☀️</Text> }} />
        <Tabs.Screen name="landmarks" options={{ title: 'Repères', tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>🪨</Text> }} />
      </Tabs>
      <BoutonSOS />
    </View>
  );
}
