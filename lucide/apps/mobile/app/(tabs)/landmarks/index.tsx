import { Link, router, useFocusEffect } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { RangeeCompteur } from '@/components/RangeeCompteur';
import { RangeePreuve } from '@/components/RangeePreuve';
import { Corps, Titre } from '@/components/Titre';
import { S } from '@/content/strings';
import { fmtHours, useWave } from '@/hooks/useWave';
import { useCounters } from '@/hooks/useCounters';
import { useTheme } from '@/theme/useTheme';
import { ulid } from '@/db/database';
import { todayIso } from '@/stores/journey';

export default function Landmarks() {
  const { counters, refresh } = useCounters();
  const { dispatch } = useWave();
  const t = useTheme();
  useFocusEffect(React.useCallback(() => { refresh(); }, [refresh]));

  async function declareLapse() {
    const waveId = ulid();
    await dispatch({ type: 'LAPSE_DECLARED', via: 'button', at: new Date().toISOString(), occurredOn: todayIso(), newWaveId: waveId });
    router.push(`/return/${waveId}`);
  }

  if (!counters) return <Ecran><View /></Ecran>;
  const empty = counters.total === 0 && counters.proofs.length === 0;
  return (
    <Ecran>
      <Titre>Tes repères</Titre>
      {empty ? (
        <Corps sub>{S.landmarksEmpty}</Corps>
      ) : (
        <>
          <RangeeCompteur label="Jours dans ton enveloppe" value={`${counters.within} sur ${counters.total}`} />
          {counters.lastRebound != null && (
            <RangeeCompteur label="Dernier rebond" value={fmtHours(counters.lastRebound)}
              sub={counters.prevRebound != null && counters.lastRebound < counters.prevRebound
                ? `${(counters.prevRebound / Math.max(counters.lastRebound, 0.1)).toFixed(1)}× plus rapide qu’avant` : undefined} />
          )}
          {counters.bestRebound != null && <RangeeCompteur label="Record de rebond" value={fmtHours(counters.bestRebound)} />}
          <RangeeCompteur label="Envies traversées" value={String(counters.cravingsCrossed)}
            sub={counters.medianMin != null ? `${counters.medianMin} min en médiane chez toi` : undefined} />
        </>
      )}
      <View style={{ marginTop: 20, gap: 10 }}>
        <Link href="/(tabs)/landmarks/plan" asChild><Bouton label="Mon plan" variant="secondary" onPress={() => undefined} /></Link>
        <Link href="/(tabs)/today/report" asChild><Bouton label="Mon bilan de la semaine" variant="secondary" onPress={() => undefined} /></Link>
        <Bouton label="J’ai eu un écart" variant="ghost" onPress={() => void declareLapse()} />
        <Link href="/(tabs)/landmarks/settings" asChild><Bouton label="Réglages" variant="ghost" onPress={() => undefined} /></Link>
      </View>
      {counters.proofs.length > 0 && (
        <View style={{ marginTop: 24 }}>
          <Text style={{ color: t.sub, fontSize: 14, marginBottom: 4 }}>TES PREUVES</Text>
          {counters.proofs.map((p) => <RangeePreuve key={p.id} proof={p} />)}
        </View>
      )}
    </Ecran>
  );
}
