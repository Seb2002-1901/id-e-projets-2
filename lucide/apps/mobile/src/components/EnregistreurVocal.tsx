/** Enregistrement du coffre (expo-audio). Fichier local sandbox. 90 s max.
 *  TODO(LUC-16/§11): chiffrement libsodium avant tout upload — en V1-dev l'audio reste LOCAL uniquement. */
import { AudioModule, RecordingPresets, setAudioModeAsync, useAudioPlayer, useAudioRecorder } from 'expo-audio';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Bouton } from './Bouton';
import { useTheme } from '@/theme/useTheme';

export function EnregistreurVocal({ onSaved }: { onSaved: (uri: string) => void }) {
  const t = useTheme();
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY!);
  const [state, setState] = useState<'idle' | 'recording' | 'recorded' | 'denied'>('idle');
  const [uri, setUri] = useState<string | null>(null);
  const player = useAudioPlayer(uri ?? undefined);

  useEffect(() => {
    void (async () => {
      const p = await AudioModule.requestRecordingPermissionsAsync();
      if (!p.granted) setState('denied');
      await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });
    })();
  }, []);

  async function start() {
    await recorder.prepareToRecordAsync();
    recorder.record();
    setState('recording');
    setTimeout(() => { void stop(); }, 90_000); // cap 90 s
  }
  async function stop() {
    if (recorder.isRecording) await recorder.stop();
    const u = recorder.uri;
    if (u) { setUri(u); setState('recorded'); onSaved(u); }
  }

  if (state === 'denied') {
    return <Text style={{ color: t.sub }}>Micro refusé — tu peux continuer et enregistrer plus tard depuis Mon plan.</Text>;
  }
  return (
    <View style={{ gap: 12 }}>
      {state === 'recording' ? (
        <>
          <Text style={{ color: t.accent, fontSize: 18, textAlign: 'center' }}>● Enregistrement… parle-toi.</Text>
          <Bouton label="Terminer" onPress={() => void stop()} />
        </>
      ) : state === 'recorded' ? (
        <>
          <Bouton label="Réécouter" variant="secondary" onPress={() => { player.seekTo(0); player.play(); }} />
          <Bouton label="Refaire" variant="ghost" onPress={() => void start()} />
        </>
      ) : (
        <Bouton label="🎙️ Enregistrer (30-60 s)" size="xl" onPress={() => void start()} />
      )}
    </View>
  );
}
