# Windows'ta Serene Pilates CRM Kurulumu ve Çalıştırma

Windows bilgisayarınızda uygulamayı test etmek için 3 kolay yöntem var!

## 🎯 Seçenek 1: Web Tarayıcısında (EN KOLAY - ÖNERİLEN)

En hızlı ve kolay yöntem budur, hiçbir ekstra kurulum gerektirmez!

### Adımlar:

```bash
# 1. Proje klasörüne gidin (PowerShell veya CMD)
cd pilates

# 2. Bağımlılıkları yükleyin (ilk seferinde)
npm install

# 3. Web modunda başlatın
npm start
```

Birkaç saniye sonra terminal'de şunu göreceksiniz:
```
› Press w │ open web
```

**`w` tuşuna basın** - Tarayıcınızda otomatik açılacak!

**Avantajları:**
- ✅ Ekstra kurulum yok
- ✅ Hızlı test
- ✅ Hot reload çalışır
- ✅ Anında sonuç

**Dezavantajları:**
- ❌ Bazı native özellikler çalışmaz (kamera, bildirimler)
- ❌ Mobil görünüm için tarayıcı developer tools gerekli

### Mobil Görünüm İçin:

Tarayıcıda **F12** basın → Developer Tools açılır
- Chrome: `Ctrl + Shift + M` → Mobil görünüm
- Firefox: `Ctrl + Shift + M` → Responsive Design Mode
- Edge: `Ctrl + Shift + M` → Device Emulation

Cihaz olarak **iPhone 12** veya **Pixel 5** seçin.

---

## 🤖 Seçenek 2: Android Emulator (TAM MOBİL DENEYIM)

Gerçek Android deneyimi için Android Studio kullanın.

### Kurulum (İlk Seferinde):

#### 1. Android Studio İndirin
- [Android Studio](https://developer.android.com/studio) sitesine gidin
- "Download Android Studio" butonuna tıklayın
- İndirip kurun (yaklaşık 1 GB)

#### 2. Android Studio'yu Açın ve Emulator Kurun

```
Android Studio açıldığında:
1. "More Actions" → "Virtual Device Manager"
2. "Create Device" butonuna tıklayın
3. "Pixel 5" seçin → "Next"
4. "S" (API 31) indirin → "Next" → "Finish"
5. ▶️ (Play) butonuna tıklayın
```

Emulator açıldığında hazırsınız!

### Uygulamayı Çalıştırın:

```bash
# 1. Expo'yu başlatın
npm start

# 2. Terminal'de 'a' tuşuna basın
# VEYA
# QR kodun altında "Press a │ open Android" yazısını göreceksiniz
```

Uygulama otomatik olarak emulator'e yüklenecek!

**İpucu:** Emulator ilk açılışta yavaş olabilir, 2-3 dakika bekleyin.

---

## 📱 Seçenek 3: Fiziksel Android Telefonunuzla (EN GERÇEKÇİ)

Gerçek cihazda test en iyisidir!

### Adımlar:

#### 1. Expo Go İndirin
- Play Store'dan **"Expo Go"** arayın
- İndirin ve kurun

#### 2. Aynı WiFi'ye Bağlanın
- Telefonunuz ve bilgisayarınız **aynı WiFi ağında** olmalı
- Aynı ev/ofis WiFi'sine bağlanın

#### 3. Uygulamayı Başlatın

```bash
npm start
```

Terminal'de bir **QR kod** göreceksiniz.

#### 4. QR Kodu Tarayın
- Expo Go uygulamasını açın
- "Scan QR Code" butonuna tıklayın
- Bilgisayar ekranındaki QR kodu tarayın

Uygulama telefonunuzda açılacak! 🎉

### Sorun Giderme:

**QR kod çalışmıyorsa:**

```bash
# 1. Windows Firewall'ı geçici olarak kapatın
# Windows Güvenliği → Güvenlik Duvarı → Kapat

# 2. Manuel IP ile bağlanın
npm start
# Terminal'de gösterilen IP adresini (örn: 192.168.1.100:8081) kopyalayın
# Expo Go'da "Enter URL manually" → IP'yi yapıştırın
```

---

## 🎮 Windows-Specific İpuçları

### PowerShell mı CMD mi?

Her ikisi de çalışır! Önerim **PowerShell** (daha modern).

```powershell
# PowerShell açmak için:
# Win + X → "Windows PowerShell"
```

### Node.js Kurulumu

Eğer Node.js yüklü değilse:

1. [Node.js](https://nodejs.org/) sitesine gidin
2. "LTS" versiyonunu indirin
3. Kurun (Next, Next, Finish)
4. PowerShell'i yeniden açın
5. Test edin:
   ```bash
   node --version
   npm --version
   ```

### Path Sorunları

Eğer `npm` komutunu bulamıyorsa:

```bash
# PowerShell'i "Administrator" olarak açın
# Ardından:
npm install -g npm@latest
```

### Port Sorunları

Eğer 8081 portu kullanımdaysa:

```bash
# Farklı port ile başlatın
npx expo start --port 8082
```

---

## 🔥 Hızlı Karşılaştırma

| Yöntem | Kurulum Süresi | Hız | Gerçekçilik | Önerilen |
|--------|----------------|-----|-------------|----------|
| **Web Tarayıcı** | 0 dk | ⚡⚡⚡ | ⭐⭐ | Hızlı test için |
| **Android Emulator** | 30 dk | ⚡⚡ | ⭐⭐⭐⭐ | Tam deneyim |
| **Fiziksel Cihaz** | 5 dk | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | En iyi seçim |

---

## 🚀 Önerilen Workflow (İlk Kez)

### 1. Hızlı Test (2 dakika)
```bash
npm install
npm start
# 'w' tuşuna bas → Tarayıcıda test et
```

### 2. Telefonda Test (5 dakika)
- Expo Go indir
- QR kod tara
- Gerçek cihazda test et

### 3. Emulator Test (Gelecekte)
- Android Studio kur
- Emulator oluştur
- Detaylı test yap

---

## 💡 Windows Terminal İpuçları

### Komut Geçmişi
```bash
# Yukarı ok tuşu → Önceki komutlar
# Ctrl + R → Komut ara
```

### Temizleme
```bash
cls  # CMD için
clear  # PowerShell için
```

### Hızlı Proje Açma
```bash
# PowerShell'de proje klasörüne sağ tık
# "Open in Windows Terminal" seçeneğini kullanın
```

---

## 🎨 Ekran Görüntüsü (Windows Terminal)

Başarılı bir başlatma şöyle görünür:

```
PS C:\Users\YourName\pilates> npm start

> serene-pilates-crm@1.0.0 start
> expo start

Starting Metro Bundler
█████████████████████████████████████
█████████████████████████████████████
█████████████████████████████████████
█████████████████████████████████████
█████████████████████████████████████

› Metro waiting on exp://192.168.1.100:8081

› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press w │ open web

› Press r │ reload app
› Press ? │ show all commands

Logs for your project will appear below.
```

---

## ✅ Adım Adım Windows Kurulumu (İlk Kez)

### 1. Node.js Kontrol
```bash
node --version
# Eğer hata verirse: nodejs.org'dan indirin
```

### 2. Projeyi Klonlayın (Zaten yaptınız)
```bash
cd C:\Users\YourName\Documents
git clone <repo-url>
cd pilates
```

### 3. Bağımlılıkları Yükleyin
```bash
npm install
# 2-5 dakika bekleyin
```

### 4. Başlatın
```bash
npm start
```

### 5. Test Edin
```bash
# 'w' tuşuna basın → Tarayıcıda açılır
# VEYA
# QR kodu telefonla tarayın
# VEYA
# 'a' tuşuna basın → Android emulator (varsa)
```

---

## 🔧 Sık Karşılaşılan Windows Sorunları

### "npm is not recognized"
**Çözüm:** Node.js'i yeniden kurun ve PowerShell'i yeniden açın.

### "EACCES: permission denied"
**Çözüm:** PowerShell'i "Administrator" olarak açın.

### Firewall Uyarısı
**Çözüm:** "Allow access" butonuna tıklayın (Expo için ağ erişimi gerekli).

### Port Already in Use
**Çözüm:**
```bash
npx expo start --port 8082
```

### Metro Bundler Hatası
**Çözüm:**
```bash
# Cache'i temizle
npx expo start -c
```

---

## 🎯 Kısayollar (Windows)

```bash
# Başlat
npm start

# Web'de aç
npm start
# → 'w' tuşuna bas

# Cache temizle
npx expo start -c

# Bağımlılıkları yeniden yükle
rm -r node_modules  # PowerShell
npm install

# Type check
npm run type-check

# Lint
npm run lint
```

---

## 📞 Yardım

### Hala sorun mu yaşıyorsunuz?

1. **PowerShell'i Administrator olarak açın**
2. Şu komutları sırayla çalıştırın:
   ```bash
   cd pilates
   rm -r node_modules
   npm cache clean --force
   npm install
   npx expo start -c
   ```

3. Hala çalışmıyorsa:
   - Node.js versiyonunu kontrol edin: `node --version` (v16+ olmalı)
   - npm versiyonunu kontrol edin: `npm --version`
   - Antivirus'ü geçici olarak kapatın

---

## 🎉 İlk Başarılı Çalıştırma!

Uygulama açıldığında:

1. **Login Ekranı** göreceksiniz
   - E-posta: `test@test.com`
   - Şifre: `123456`

2. **Ana Ekran** 4 sekme:
   - 👥 Müşteriler (2 örnek var)
   - 📅 Takvim (3 örnek seans)
   - 📊 Raporlar (istatistikler)
   - ⚙️ Ayarlar

3. **Test Edin:**
   - Yeni müşteri ekleyin (+)
   - Müşteri detaylarını görün
   - Takvimi inceleyin

---

## 💻 Tavsiye Edilen Araçlar (İsteğe Bağlı)

### VS Code (Kod Editörü)
- [Visual Studio Code](https://code.visualstudio.com/) indirin
- Proje klasörünü açın: `code .`
- Önerilen uzantılar:
  - ES7+ React/Redux/React-Native
  - TypeScript
  - Prettier

### Git GUI (Git için)
- [GitHub Desktop](https://desktop.github.com/)
- Görsel Git arayüzü

### Terminal (Gelişmiş)
- [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/)
- Modern, hızlı terminal

---

## 📚 Kaynaklar

- [Expo Docs](https://docs.expo.dev/)
- [React Native Windows](https://microsoft.github.io/react-native-windows/)
- [Android Studio Guides](https://developer.android.com/studio/intro)

---

## ✨ Bonus: VS Code'da Hızlı Çalıştırma

VS Code kullanıyorsanız:

1. Proje klasöründe `Ctrl + ` (backtick) → Terminal açar
2. `npm start` yazın
3. `Ctrl + Click` → Linklere tıklayabilirsiniz

---

**Başarılar! Windows'ta React Native geliştirme çok kolay 🚀**
