/**
 * Takvim Ekranı
 */

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Session } from '@/types';
import { SessionsStorage } from '@/services/storage';
import { Colors, Typography, Spacing } from '@/constants';
import { formatDate, formatTimeRange } from '@/utils';

export default function CalendarViewScreen() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

  useEffect(() => {
    loadSessions();
  }, [selectedDate]);

  const loadSessions = async () => {
    const data = await SessionsStorage.getByDate(selectedDate);
    setSessions(data);
  };

  const renderSessionItem = ({ item }: { item: Session }) => (
    <View style={styles.sessionCard}>
      <View style={[styles.sessionColor, { backgroundColor: item.color || Colors.primary }]} />
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTime}>
          {formatTimeRange(item.startTime, item.endTime)}
        </Text>
        <Text style={styles.sessionClient}>{item.clientName}</Text>
        <Text style={styles.sessionType}>{item.type}</Text>
      </View>
      <View style={styles.sessionStatus}>
        <Ionicons
          name={
            item.status === 'completed'
              ? 'checkmark-circle'
              : item.status === 'cancelled'
              ? 'close-circle'
              : 'time'
          }
          size={24}
          color={
            item.status === 'completed'
              ? Colors.success
              : item.status === 'cancelled'
              ? Colors.error
              : Colors.warning
          }
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tarih Seçici */}
      <View style={styles.dateSelector}>
        <TouchableOpacity
          onPress={() => {
            const date = new Date(selectedDate);
            date.setDate(date.getDate() - 1);
            setSelectedDate(formatDate(date));
          }}
        >
          <Ionicons name="chevron-back" size={32} color={Colors.primary} />
        </TouchableOpacity>

        <Text style={styles.dateText}>{selectedDate}</Text>

        <TouchableOpacity
          onPress={() => {
            const date = new Date(selectedDate);
            date.setDate(date.getDate() + 1);
            setSelectedDate(formatDate(date));
          }}
        >
          <Ionicons name="chevron-forward" size={32} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Seans Listesi */}
      <FlatList
        data={sessions}
        renderItem={renderSessionItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="calendar-outline" size={64} color={Colors.gray400} />
            <Text style={styles.emptyText}>Bu tarihte seans bulunmuyor</Text>
          </View>
        }
      />

      {/* Yeni Seans Butonu */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={32} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: Spacing.md,
  },
  dateText: {
    fontSize: Typography.xl,
    fontWeight: Typography.semibold,
    color: Colors.textPrimary,
  },
  listContainer: {
    padding: Spacing.md,
  },
  sessionCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: Spacing.md,
    overflow: 'hidden',
  },
  sessionColor: {
    width: 6,
  },
  sessionInfo: {
    flex: 1,
    padding: Spacing.md,
  },
  sessionTime: {
    fontSize: Typography.lg,
    fontWeight: Typography.semibold,
    color: Colors.textPrimary,
  },
  sessionClient: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
    marginTop: Spacing.xs,
  },
  sessionType: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  sessionStatus: {
    justifyContent: 'center',
    paddingRight: Spacing.md,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxl,
  },
  emptyText: {
    marginTop: Spacing.md,
    fontSize: Typography.base,
    color: Colors.textSecondary,
  },
  fab: {
    position: 'absolute',
    right: Spacing.md,
    bottom: Spacing.md,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});
