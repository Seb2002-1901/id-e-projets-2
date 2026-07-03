import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { renderPhrase, TRISTATE_PHRASES, WEEKLY_FACTS, WEEKLY_TITLES, weeklyReport, type WeeklyReportPayload } from '@lucide/shared';
import { BadgePreuve } from '@/components/BadgePreuve';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { buildWeekData } from '@/features/today/buildWeekData';
import { track } from '@/analytics/analytics';
import { useTheme } from '@/theme/useTheme';

export default function Report() {
  const t = useTheme();
  const [payload, setPayload] = useState<WeeklyReportPayload | null>(null);
  useFocusEffect(useCallback(() => {
    track('weekly_report_opened');
    void buildWeekData().then((w) => setPayload(weeklyReport(w)));
  }, []));

  if (!payload) return <Ecran><View /></Ecran>;
  const title = renderPhrase(WEEKLY_TITLES[payload.b1.titleKey] ?? 'Ta semaine', payload.b1.slots);
  const arrow = { up: '↗', flat: '→', down: '↘' } as const;

  return (
    <Ecran>
      <Titre>{title}</Titre>
      <View style={{ flexDirection: 'row', gap: 16, marginBottom: 20 }}>
        {[
          [`${payload.b1.stats.daysWithin}`, 'jours dans\nl’enveloppe'],
          [`${payload.b1.stats.cravingsCrossed}`, 'envies\ntraversées'],
          [`${payload.b1.stats.checkins}`, 'points\ndu jour'],
        ].map(([v, l]) => (
          <View key={l} style={{ flex: 1, backgroundColor: t.card, borderRadius: 14, padding: 12, borderWidth: 1, borderColor: t.line, alignItems: 'center' }}>
            <Text style={{ color: t.text, fontSize: 24, fontWeight: '700' }}>{v}</Text>
            <Text style={{ color: t.sub, fontSize: 12, textAlign: 'center' }}>{l}</Text>
          </View>
        ))}
      </View>

      {!payload.dataSufficient ? (
        <Corps sub>Je manque de données pour te dire quelque chose d’utile cette semaine — 3 points du jour suffisent.</Corps>
      ) : (
        <>
          <Text style={{ color: t.sub, fontSize: 14, marginBottom: 8 }}>L’ÉTAT DES LIEUX</Text>
          {payload.b2.map((d) => (
            <View key={d.dimension} style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
              <Text style={{ fontSize: 20, color: d.trend === 'down' ? t.sub : t.green }}>{arrow[d.trend]}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: t.text, lineHeight: 21 }}>{TRISTATE_PHRASES[d.phraseKey]}</Text>
                <BadgePreuve level={d.evidence} compact />
              </View>
            </View>
          ))}
          {payload.b3 && (
            <View style={{ backgroundColor: t.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: t.line, marginVertical: 12 }}>
              <Text style={{ color: t.sub, fontSize: 13, fontWeight: '700', marginBottom: 4 }}>LE FAIT DE LA SEMAINE</Text>
              <Text style={{ color: t.text, lineHeight: 21 }}>
                {renderPhrase(WEEKLY_FACTS[payload.b3.factKey] ?? '', payload.b3.slots)}
              </Text>
            </View>
          )}
        </>
      )}
      <Text style={{ color: t.sub, fontSize: 14, marginTop: 8, marginBottom: 8 }}>LA SEMAINE QUI VIENT</Text>
      <Corps sub>
        {payload.b4.riskSlots.length
          ? `Tes créneaux sensibles déclarés restent surveillés (${payload.b4.riskSlots.length}). Relis tes si-alors avant vendredi.`
          : 'Aucun créneau sensible déclaré — tu peux en ajouter dans Mon plan.'}
      </Corps>
    </Ecran>
  );
}
