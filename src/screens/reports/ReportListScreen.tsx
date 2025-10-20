/**
 * Raporlar Ekranı
 */

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ClientsStorage, SessionsStorage, PaymentsStorage } from '@/services/storage';
import { Colors, Typography, Spacing } from '@/constants';
import { formatCurrency } from '@/utils';

export default function ReportListScreen() {
  const [totalClients, setTotalClients] = useState(0);
  const [activeSessions, setActiveSessions] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [unpaidAmount, setUnpaidAmount] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    // Müşteriler
    const clients = await ClientsStorage.getAll();
    setTotalClients(clients.length);

    // Seanslar
    const sessions = await SessionsStorage.getAll();
    const active = sessions.filter(s => s.status === 'scheduled');
    setActiveSessions(active.length);

    // Ödemeler
    const payments = await PaymentsStorage.getAll();
    const revenue = payments.reduce((sum, p) => sum + p.paidAmount, 0);
    const unpaid = payments.reduce((sum, p) => sum + p.remainingAmount, 0);
    setTotalRevenue(revenue);
    setUnpaidAmount(unpaid);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.statsGrid}>
        <StatCard
          icon="people"
          title="Toplam Müşteri"
          value={totalClients.toString()}
          color={Colors.primary}
        />
        <StatCard
          icon="calendar"
          title="Aktif Seanslar"
          value={activeSessions.toString()}
          color={Colors.info}
        />
        <StatCard
          icon="cash"
          title="Toplam Gelir"
          value={formatCurrency(totalRevenue)}
          color={Colors.success}
        />
        <StatCard
          icon="alert-circle"
          title="Ödenmemiş"
          value={formatCurrency(unpaidAmount)}
          color={Colors.warning}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Finansal Özet</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Aylık rapor geliştirilme aşamasında...</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Müşteri İstatistikleri</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Müşteri raporları geliştirilme aşamasında...</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const StatCard = ({
  icon,
  title,
  value,
  color,
}: {
  icon: any;
  title: string;
  value: string;
  color: string;
}) => (
  <View style={styles.statCard}>
    <Ionicons name={icon} size={32} color={color} />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Spacing.sm,
  },
  statCard: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.md,
    margin: '1%',
    alignItems: 'center',
  },
  statValue: {
    fontSize: Typography.xxl,
    fontWeight: Typography.bold,
    color: Colors.textPrimary,
    marginTop: Spacing.sm,
  },
  statTitle: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
    textAlign: 'center',
  },
  section: {
    marginTop: Spacing.md,
    paddingHorizontal: Spacing.md,
  },
  sectionTitle: {
    fontSize: Typography.lg,
    fontWeight: Typography.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.md,
  },
  cardText: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
