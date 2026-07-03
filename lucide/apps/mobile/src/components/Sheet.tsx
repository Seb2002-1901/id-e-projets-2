import React from 'react';
import { Modal, Pressable, ScrollView, View } from 'react-native';
import { radius, space } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

export function Sheet({ visible, onClose, children }: { visible: boolean; onClose: () => void; children: React.ReactNode }) {
  const t = useTheme();
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable accessibilityLabel="Fermer" style={{ flex: 1, backgroundColor: '#0008' }} onPress={onClose} />
      <View style={{ backgroundColor: t.bg, borderTopLeftRadius: radius.card, borderTopRightRadius: radius.card, maxHeight: '80%' }}>
        <View style={{ width: 44, height: 5, borderRadius: 3, backgroundColor: t.line, alignSelf: 'center', marginTop: 8 }} />
        <ScrollView contentContainerStyle={{ padding: space.l }}>{children}</ScrollView>
      </View>
    </Modal>
  );
}
