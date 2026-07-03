import React from 'react';
import { Alert, Linking, Text, View } from 'react-native';
import { Bouton } from '@/components/Bouton';
import { Ecran } from '@/components/Ecran';
import { Corps, Titre } from '@/components/Titre';
import { CRISIS_LINES } from '@/content/strings';
import { useSession } from '@/stores/session';
import { useTheme } from '@/theme/useTheme';

export default function Settings() {
  const { subStatus } = useSession();
  const t = useTheme();
  return (
    <Ecran>
      <Titre>Réglages</Titre>
      <Text style={{ color: t.sub, fontSize: 14, marginBottom: 4 }}>ABONNEMENT</Text>
      <Corps>{subStatus === 'trial' ? 'Essai en cours' : subStatus === 'active' ? 'Abonnée' : 'Version gratuite — le SOS et la sécurité sont à toi pour toujours.'}</Corps>
      {/* TODO(LUC-46): showManageSubscriptions() StoreKit — annulation 1 tap, sans écran de rétention. */}
      <Bouton label="Gérer mon abonnement" variant="secondary"
        onPress={() => void Linking.openURL('https://apps.apple.com/account/subscriptions')} />

      <Text style={{ color: t.sub, fontSize: 14, marginVertical: 8 }}>MES DONNÉES</Text>
      <View style={{ gap: 8 }}>
        {/* TODO(LUC-47): export complet (JSON serveur + audio local via share sheet — décision C5). */}
        <Bouton label="Exporter toutes mes données" variant="secondary"
          onPress={() => Alert.alert('Export', 'Disponible dès la connexion du backend (LUC-47). Tes données sont pour l’instant uniquement sur cet appareil.')} />
        {/* TODO(LUC-48): suppression serveur + purge ≤ 30 j. En local : réinitialisation appareil. */}
        <Bouton label="Supprimer mon compte et mes données" variant="secondary"
          onPress={() => Alert.alert('Supprimer ?', 'Toutes tes données locales seront effacées. Cette action est définitive.',
            [{ text: 'Annuler', style: 'cancel' }, { text: 'Supprimer', style: 'destructive', onPress: () => Alert.alert('TODO', 'Purge locale branchée en LUC-48.') }])} />
      </View>

      <Text style={{ color: t.sub, fontSize: 14, marginVertical: 8 }}>NOTRE CHARTE, EN 5 LIGNES</Text>
      <Corps sub>
        Jamais de publicité. Jamais de vente de données. Jamais de « jour zéro ». Jamais de vente quand tu vas mal.
        Le SOS reste gratuit, pour toujours.
      </Corps>

      <Text style={{ color: t.sub, fontSize: 14, marginVertical: 8 }}>URGENCES</Text>
      {CRISIS_LINES.map((l) => (
        <Bouton key={l.tel} label={l.label} variant="ghost" onPress={() => void Linking.openURL(`tel:${l.tel}`)} />
      ))}
    </Ecran>
  );
}
