import React, { useState } from 'react';
import { Alert, Linking, Share, Text, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { router } from 'expo-router';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { CRISIS_LINES } from '@/content/strings';
import { exportAllJson, kvGet } from '@/db/dao';
import { purgeAllLocal } from '@/db/purge';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

export default function Settings() {
  const { subStatus } = useSession();
  const t = useTheme();
  const [busy, setBusy] = useState(false);

  async function exportData() {
    setBusy(true);
    try {
      const json = await exportAllJson();
      const path = `${FileSystem.cacheDirectory}lucide-export-${Date.now()}.json`;
      await FileSystem.writeAsStringAsync(path, json);
      await Share.share({ url: path, title: 'Mes données Lucide' });
    } finally { setBusy(false); }
  }
  async function exportAudio() {
    const uri = await kvGet('vault_audio_uri');
    if (!uri) { Alert.alert('Coffre vide', 'Aucun message vocal enregistré pour l’instant.'); return; }
    await Share.share({ url: uri, title: 'Mon message du coffre' });
  }
  function deleteAll() {
    Alert.alert('Tout supprimer ?', 'Toutes tes données locales (parcours, coffre, preuves) seront effacées. Définitif.',
      [{ text: 'Annuler', style: 'cancel' },
       { text: 'Supprimer', style: 'destructive', onPress: () => { void purgeAllLocal().then(() => router.replace('/(onboarding)/welcome')); } }]);
  }

  return (
    <Ecran>
      <Titre>Réglages</Titre>
      <Text style={{ color: t.sub, fontSize: 14, marginBottom: 4 }}>ABONNEMENT</Text>
      <Corps>{subStatus === 'trial' ? 'Essai en cours.' : subStatus === 'active' ? 'Abonnée.' : 'Version gratuite — le SOS et la sécurité sont à toi pour toujours.'}</Corps>
      <Bouton label="Gérer mon abonnement" variant="secondary"
        onPress={() => void Linking.openURL('https://apps.apple.com/account/subscriptions')} />

      <Text style={{ color: t.sub, fontSize: 14, marginVertical: 8 }}>MES DONNÉES</Text>
      <View style={{ gap: 8 }}>
        <Bouton label={busy ? 'Export en cours…' : 'Exporter mes données (JSON)'} variant="secondary" disabled={busy} onPress={() => void exportData()} />
        <Bouton label="Exporter mon message du coffre (audio)" variant="secondary" onPress={() => void exportAudio()} />
        <Bouton label="Tout supprimer de cet appareil" variant="secondary" onPress={deleteAll} />
        {/* TODO(LUC-48): quand le backend est branché, la suppression déclenche AUSSI /delete-account (purge serveur ≤ 30 j). */}
      </View>

      <Text style={{ color: t.sub, fontSize: 14, marginVertical: 8 }}>NOTRE CHARTE, EN 5 LIGNES</Text>
      <Corps sub>
        Jamais de publicité. Jamais de vente de données. Jamais de remise à zéro de tes compteurs.
        Jamais de vente quand tu vas mal. Le SOS reste gratuit, pour toujours.
      </Corps>

      <Text style={{ color: t.sub, fontSize: 14, marginVertical: 8 }}>URGENCES</Text>
      {CRISIS_LINES.map((l) => (
        <Bouton key={l.tel} label={l.label} variant="ghost" onPress={() => void Linking.openURL(`tel:${l.tel}`)} />
      ))}
    </Ecran>
  );
}
