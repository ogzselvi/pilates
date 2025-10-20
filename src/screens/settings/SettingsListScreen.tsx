/**
 * Ayarlar Ekranı
 */

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '@/constants';
import { AuthStorage } from '@/services/storage';

export default function SettingsListScreen({ navigation }: any) {
  const handleLogout = async () => {
    Alert.alert('Çıkış Yap', 'Çıkış yapmak istediğinize emin misiniz?', [
      { text: 'İptal', style: 'cancel' },
      {
        text: 'Çıkış Yap',
        style: 'destructive',
        onPress: async () => {
          await AuthStorage.logout();
          // Navigation will handle the redirect automatically
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Genel</Text>
        <SettingsItem icon="person" title="Profil Bilgileri" onPress={() => {}} />
        <SettingsItem icon="business" title="Salon Bilgileri" onPress={() => {}} />
        <SettingsItem icon="notifications" title="Bildirim Ayarları" onPress={() => {}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Veri Yönetimi</Text>
        <SettingsItem icon="pricetag" title="Paket Tanımları" onPress={() => {}} />
        <SettingsItem icon="fitness" title="Seans Tipleri" onPress={() => {}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Diğer</Text>
        <SettingsItem icon="help-circle" title="Yardım" onPress={() => {}} />
        <SettingsItem icon="information-circle" title="Hakkında" onPress={() => {}} />
        <SettingsItem
          icon="log-out"
          title="Çıkış Yap"
          onPress={handleLogout}
          iconColor={Colors.error}
          textColor={Colors.error}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Serene Pilates CRM v1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  iconColor = Colors.textSecondary,
  textColor = Colors.textPrimary,
}: {
  icon: any;
  title: string;
  onPress: () => void;
  iconColor?: string;
  textColor?: string;
}) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    <View style={styles.itemLeft}>
      <Ionicons name={icon} size={24} color={iconColor} />
      <Text style={[styles.itemText, { color: textColor }]}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={24} color={Colors.gray400} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  section: {
    marginTop: Spacing.md,
  },
  sectionTitle: {
    fontSize: Typography.sm,
    fontWeight: Typography.semibold,
    color: Colors.textSecondary,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
    textTransform: 'uppercase',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: Typography.base,
    marginLeft: Spacing.md,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  footerText: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
  },
});
