import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { BandeauStatut } from '@/components/BandeauStatut';
import { CarteContenu } from '@/components/CarteContenu';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { cardForDay } from '@/content/corpus';
import { S } from '@/content/strings';
import { phaseFor } from '@/content/trajectory';
import { getCheckin, kvGet } from '@/db/dao';
import { selectTodayState, type TodayState } from '@/features/today/selectTodayState';
import { CheckinSheet } from '@/features/today/CheckinSheet';
import { dayOfJourney, todayIso, useJourney } from '@/stores/journey';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

export default function Today() {
  const { profile, subStatus } = useSession();
  const { waveCtx } = useJourney();
  const t = useTheme();
  const [state, setState] = useState<TodayState | null>(null);
  const [checkinOpen, setCheckinOpen] = useState(false);
  const day = profile ? dayOfJourney(profile.journeyStart) : 1;
  const card = cardForDay(day);
  const premium = subStatus === 'trial' || subStatus === 'active';

  const refresh = useCallback(() => {
    void (async () => {
      const last = await kvGet('last_checkin_date');
      const done = await getCheckin(todayIso());
      setState(selectTodayState({
        dayOfJourney: day,
        lastCheckinDate: done ? todayIso() : last,
        today: todayIso(),
        waveState: waveCtx.state,
      }));
    })();
  }, [day, waveCtx.state]);
  useFocusEffect(refresh);

  if (!state) return <Ecran scroll={false}><View /></Ecran>;
  return (
    <Ecran>
      <Text style={{ color: t.sub, marginBottom: 4 }}>Jour {day} · {phaseFor(day)}</Text>
      <Titre>Aujourd’hui</Titre>

      {state.kind === 'protocol_pending' && (
        <View style={{ marginBottom: 16 }}>
          <BandeauStatut kind="resume" text="Quand tu es prête : 3 questions, 2 minutes. Sans jugement." />
          <Bouton label="Comprendre mon écart" onPress={() => router.push(`/return/${useJourney.getState().waveCtx.waveId ?? 'current'}`)} />
        </View>
      )}
      {state.kind === 'soft_resume' && (
        <View style={{ marginBottom: 16 }}>
          <BandeauStatut kind="resume" text="Content de te revoir. On reprend en douceur — pas de rétrospective." />
          <Bouton label="Reprendre mon cadre" onPress={() => router.push('/return/soft')} />
        </View>
      )}
      {state.kind === 'resume_banner' && <BandeauStatut kind="resume" text={S.resumeBanner} />}
      {state.kind === 'first_day' && <Corps sub>Bienvenue. Ta seule mission aujourd’hui : ton premier point du jour, 30 secondes.</Corps>}

      {(state.kind === 'normal' && state.checkinDone) ? (
        <Corps sub>✓ Point du jour fait. À demain — ou au SOS si besoin, il est toujours là.</Corps>
      ) : (
        <View style={{ marginBottom: 16 }}>
          <Bouton label="Mon point du jour — 30 secondes" onPress={() => setCheckinOpen(true)} />
        </View>
      )}

      {card && (
        <View style={{ marginTop: 8 }}>
          <Text style={{ color: t.sub, marginBottom: 8, fontSize: 14 }}>AUJOURD’HUI EN TOI</Text>
          <CarteContenu
            title={card.title}
            excerpt={premium || day % 7 === 1 ? undefined : 'Cette carte fait partie du parcours complet.'}
            badge={card.evidence}
            locked={!premium && day % 7 !== 1}
            onPress={() => router.push(`/(tabs)/today/card/${card.dayIndex}`)}
          />
        </View>
      )}

      <CheckinSheet visible={checkinOpen} onClose={() => { setCheckinOpen(false); refresh(); }} />
    </Ecran>
  );
}
