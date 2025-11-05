# Serene Pilates CRM - Web Version Migration

Bu proje web tabanlı (Next.js) versiyona geçirilmiştir.

## Neden Web?

✅ Daha kolay geliştirme
✅ Windows'ta sorunsuz çalışır
✅ Anında deployment
✅ Responsive tasarım (telefon + tablet + PC)
✅ PWA desteği (native-like)
✅ Düşük maliyet

## Proje Yapısı

```
pilates/
├── mobile/          # React Native versiyon (eski)
└── web/            # Next.js versiyon (yeni - aktif)
    ├── app/        # Next.js 14 App Router
    ├── components/ # React bileşenleri
    ├── lib/        # Utilities
    └── public/     # Static assets
```

## Web Versiyonunu Çalıştırma

```bash
cd web
npm install
npm run dev
```

Tarayıcıda: http://localhost:3000

## Özellikler

- ✅ Responsive tasarım
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ PWA desteği
- ✅ Dark mode (opsiyonel)
- ✅ Tüm CRUD işlemleri
