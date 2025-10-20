# Geliştirme Kılavuzu

Serene Pilates CRM projesine katkıda bulunmak için bu kılavuzu takip edin.

## Geliştirme Ortamı Kurulumu

### 1. Projeyi Klonlayın
```bash
git clone <repository-url>
cd pilates
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
# veya
yarn install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm start
# veya
yarn start
```

## Proje Mimarisi

### Klasör Yapısı

- **`/src/components`** - Yeniden kullanılabilir UI bileşenleri
- **`/src/screens`** - Ekran bileşenleri
- **`/src/navigation`** - Navigation yapısı
- **`/src/services`** - Veri servisleri ve business logic
- **`/src/utils`** - Yardımcı fonksiyonlar
- **`/src/types`** - TypeScript type tanımlamaları
- **`/src/constants`** - Sabitler ve tema
- **`/data`** - JSON veri dosyaları

### Navigation Yapısı

```
RootNavigator (Stack)
  └─ LoginScreen
  └─ MainTabNavigator (Bottom Tabs)
      ├─ ClientsNavigator (Stack)
      │   ├─ ClientListScreen
      │   ├─ ClientDetailScreen
      │   └─ ClientFormScreen
      ├─ CalendarNavigator (Stack)
      │   └─ CalendarViewScreen
      ├─ ReportsNavigator (Stack)
      │   └─ ReportListScreen
      └─ SettingsNavigator (Stack)
          └─ SettingsListScreen
```

## Kod Standartları

### TypeScript

- Tüm dosyalar TypeScript ile yazılmalıdır
- `any` tipinden kaçının, mümkün olduğunca spesifik tipler kullanın
- Interface'leri `/src/types/index.ts` dosyasında tanımlayın

### Kodlama Kuralları

```typescript
// İyi ✅
interface Client {
  id: string;
  name: string;
}

const getClient = async (id: string): Promise<Client | null> => {
  // implementation
};

// Kötü ❌
const getClient = async (id: any): Promise<any> => {
  // implementation
};
```

### React Component Yapısı

```typescript
/**
 * Component açıklaması
 */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

export default function MyComponent({ title, onPress }: Props) {
  // State
  const [value, setValue] = useState('');

  // Effects
  useEffect(() => {
    // effect logic
  }, []);

  // Handlers
  const handlePress = () => {
    onPress?.();
  };

  // Render
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // styles
  },
});
```

### Style Guide

- Tüm renkler `@/constants/theme.ts` dosyasından alınmalı
- Spacing değerleri `Spacing` sabitleri kullanılmalı
- Typography için `Typography` sabitleri kullanılmalı

```typescript
// İyi ✅
import { Colors, Spacing, Typography } from '@/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: Spacing.md,
  },
  text: {
    fontSize: Typography.base,
    color: Colors.textPrimary,
  },
});

// Kötü ❌
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: '#212121',
  },
});
```

## Veri Yönetimi

### Storage Kullanımı

```typescript
import { ClientsStorage } from '@/services/storage';

// Tüm müşterileri getir
const clients = await ClientsStorage.getAll();

// ID ile getir
const client = await ClientsStorage.getById(id);

// Kaydet
await ClientsStorage.save(client);

// Sil
await ClientsStorage.delete(id);

// Ara
const results = await ClientsStorage.search(query);
```

### Veri Modelleri

Tüm veri modelleri `/src/types/index.ts` dosyasında tanımlıdır:

- `Client` - Müşteri bilgileri
- `Session` - Seans bilgileri
- `Payment` - Ödeme bilgileri
- `Package` - Paket tanımları
- `User` - Kullanıcı bilgileri
- `StudioSettings` - Salon ayarları

## Yeni Özellik Ekleme

### 1. Type Tanımı
```typescript
// src/types/index.ts
export interface MyFeature {
  id: string;
  name: string;
  // ...
}
```

### 2. Storage Service
```typescript
// src/services/storage.ts
export const MyFeatureStorage = {
  getAll: async (): Promise<MyFeature[]> => {
    // implementation
  },
  // ...
};
```

### 3. Screen Oluşturma
```typescript
// src/screens/myfeature/MyFeatureScreen.tsx
export default function MyFeatureScreen() {
  // implementation
}
```

### 4. Navigation Ekleme
```typescript
// src/navigation/MyFeatureNavigator.tsx
export default function MyFeatureNavigator() {
  // implementation
}
```

## Debug

### React Native Debugger

```bash
# Chrome DevTools
npm start
# Ardından 'j' tuşuna basın
```

### Log Kullanımı

```typescript
console.log('Debug:', value);
console.error('Error:', error);
console.warn('Warning:', warning);
```

## Test (Gelecek)

```bash
# Unit testler
npm test

# E2E testler
npm run test:e2e
```

## Build

### Development Build
```bash
npx expo prebuild
```

### Production Build
```bash
# iOS
eas build --platform ios

# Android
eas build --platform android
```

## Bilinen Sorunlar ve Çözümler

### Metro Bundler Cache Temizleme
```bash
npx expo start -c
```

### Node Modules Temizleme
```bash
rm -rf node_modules
npm install
```

### iOS Pod Install
```bash
cd ios
pod install
cd ..
```

## Katkıda Bulunma

1. Feature branch oluşturun: `git checkout -b feature/amazing-feature`
2. Değişikliklerinizi commit edin: `git commit -m 'Add amazing feature'`
3. Branch'inizi push edin: `git push origin feature/amazing-feature`
4. Pull Request oluşturun

## Kaynaklar

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## İletişim

Sorularınız için issue açın veya info@serenepilates.com adresine e-posta gönderin.
