/** Protocole R (3 étapes) + reprise douce. Jamais de remise à zéro du compteur — BR-13. */
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { crisisPatternMatch } from '@lucide/shared';
import { Bouton } from '@/components/Bouton';
import { Chip } from '@/components/Chip';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { S } from '@/content/strings';
import { track } from '@/analytics/analytics';
import { saveContext, upsertPlan } from '@/db/dao';
import { fmtHours, useWave } from '@/hooks/useWave';
import { reboundStats, useCounters } from '@/hooks/useCounters';
import { useTheme } from '@/theme/useTheme';

const WHERE = [['maison', 'À la maison'], ['bar', 'Au bar'], ['chez_amis', 'Chez des amis'], ['travail', 'Au travail'], ['autre', 'Autre']] as const;
const WHO = [['seul', 'Seule'], ['partenaire', 'Avec mon/ma partenaire'], ['amis', 'Avec des amis'], ['collegues', 'Avec des collègues']] as const;
const EMOTION = [['stress', 'Stress'], ['ennui', 'Ennui'], ['tristesse', 'Tristesse'], ['colere', 'Colère'], ['joie', 'Joie'], ['fatigue', 'Fatigue']] as const;
const HELPER = [['partir_plus_tot', 'Partir plus tôt'], ['un_plan', 'Avoir un plan'], ['en_parler', 'En parler à quelqu’un'], ['rien_je_choisis', 'Rien — je choisis']] as const;

export default function ReturnProtocol() {
  const { waveId } = useLocalSearchParams<{ waveId: string }>();
  const { waveCtx, dispatch } = useWave();
  const { counters } = useCounters();
  const t = useTheme();
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [ctx, setCtx] = useState<{ whereChip?: string; whoChip?: string; emotionChip?: string; helperChip?: string }>({});
  const [rebound, setRebound] = useState<{ hours: string; within: number; total: number } | null>(null);

  // Reprise douce (T11)
  if (waveId === 'soft') {
    return (
      <Ecran>
        <Titre>On reprend</Titre>
        <Corps>Pas de rétrospective, pas de comptes à rendre. Une seule question : ton cadre.</Corps>
        <View style={{ gap: 10 }}>
          <Bouton label="Je garde mon enveloppe telle quelle" onPress={() => { void dispatch({ type: 'RESUME', choice: 'keep' }).then(() => router.back()); }} />
          <Bouton label="Je veux l’ajuster (à tête reposée)" variant="secondary" onPress={() => { void dispatch({ type: 'RESUME', choice: 'adjust' }).then(() => router.back()); }} />
        </View>
      </Ecran>
    );
  }

  async function start() {
    await dispatch({ type: 'PROTOCOL_STARTED' });
    track('protocol_r_started');
    setStep(1);
  }
  async function toStep3() {
    if (waveCtx.waveId) await saveContext(waveCtx.waveId, ctx);
    await dispatch({ type: 'PROTOCOL_STEP_DONE', step: 1 });
    await dispatch({ type: 'PROTOCOL_STEP_DONE', step: 2 });
    setStep(3);
  }
  async function complete(planChanged: boolean) {
    if (planChanged && ctx.emotionChip) {
      await upsertPlan({
        triggerLabel: `Après un moment de ${ctx.emotionChip}`,
        ifText: `Si je sens monter ${ctx.emotionChip} en ${ctx.whereChip === 'maison' ? 'soirée à la maison' : 'situation à risque'}`,
        thenText: ctx.helperChip === 'partir_plus_tot' ? 'Je pars 30 minutes plus tôt, sans me justifier' :
                  ctx.helperChip === 'en_parler' ? 'J’envoie un message à mon allié avant le premier verre' :
                  'Je bois un grand verre d’eau et je sors marcher 5 minutes',
        source: 'post_lapse',
      });
    }
    await dispatch({ type: 'PROTOCOL_STEP_DONE', step: 3 });
    await dispatch({ type: 'PROTOCOL_COMPLETED', at: new Date().toISOString(), planChanged });
    track('protocol_r_completed');
    const rb = await reboundStats();
    setRebound({
      hours: rb.last != null ? fmtHours(rb.last) : '—',
      within: counters?.within ?? 0, total: (counters?.total ?? 0),
    });
    track('rebound_computed', { hours: rb.last ?? 0 });
  }
  async function ack() {
    await dispatch({ type: 'ACK_REBOUND' });
    router.back();
  }

  const ChipRow = ({ options, sel, onSel }: { options: readonly (readonly [string, string])[]; sel?: string; onSel: (v: string) => void }) => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 }}>
      {options.map(([slug, label]) => <Chip key={slug} label={label} selected={sel === slug} onToggle={() => onSel(slug)} />)}
    </View>
  );

  if (rebound) {
    return (
      <Ecran>
        <Titre>Ton plan a appris</Titre>
        <View style={{ backgroundColor: t.card, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: t.line, marginBottom: 16 }}>
          <Text style={{ color: t.text, fontSize: 22, fontWeight: '700', marginBottom: 8 }}>
            {rebound.within + 0} jours dans ton enveloppe sur {rebound.total}.
          </Text>
          <Text style={{ color: t.green, fontSize: 18 }}>Rebond : {rebound.hours}</Text>
          <Text style={{ color: t.sub, marginTop: 8 }}>Tu te relèves — c’est ça, la compétence.</Text>
        </View>
        <Bouton label="On continue" size="xl" onPress={() => void ack()} />
      </Ecran>
    );
  }

  return (
    <Ecran>
      {step === 0 && (
        <>
          <Titre>Content de te revoir</Titre>
          <Corps>{S.p1}</Corps>
          <View style={{ gap: 10 }}>
            <Bouton label="3 questions — 2 minutes" onPress={() => void start()} />
            <Bouton label="Plus tard" variant="ghost" onPress={() => { void dispatch({ type: 'PROTOCOL_DEFERRED' }).then(() => router.back()); }} />
          </View>
        </>
      )}
      {(step === 1 || step === 2) && (
        <>
          <Titre>Comprendre — pas juger</Titre>
          <Corps sub>Où ?</Corps>
          <ChipRow options={WHERE} sel={ctx.whereChip} onSel={(v) => setCtx((c) => ({ ...c, whereChip: v }))} />
          <Corps sub>Avec qui ?</Corps>
          <ChipRow options={WHO} sel={ctx.whoChip} onSel={(v) => setCtx((c) => ({ ...c, whoChip: v }))} />
          <Corps sub>Quelle émotion, dans les 2 heures avant ?</Corps>
          <ChipRow options={EMOTION} sel={ctx.emotionChip} onSel={(v) => setCtx((c) => ({ ...c, emotionChip: v }))} />
          <Corps sub>Qu’est-ce qui aurait pu aider ?</Corps>
          <ChipRow options={HELPER} sel={ctx.helperChip} onSel={(v) => setCtx((c) => ({ ...c, helperChip: v }))} />
          <Bouton label="Continuer" disabled={!ctx.emotionChip} onPress={() => void toStep3()} />
        </>
      )}
      {step === 3 && (
        <>
          <Titre>Une seule modification</Titre>
          <Corps>
            Ton pattern probable : {ctx.emotionChip ?? '—'} + {ctx.whereChip ?? '—'}. On change UNE chose dans ton plan — pas cinq.
          </Corps>
          <View style={{ gap: 10 }}>
            <Bouton label="Mettre à jour mon si-alors" onPress={() => void complete(true)} />
            <Bouton label="Garder mon plan tel quel" variant="secondary" onPress={() => void complete(false)} />
          </View>
        </>
      )}
    </Ecran>
  );
}
// NB: crisisPatternMatch importé pour le champ libre (V1.1 : champ libre optionnel à l'étape 2 — branché sur BR-03).
void crisisPatternMatch;
