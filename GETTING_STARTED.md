# Serene Pilates CRM - Kurulum ve Çalıştırma Rehberi

## 📋 Gereksinimler

### Temel Gereksinimler
- **Node.js** (v16 veya üzeri) - [İndir](https://nodejs.org/)
- **npm** veya **yarn** (Node.js ile birlikte gelir)
- **Git** (zaten kullanıyorsunuz)

### Platform-Specific

#### iOS için (sadece Mac):
- **Xcode** (App Store'dan)
- **iOS Simulator** (Xcode ile birlikte gelir)

#### Android için:
- **Android Studio** - [İndir](https://developer.android.com/studio)
- **Android Emulator** (Android Studio ile kurulur)

#### Veya En Kolay Yol:
- **Expo Go** uygulamasını telefonunuza indirin:
  - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
  - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

## 🛠️ Kurulum Adımları

### Adım 1: Bağımlılıkları Yükleyin

```bash
# Proje klasörüne gidin
cd pilates

# Node bağımlılıklarını yükleyin
npm install

# veya yarn kullanıyorsanız
yarn install
```

Bu işlem 2-5 dakika sürebilir (internet hızınıza bağlı).

---

## 🎮 Çalıştırma Seçenekleri

### Seçenek 1: Expo Go ile (En Kolay - ÖNERİLEN)

Bu yöntem gerçek cihazınızda veya emülatörde test etmenizi sağlar:

```bash
# Geliştirme sunucusunu başlatın
npm start

# veya
yarn start

# veya
npx expo start
```

Terminal'de bir QR kod ve seçenekler göreceksiniz:

```
› Metro waiting on exp://192.168.1.100:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press ? │ show all commands
```

**Gerçek Cihazda Çalıştırma:**
1. Telefonunuzda **Expo Go** uygulamasını açın
2. QR kodu tarayın
3. Uygulama yüklenecek ve çalışacak!

**Emülatörde Çalıştırma:**
- Android için: `a` tuşuna basın
- iOS için (sadece Mac): `i` tuşuna basın

---

### Seçenek 2: Web'de Önizleme

Hızlı bir önizleme için web versiyonunu çalıştırabilirsiniz:

```bash
npm start
# Ardından 'w' tuşuna basın

# veya doğrudan
npm run web
```

Tarayıcınızda `http://localhost:8081` açılacak.

**Not:** Bazı native özellikler (kamera, bildirimler) web'de çalışmaz.

---

### Seçenek 3: Development Build (İleri Düzey)

Daha fazla kontrol istiyorsanız:

```bash
# iOS için (sadece Mac)
npm run ios

# Android için
npm run android
```

---

## 📱 İlk Çalıştırma ve Test

### Giriş Bilgileri

Uygulama açıldığında login ekranını göreceksiniz:
- **E-posta:** Herhangi bir metin (örn: `test@test.com`)
- **Şifre:** Herhangi bir metin (örn: `123456`)

**Not:** Şu anda mock authentication kullanıyoruz, herhangi bir bilgi ile giriş yapabilirsiniz.

### Test Senaryoları

#### 1. Müşterileri Görüntüleme
- Ana ekranda "Müşteriler" sekmesine tıklayın
- 2 örnek müşteri göreceksiniz (Elif Yılmaz, Ayşe Demir)
- Müşteriye tıklayarak detayları görün

#### 2. Yeni Müşteri Ekleme
- Müşteriler ekranında sağ alttaki "+" butonuna tıklayın
- Formu doldurun:
  - Ad: `Mehmet`
  - Soyad: `Yılmaz`
  - Telefon: `5551234567`
  - E-posta: `mehmet@test.com`
  - TC: `12345678901`
- "Kaydet" butonuna tıklayın
- Yeni müşteri listeye eklenecek

#### 3. Takvimi Görüntüleme
- "Takvim" sekmesine geçin
- Bugünün seanslarını görün
- Ok tuşları ile tarihler arası gezinin

#### 4. Raporları İnceleme
- "Raporlar" sekmesine gidin
- İstatistikleri görüntüleyin

#### 5. Çıkış Yapma
- "Ayarlar" sekmesine gidin
- "Çıkış Yap" seçeneğine tıklayın
- Login ekranına döneceksiniz

---

## 🔧 Sorun Giderme

### Problem: Metro bundler başlamıyor

```bash
# Cache'i temizleyip yeniden başlatın
npx expo start -c
```

### Problem: Bağımlılık hataları

```bash
# node_modules'ı silin ve yeniden yükleyin
rm -rf node_modules
npm install

# veya
yarn install
```

### Problem: TypeScript hataları

```bash
# TypeScript'i kontrol edin
npm run type-check
```

### Problem: Expo Go ile bağlanamıyor

1. Bilgisayar ve telefon **aynı WiFi ağında** olmalı
2. Firewall kapalı olmalı
3. QR kod yerine **manuel olarak IP girin**:
   - Expo Go'da "Enter URL manually" seçin
   - Terminal'de gösterilen URL'i girin (örn: `exp://192.168.1.100:8081`)

### Problem: Port zaten kullanımda

```bash
# Farklı port ile başlatın
npx expo start --port 8082
```

---

## 🎯 Geliştirme İpuçları

### Hot Reload (Otomatik Yenileme)

- Kod değişiklikleriniz **otomatik olarak** uygulamaya yansır
- `r` tuşuna basarak manuel reload yapabilirsiniz

### Debug Menu

Uygulamada:
- **iOS:** Cmd + D
- **Android:** Cmd/Ctrl + M
- **Fiziksel cihaz:** Cihazı sallayın!

### Console Logs

```typescript
// Kodunuzda log kullanın
console.log('Debug:', value);
```

Loglar terminal'de görünecek.

### React Developer Tools

```bash
# React DevTools'u yükleyin
npm install -g react-devtools
react-devtools
```

---

## 📦 Örnek Komutlar

```bash
# Sunucuyu başlat
npm start

# Android emülatörde aç
npm start
# Ardından 'a' tuşuna bas

# iOS simulator'da aç (Mac)
npm start
# Ardından 'i' tuşuna bas

# Web'de aç
npm start
# Ardından 'w' tuşuna bas

# Cache temizle ve başlat
npx expo start -c

# TypeScript kontrolü
npm run type-check

# Lint kontrolü
npm run lint
```

---

## 🎨 Uygulama Özellikleri

### Mevcut Ekranlar:
1. **Giriş Ekranı** - Login
2. **Müşteriler** - Liste, Detay, Form
3. **Takvim** - Seans görünümü
4. **Raporlar** - İstatistikler
5. **Ayarlar** - Yapılandırma

### Örnek Veri:
- 2 Müşteri (Elif Yılmaz, Ayşe Demir)
- 3 Seans
- 2 Ödeme kaydı
- 4 Paket tanımı

---

## 📞 Yardım

Sorun yaşarsanız:

1. **Terminal çıktısını** kontrol edin
2. **Expo Go app loglarını** kontrol edin
3. `npx expo start -c` ile cache temizleyin
4. `npm install` ile bağımlılıkları yenileyin

---

## 🎓 Öğrenme Kaynakları

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## ✅ Hızlı Başlangıç (TL;DR)

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Expo Go'yu telefonuna indir
# iOS: App Store
# Android: Play Store

# 3. Başlat
npm start

# 4. QR kodu tara
# Expo Go ile QR kodu okut

# 5. Giriş yap
# E-posta: test@test.com
# Şifre: 123456

# Hepsi bu kadar! 🎉
```
