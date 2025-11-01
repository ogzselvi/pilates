/**
 * Giriş Ekranı
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Colors, Typography, Spacing, Layout } from '@/constants';
import { AuthStorage } from '@/services/storage';

export default function LoginScreen({ onLogin }: { onLogin?: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Basit validasyon
    if (!email || !password) {
      return;
    }

    setLoading(true);
    try {
      // Mock authentication
      await AuthStorage.saveToken('mock-token-123');
      await AuthStorage.saveUser({
        id: 'user-1',
        email: email,
        name: 'Demo Kullanıcı',
        phone: '5551234567',
        role: 'owner',
        studioName: 'Serene Pilates Studio',
        createdAt: new Date().toISOString(),
      });

      // App.tsx'e bildir
      if (onLogin) {
        onLogin();
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Logo Area */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Serene Pilates</Text>
          <Text style={styles.subtitle}>Müşteri Yönetim Sistemi</Text>
        </View>

        {/* Form Area */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-posta"
            placeholderTextColor={Colors.gray400}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor={Colors.gray400}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.loginButton, loading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.loginButtonText}>
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>v1.0.0</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  logoText: {
    fontSize: Typography.xxxl,
    fontWeight: Typography.bold,
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.base,
    color: Colors.textSecondary,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: Layout.inputHeight,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Layout.inputBorderRadius,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    fontSize: Typography.base,
    backgroundColor: Colors.white,
  },
  loginButton: {
    height: Layout.buttonHeight,
    backgroundColor: Colors.primary,
    borderRadius: Layout.buttonBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: Typography.lg,
    fontWeight: Typography.semibold,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  forgotPasswordText: {
    color: Colors.primary,
    fontSize: Typography.sm,
  },
  footer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  footerText: {
    color: Colors.textSecondary,
    fontSize: Typography.xs,
  },
});
