/**
 * Müşteri Detay Ekranı
 */

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Client } from '@/types';
import { ClientsStorage } from '@/services/storage';
import { Colors, Typography, Spacing } from '@/constants';

export default function ClientDetailScreen({ route }: any) {
  const { clientId } = route.params;
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    loadClient();
  }, []);

  const loadClient = async () => {
    const data = await ClientsStorage.getById(clientId);
    setClient(data);
  };

  if (!client) {
    return (
      <View style={styles.container}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {client.firstName[0]}
            {client.lastName[0]}
          </Text>
        </View>
        <Text style={styles.name}>{client.fullName}</Text>
        <Text style={styles.email}>{client.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kişisel Bilgiler</Text>
        <InfoRow label="Telefon" value={client.phone} />
        <InfoRow label="TC Kimlik No" value={client.tcNo} />
        <InfoRow label="Cinsiyet" value={client.gender === 'female' ? 'Kadın' : 'Erkek'} />
        <InfoRow label="Doğum Tarihi" value={client.birthDate} />
        {client.address && <InfoRow label="Adres" value={client.address} />}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sağlık Bilgileri</Text>
        <InfoRow label="Durum" value={client.healthInfo.healthStatus} />
        {client.healthInfo.goals.length > 0 && (
          <InfoRow label="Hedefler" value={client.healthInfo.goals.join(', ')} />
        )}
        {client.healthInfo.notes && (
          <InfoRow label="Notlar" value={client.healthInfo.notes} />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>İstatistikler</Text>
        <InfoRow label="Toplam Seans" value={client.totalSessions.toString()} />
        <InfoRow label="Son Seans" value={client.lastSessionDate || '-'} />
        <InfoRow label="Kayıt Tarihi" value={client.registrationDate} />
      </View>
    </ScrollView>
  );
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    padding: Spacing.xl,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  avatarText: {
    color: Colors.white,
    fontSize: Typography.xxxl,
    fontWeight: Typography.bold,
  },
  name: {
    fontSize: Typography.xxl,
    fontWeight: Typography.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  email: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
  },
  section: {
    backgroundColor: Colors.white,
    marginTop: Spacing.md,
    padding: Spacing.md,
  },
  sectionTitle: {
    fontSize: Typography.lg,
    fontWeight: Typography.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  infoLabel: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
  },
  infoValue: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    fontWeight: Typography.medium,
  },
});
