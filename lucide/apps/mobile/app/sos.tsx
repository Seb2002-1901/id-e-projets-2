/** MODE SOS — règle d'architecture n°1 : AUCUN import réseau/sync/analytics-réseau ici.
 *  Tout est local : SQLite + fichiers. Fond nuit, cibles 60pt, 8 mots par instruction. */
import { router } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import { CercleRespiration } from '@/components/CercleRespiration';
import { Chip } from '@/components/Chip';
import { CourbeEnvie } from '@/components/CourbeEnvie';
import { CRISIS_LINES, S } from '@/content/strings';
import { insertSos, kvGet, sosStats } from '@/db/dao';
import { themes } from '@/theme/tokens';
import { useAudioPlayer } from 'expo-audio';

type Step = 'choice' | 'craving' | 'exit' | 'danger';
type Tool = 'curve' | 'breath' | 'voice';
const t = themes.sos;

const TRIGGERS = [['stress', 'Stress'], ['social', 'Soirée'], ['boredom', 'Ennui'], ['conflict', 'Conflit'], ['fatigue', 'Fatigue']] as const;
const PLACES = [['maison', 'Maison'], ['bar', 'Bar'], ['chez_amis', 'Chez des amis'], ['travail', 'Travail']] as const;

export default function Sos() {
  const [step, setStep] = useState<Step>('choice');
  const [tool, setTool] = useState<Tool>('curve');
  const [elapsed, setElapsed] = useState(0);
  const [vaultUri, setVaultUri] = useState<string | null>(null);
  const [allyPhone, setAllyPhone] = useState<string | null>(null);
  const [trigger, setTrigger] = useState<string | null>(null);
  const [place, setPlace] = useState<string | null>(null);
  const [stats, setStats] = useState<{ crossed: number; medianMin: number | null } | null>(null);
  const startRef = useRef(Date.now());
  const player = useAudioPlayer(vaultUri ?? undefined);

  useEffect(() => {
    void kvGet('vault_audio_uri').then(setVaultUri);
    void kvGet('ally_phone').then(setAllyPhone);
  }, []);
  useEffect(() => {
    if (step !== 'craving') return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startRef.current) / 1000)), 1000);
    return () => clearInterval(id);
  }, [step]);

  async function finish(passed: boolean) {
    const durationS = Math.floor((Date.now() - startRef.current) / 1000);
    await insertSos({
      startedAt: new Date(startRef.current).toISOString(), type: 'craving',
      durationS, toolsUsed: [tool], outcome: passed ? 'passed' : 'abandoned',
      triggerChip: (trigger ?? undefined) as never, placeChip: (place ?? undefined) as never,
    });
    if (passed) {
      const s = await sosStats();
      setStats({ crossed: s.crossed, medianMin: s.medianS != null ? Math.round(s.medianS / 60) : null });
    } else router.back();
  }

  const Big = ({ label, onPress, danger }: { label: string; onPress: () => void; danger?: boolean }) => (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress}
      style={({ pressed }) => ({
        minHeight: 84, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 20,
        backgroundColor: danger ? '#5A2A2A' : pressed ? '#233044' : t.card, borderWidth: 1, borderColor: t.line,
      })}>
      <Text style={{ color: t.text, fontSize: 22, fontWeight: '700', textAlign: 'center' }}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, padding: 24, paddingTop: 70 }}>
      {step === 'choice' && (
        <View style={{ flex: 1, justifyContent: 'center', gap: 20 }}>
          <Big label={S.sosCravingBtn} onPress={() => { startRef.current = Date.now(); setStep('craving'); }} />
          <Big label={S.sosDangerBtn} danger onPress={() => setStep('danger')} />
          <Pressable accessibilityLabel="Fermer" onPress={() => router.back()} style={{ alignSelf: 'center', padding: 16 }}>
            <Text style={{ color: t.sub }}>Fermer</Text>
          </Pressable>
        </View>
      )}

      {step === 'craving' && !stats && (
        <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 24 }}>
          <View>
            <Text style={{ color: t.text, fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 20 }}>{S.sosKeyLine}</Text>
            {tool === 'curve' && <CourbeEnvie elapsedS={elapsed} />}
            {tool === 'breath' && <CercleRespiration />}
            <Text style={{ color: t.sub, textAlign: 'center', marginTop: 12 }}>
              {Math.floor(elapsed / 60)} min {elapsed % 60} s
            </Text>
          </View>
          <View style={{ gap: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Big label="🫁 Respirer" onPress={() => setTool(tool === 'breath' ? 'curve' : 'breath')} />
              {vaultUri ? <Big label="🎙️ Ma voix" onPress={() => { setTool('voice'); player.seekTo(0); player.play(); }} /> : null}
            </View>
            {allyPhone ? <Big label="📞 Mon allié" onPress={() => void Linking.openURL(`tel:${allyPhone}`)} /> : null}
            <Big label="C’est passé" onPress={() => void finish(true)} />
          </View>
        </View>
      )}

      {step === 'craving' && stats && (
        <View style={{ flex: 1, justifyContent: 'center', gap: 16 }}>
          <Text style={{ color: t.text, fontSize: 24, fontWeight: '700', textAlign: 'center' }}>
            {stats.crossed}ᵉ envie traversée.
          </Text>
          {stats.medianMin != null && (
            <Text style={{ color: t.sub, fontSize: 17, textAlign: 'center' }}>
              Chez toi, elles durent {stats.medianMin} min en médiane. Archivée dans tes preuves.
            </Text>
          )}
          <Text style={{ color: t.sub, textAlign: 'center' }}>Qu’est-ce qui l’a déclenchée ?</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {TRIGGERS.map(([slug, label]) => (
              <Chip key={slug} label={label} selected={trigger === slug} onToggle={() => setTrigger(slug)} />
            ))}
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {PLACES.map(([slug, label]) => (
              <Chip key={slug} label={label} selected={place === slug} onToggle={() => setPlace(slug)} />
            ))}
          </View>
          <Big label="Terminer" onPress={() => router.back()} />
        </View>
      )}

      {step === 'danger' && (
        <View style={{ flex: 1, justifyContent: 'center', gap: 14 }}>
          <Text style={{ color: t.text, fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 8 }}>{S.sosDangerLead}</Text>
          {CRISIS_LINES.map((l) => (
            <Big key={l.tel} label={l.label} danger onPress={() => void Linking.openURL(`tel:${l.tel}`)} />
          ))}
          {allyPhone ? <Big label="📞 Mon allié" onPress={() => void Linking.openURL(`tel:${allyPhone}`)} /> : null}
        </View>
      )}
    </View>
  );
}
