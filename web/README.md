# Serene Pilates CRM - Web Version

Modern, responsive web uygulaması.

## 🚀 Hızlı Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda açın: **http://localhost:3000**

## 📱 Özellikler

- ✅ Responsive tasarım (mobil, tablet, desktop)
- ✅ Modern UI (Tailwind CSS)
- ✅ TypeScript
- ✅ Next.js 14 App Router
- ✅ Client-side routing
- ✅ PWA desteği (yakında)

## 🎯 Ekranlar

### ✅ Tamamlanan
- **Login** - Giriş ekranı
- **Dashboard** - Ana sayfa
- **Müşteriler** - Müşteri listesi ve arama
- **Takvim** - Placeholder
- **Raporlar** - İstatistikler
- **Ayarlar** - Placeholder

### 🚧 Geliştiriliyor
- Müşteri detay sayfası
- Müşteri ekleme formu
- Seans yönetimi
- Ödeme takibi
- Detaylı raporlar

## 📦 Teknoloji Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** App Router

## 🎨 Tasarım

- **Ana Renk:** #4CAF50 (Yeşil)
- **Font:** Inter
- **Responsive:** Mobile-first

## 🔐 Giriş Bilgileri

Demo için herhangi bir email ve şifre:
```
Email: test@test.com
Şifre: 123456
```

## 📱 Mobil Uyumluluk

- ✅ iPhone, Android telefonlar
- ✅ Tablet
- ✅ Desktop
- ✅ Bottom navigation (mobil)
- ✅ Sidebar navigation (desktop)

## 🚀 Deployment

### Vercel (Önerilen)

```bash
# Vercel CLI kur
npm i -g vercel

# Deploy et
vercel
```

2 dakikada online!

### Diğer

- Netlify
- AWS Amplify
- Heroku

## 📂 Proje Yapısı

```
web/
├── app/
│   ├── dashboard/
│   │   ├── clients/      # Müşteriler
│   │   ├── calendar/     # Takvim
│   │   ├── reports/      # Raporlar
│   │   └── settings/     # Ayarlar
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Login page
├── components/           # Reusable components
├── lib/                  # Utilities
├── types/                # TypeScript types
└── public/              # Static files
```

## 🎯 Gelecek Özellikler

- [ ] Müşteri CRUD operations
- [ ] Seans planlama
- [ ] Ödeme takibi
- [ ] Bildirimler
- [ ] PWA
- [ ] Dark mode
- [ ] Export/Import
- [ ] Multi-language

## 📝 Notlar

- Local storage kullanıyor (şimdilik)
- Mock authentication
- Gerçek backend için Supabase eklenecek
