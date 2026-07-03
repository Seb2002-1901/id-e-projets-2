import { Stack, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { hydrateStores } from '@/stores/persist';
import { useSession } from '@/stores/session';
import { startSyncScheduler } from '@/sync/scheduler';

export default function RootLayout() {
  const { hydrated, triage, onboarded } = useSession();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => { void hydrateStores(); }, []);
  useEffect(() => { if (hydrated && onboarded) return startSyncScheduler(); }, [hydrated, onboarded]);

  useEffect(() => {
    if (!hydrated) return;
    const inSos = segments[0] === 'sos';
    if (inSos) return; // BR-04 : le SOS n'est jamais redirigé
    if (triage === 'red' && segments[0] !== '(resources)') router.replace('/(resources)');
    else if (triage !== 'red' && !onboarded && segments[0] !== '(onboarding)') router.replace('/(onboarding)/welcome');
    else if (onboarded && segments[0] === '(onboarding)') router.replace('/(tabs)/today');
  }, [hydrated, triage, onboarded, segments, router]);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sos" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
        <Stack.Screen name="return/[waveId]" options={{ presentation: 'modal' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
