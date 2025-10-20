/**
 * Uygulama sabitleri
 */

import { SessionType, PaymentMethod } from '@/types';

// Seans Tipleri
export const SESSION_TYPES: { value: SessionType; label: string; icon: string }[] = [
  { value: 'reformer', label: 'Reformer', icon: 'fitness' },
  { value: 'mat', label: 'Mat', icon: 'accessibility' },
  { value: 'yoga', label: 'Yoga', icon: 'self-improvement' },
  { value: 'group', label: 'Grup Dersi', icon: 'groups' },
  { value: 'private', label: 'Özel Ders', icon: 'person' },
  { value: 'other', label: 'Diğer', icon: 'more-horiz' },
];

// Ödeme Yöntemleri
export const PAYMENT_METHODS: { value: PaymentMethod; label: string; icon: string }[] = [
  { value: 'cash', label: 'Nakit', icon: 'money' },
  { value: 'card', label: 'Kredi Kartı', icon: 'credit-card' },
  { value: 'transfer', label: 'Havale/EFT', icon: 'account-balance' },
  { value: 'other', label: 'Diğer', icon: 'more-horiz' },
];

// Cinsiyet
export const GENDERS = [
  { value: 'male', label: 'Erkek' },
  { value: 'female', label: 'Kadın' },
  { value: 'other', label: 'Diğer' },
];

// Akrabalık Dereceleri
export const RELATIONSHIPS = [
  { value: 'mother', label: 'Anne' },
  { value: 'father', label: 'Baba' },
  { value: 'spouse', label: 'Eş' },
  { value: 'sibling', label: 'Kardeş' },
  { value: 'friend', label: 'Arkadaş' },
  { value: 'other', label: 'Diğer' },
];

// Haftalık Günler
export const WEEKDAYS = [
  { value: 'monday', label: 'Pazartesi', short: 'Pzt' },
  { value: 'tuesday', label: 'Salı', short: 'Sal' },
  { value: 'wednesday', label: 'Çarşamba', short: 'Çar' },
  { value: 'thursday', label: 'Perşembe', short: 'Per' },
  { value: 'friday', label: 'Cuma', short: 'Cum' },
  { value: 'saturday', label: 'Cumartesi', short: 'Cmt' },
  { value: 'sunday', label: 'Pazar', short: 'Paz' },
];

// Aylar
export const MONTHS = [
  { value: 0, label: 'Ocak', short: 'Oca' },
  { value: 1, label: 'Şubat', short: 'Şub' },
  { value: 2, label: 'Mart', short: 'Mar' },
  { value: 3, label: 'Nisan', short: 'Nis' },
  { value: 4, label: 'Mayıs', short: 'May' },
  { value: 5, label: 'Haziran', short: 'Haz' },
  { value: 6, label: 'Temmuz', short: 'Tem' },
  { value: 7, label: 'Ağustos', short: 'Ağu' },
  { value: 8, label: 'Eylül', short: 'Eyl' },
  { value: 9, label: 'Ekim', short: 'Eki' },
  { value: 10, label: 'Kasım', short: 'Kas' },
  { value: 11, label: 'Aralık', short: 'Ara' },
];

// Tekrarlama Desenleri
export const RECURRING_PATTERNS = [
  { value: 'daily', label: 'Her Gün' },
  { value: 'weekly', label: 'Her Hafta' },
  { value: 'biweekly', label: 'İki Haftada Bir' },
  { value: 'monthly', label: 'Her Ay' },
];

// Rapor Dönemleri
export const REPORT_PERIODS = [
  { value: 'daily', label: 'Günlük' },
  { value: 'weekly', label: 'Haftalık' },
  { value: 'monthly', label: 'Aylık' },
  { value: 'yearly', label: 'Yıllık' },
];

// Varsayılan Değerler
export const DEFAULTS = {
  sessionDuration: 60, // dakika
  sessionType: 'reformer' as SessionType,
  reminderHours: 2, // seans öncesi
  paymentReminderDays: 3, // ödeme tarihi öncesi
  inactiveDays: 30, // pasif müşteri için
  profileImage: 'https://via.placeholder.com/150',
};

// Validasyon
export const VALIDATION = {
  tcNoLength: 11,
  phoneLength: 10,
  minPasswordLength: 6,
  maxNameLength: 50,
  maxNoteLength: 500,
  maxAddressLength: 200,
};

// Bildirim Mesajları
export const NOTIFICATION_TEMPLATES = {
  sessionReminder: (clientName: string, time: string) =>
    `Merhaba ${clientName}, bugün saat ${time}'de seansınız var. Görüşmek üzere!`,
  paymentReminder: (clientName: string, amount: number) =>
    `Merhaba ${clientName}, ${amount} TL tutarındaki ödemenizin vadesi yaklaşıyor.`,
  birthday: (clientName: string) =>
    `Doğum gününüz kutlu olsun ${clientName}! Size özel hediyemiz var 🎉`,
  inactiveClient: (clientName: string, days: number) =>
    `${clientName} son ${days} gündür seans almadı. İletişime geçmeyi unutmayın.`,
};

// Data Dosya Yolları
export const DATA_FILES = {
  users: 'data/users.json',
  clients: 'data/clients.json',
  sessions: 'data/sessions.json',
  payments: 'data/payments.json',
  packages: 'data/packages.json',
  settings: 'data/settings.json',
  notifications: 'data/notifications.json',
};

export * from './theme';
