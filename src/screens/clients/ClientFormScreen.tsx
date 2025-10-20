/**
 * Müşteri Ekleme/Düzenleme Ekranı
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Client } from '@/types';
import { ClientsStorage } from '@/services/storage';
import { Colors, Typography, Spacing, Layout } from '@/constants';
import { generateId } from '@/utils';

export default function ClientFormScreen({ navigation, route }: any) {
  const { clientId } = route.params || {};
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tcNo, setTcNo] = useState('');

  const handleSave = async () => {
    const client: Client = {
      id: clientId || generateId(),
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      tcNo,
      phone,
      email,
      gender: 'female',
      birthDate: new Date().toISOString().split('T')[0],
      healthInfo: {
        healthStatus: 'Sağlıklı',
        allergies: [],
        medications: [],
        goals: [],
      },
      status: 'active',
      registrationDate: new Date().toISOString().split('T')[0],
      totalSessions: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await ClientsStorage.save(client);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Ad *</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Adı giriniz"
        />

        <Text style={styles.label}>Soyad *</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Soyadı giriniz"
        />

        <Text style={styles.label}>Telefon *</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="5551234567"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>E-posta</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="ornek@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>TC Kimlik No *</Text>
        <TextInput
          style={styles.input}
          value={tcNo}
          onChangeText={setTcNo}
          placeholder="12345678901"
          keyboardType="number-pad"
          maxLength={11}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  form: {
    padding: Spacing.md,
  },
  label: {
    fontSize: Typography.base,
    fontWeight: Typography.medium,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
    marginTop: Spacing.md,
  },
  input: {
    height: Layout.inputHeight,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Layout.inputBorderRadius,
    paddingHorizontal: Spacing.md,
    fontSize: Typography.base,
    backgroundColor: Colors.white,
  },
  saveButton: {
    height: Layout.buttonHeight,
    backgroundColor: Colors.primary,
    borderRadius: Layout.buttonBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  saveButtonText: {
    color: Colors.white,
    fontSize: Typography.lg,
    fontWeight: Typography.semibold,
  },
});
