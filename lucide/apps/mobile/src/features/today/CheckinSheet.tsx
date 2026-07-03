import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { isLapse, type EnvelopeRules } from '@lucide/shared';
import { Bouton } from '@/components/Bouton';
import { Sheet } from '@/components/Sheet';
import { SliderVerres } from '@/components/SliderVerres';
import { VisagesHumeur } from '@/components/VisagesHumeur';
import { S } from '@/content/strings';
import { track } from '@/analytics/analytics';
import { kvGet, kvSet, upsertCheckin } from '@/db/dao';
import { useWave } from '@/hooks/useWave';
import { todayIso } from '@/stores/journey';
import { useTheme } from '@/theme/useTheme';

export function CheckinSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const t = useTheme();
  const { dispatch, newWaveId } = useWave();
  const [mood, setMood] = useState<1 | 2 | 3 | 4 | 5 | null>(null);
  const [cravings, setCravings] = useState<0 | 1 | 2 | 3 | null>(null);
  const [within, setWithin] = useState<boolean | null>(null);
  const [drinks, setDrinks] = useState(0);

  async function submit() {
    if (mood === null || cravings === null || within === null) return;
    const date = todayIso();
    await upsertCheckin({ date, mood, cravings, withinEnvelope: within, drinksCount: within ? undefined : drinks, backfilled: false });
    await kvSet('last_checkin_date', date);
    track('checkin_completed', { mood, cravings, within });
    const envRaw = await kvGet('envelope');
    const rules = envRaw ? (JSON.parse(envRaw) as EnvelopeRules) : ({ zero: true } as const);
    const lapse = isLapse(rules, { withinEnvelope: within, drinksCount: within ? 0 : drinks, date });
    reset(); onClose();
    if (lapse) {
      track('lapse_declared', { via: 'checkin' });
      const waveId = newWaveId();
      await dispatch({ type: 'LAPSE_DECLARED', via: 'checkin', at: new Date().toISOString(), occurredOn: date, newWaveId: waveId });
      router.push(`/return/${waveId}`);
    }
  }
  function reset() { setMood(null); setCravings(null); setWithin(null); setDrinks(0); }

  return (
    <Sheet visible={visible} onClose={onClose}>
      <Text style={{ color: t.text, fontSize: 18, fontWeight: '700', marginBottom: 12 }}>Ton point du jour</Text>
      <Text style={{ color: t.sub, marginBottom: 8 }}>Comment tu te sens ?</Text>
      <VisagesHumeur value={mood} onChange={setMood} />
      <Text style={{ color: t.sub, marginVertical: 8 }}>Des envies hier ?</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {([0, 1, 2, 3] as const).map((n) => (
          <Bouton key={n} label={n === 3 ? '3+' : String(n)} variant={cravings === n ? 'primary' : 'secondary'}
            onPress={() => setCravings(n)} style={{ flex: 1 }} />
        ))}
      </View>
      <Text style={{ color: t.sub, marginVertical: 8 }}>Ta conso d’hier ?</Text>
      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 8 }}>
        <Bouton label="Dans mon enveloppe" variant={within === true ? 'primary' : 'secondary'} onPress={() => setWithin(true)} style={{ flex: 1 }} />
        <Bouton label="Au-dessus" variant={within === false ? 'primary' : 'secondary'} onPress={() => setWithin(false)} style={{ flex: 1 }} />
      </View>
      {within === false && (
        <View style={{ marginVertical: 8 }}>
          <SliderVerres value={drinks} onChange={setDrinks} />
          <Text style={{ color: t.sub, textAlign: 'center', marginTop: 8 }}>{S.checkinOver}</Text>
        </View>
      )}
      <View style={{ marginTop: 16 }}>
        <Bouton label="Valider" disabled={mood === null || cravings === null || within === null} onPress={() => void submit()} />
      </View>
    </Sheet>
  );
}
