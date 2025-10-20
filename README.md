# Serene Pilates CRM

Pilates stüdyoları için kapsamlı müşteri yönetim ve takip uygulaması.

## Proje Özeti

Serene Pilates CRM, pilates salonu sahiplerinin ve eğitmenlerinin müşterilerini yönetmesini, seans planlamalarını, ödeme takibini ve raporlamayı kolaylaştıran bir mobil uygulamadır.

## Özellikler

### ✅ Mevcut Özellikler (v1.0.0)

- **Kullanıcı Girişi ve Yönetimi**
  - Güvenli giriş sistemi
  - Profil yönetimi

- **Müşteri Yönetimi**
  - Detaylı müşteri kayıtları (kişisel bilgiler, TC Kimlik No, iletişim)
  - Sağlık bilgileri ve hedef takibi
  - Acil durum kişisi bilgileri
  - Müşteri arama ve filtreleme
  - Aktif/Pasif müşteri durumu

- **Seans Planlama**
  - Takvim görünümü
  - Seans ekleme/düzenleme
  - Farklı seans tipleri (Reformer, Mat, Yoga, vb.)
  - Yoklama takibi

- **Ödeme Takibi**
  - Ödeme kayıtları
  - Borç/Alacak takibi
  - Paket tanımları

- **Raporlama**
  - Müşteri istatistikleri
  - Finansal özet
  - Seans raporları

- **Ayarlar**
  - Salon bilgileri
  - Bildirim tercihleri
  - Paket ve seans tipi tanımlamaları

### 🚧 Geliştirilecek Özellikler

- [ ] Push notification sistemi
- [ ] SMS/WhatsApp entegrasyonu
- [ ] Otomatik hatırlatmalar
- [ ] Doğum günü mesajları
- [ ] Detaylı finansal raporlar
- [ ] Grafik ve analizler
- [ ] PDF export
- [ ] Yedekleme sistemi
- [ ] Backend entegrasyonu (Supabase/PostgreSQL)

## Teknik Stack

- **Framework:** React Native + Expo
- **Language:** TypeScript
- **Navigation:** React Navigation (Stack + Bottom Tabs)
- **State Management:** React Hooks
- **Storage:** AsyncStorage (JSON-based)
- **Icons:** @expo/vector-icons (Ionicons)
- **Date Handling:** date-fns

## Proje Yapısı

```
pilates/
├── App.tsx                      # Ana uygulama dosyası
├── app.json                     # Expo konfigürasyonu
├── package.json                 # Bağımlılıklar
├── tsconfig.json               # TypeScript ayarları
├── data/                       # JSON veri dosyaları
│   ├── clients.json
│   ├── sessions.json
│   ├── payments.json
│   ├── packages.json
│   └── settings.json
└── src/
    ├── components/             # Yeniden kullanılabilir bileşenler
    ├── constants/              # Sabitler ve tema
    │   ├── index.ts
    │   └── theme.ts
    ├── navigation/             # Navigation yapısı
    │   ├── RootNavigator.tsx
    │   ├── MainTabNavigator.tsx
    │   ├── ClientsNavigator.tsx
    │   ├── CalendarNavigator.tsx
    │   ├── ReportsNavigator.tsx
    │   └── SettingsNavigator.tsx
    ├── screens/                # Ekranlar
    │   ├── auth/
    │   │   └── LoginScreen.tsx
    │   ├── clients/
    │   │   ├── ClientListScreen.tsx
    │   │   ├── ClientDetailScreen.tsx
    │   │   └── ClientFormScreen.tsx
    │   ├── calendar/
    │   │   └── CalendarViewScreen.tsx
    │   ├── reports/
    │   │   └── ReportListScreen.tsx
    │   └── settings/
    │       └── SettingsListScreen.tsx
    ├── services/               # Veri servisleri
    │   └── storage.ts
    ├── types/                  # TypeScript type tanımlamaları
    │   └── index.ts
    └── utils/                  # Yardımcı fonksiyonlar
        ├── index.ts
        ├── date.ts
        └── validation.ts
```

## Kurulum

### Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn
- Expo CLI
- iOS Simulator (Mac) veya Android Studio

### Adımlar

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   # veya
   yarn install
   ```

2. **Uygulamayı başlatın:**
   ```bash
   npm start
   # veya
   yarn start
   ```

3. **Platform seçin:**
   - iOS için: `i` tuşuna basın
   - Android için: `a` tuşuna basın
   - Web için: `w` tuşuna basın

## Kullanım

### Giriş Yapma

Demo amaçlı herhangi bir e-posta ve şifre ile giriş yapabilirsiniz.

### Müşteri Ekleme

1. "Müşteriler" sekmesine gidin
2. Sağ alt köşedeki "+" butonuna tıklayın
3. Müşteri bilgilerini doldurun
4. "Kaydet" butonuna tıklayın

### Seans Planlama

1. "Takvim" sekmesine gidin
2. Tarih seçin
3. "+" butonuna tıklayın
4. Seans detaylarını girin

### Ödeme Takibi

1. Müşteri detayına gidin
2. "Ödemeler" sekmesini seçin
3. "Ödeme Ekle" butonuna tıklayın

## Veri Modeli

### Client (Müşteri)
- Kişisel bilgiler (Ad, Soyad, TC, Telefon, E-posta)
- Sağlık bilgileri
- Acil durum kişisi
- Durum (Aktif/Pasif)
- İstatistikler

### Session (Seans)
- Tarih ve saat
- Müşteri bilgisi
- Seans tipi
- Durum (Planlandı/Tamamlandı/İptal)
- Yoklama

### Payment (Ödeme)
- Tutar
- Ödenen miktar
- Kalan borç
- Ödeme yöntemi
- Tarihler

### Package (Paket)
- Ad
- Seans sayısı
- Fiyat
- Geçerlilik süresi

## Tema ve Tasarım

Uygulama yeşil tonlarında (Pilates teması) modern ve minimalist bir tasarıma sahiptir.

### Ana Renkler
- **Primary:** #4CAF50 (Yeşil)
- **Success:** #4CAF50
- **Warning:** #FF9800
- **Error:** #F44336
- **Info:** #2196F3

## Lisans

MIT

## İletişim

Sorularınız için: info@serenepilates.com

## Geliştirme Notları

### Bilinen Sorunlar
- [ ] Logout sonrası navigation güncellemesi manuel yapılmalı
- [ ] Tarih formatları Türkçe locale'e göre ayarlanmalı
- [ ] Bazı form validasyonları eksik

### Yapılacaklar
- [ ] Birim testleri ekle
- [ ] E2E testler
- [ ] CI/CD pipeline
- [ ] App Store / Play Store yayını
- [ ] Backend entegrasyonu

## Changelog

### v1.0.0 (2024-05-20)
- İlk sürüm
- Temel müşteri yönetimi
- Seans planlama
- Ödeme takibi
- Raporlama özellikleri
