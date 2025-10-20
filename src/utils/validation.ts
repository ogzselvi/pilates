/**
 * Form validasyon fonksiyonları
 */

import { VALIDATION } from '@/constants';

/**
 * Email validasyonu
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Telefon numarası validasyonu (10 haneli)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  const cleanPhone = phone.replace(/\D/g, '');
  return phoneRegex.test(cleanPhone);
};

/**
 * TC Kimlik No validasyonu
 */
export const isValidTcNo = (tcNo: string): boolean => {
  const cleanTcNo = tcNo.replace(/\D/g, '');

  if (cleanTcNo.length !== VALIDATION.tcNoLength) {
    return false;
  }

  if (cleanTcNo[0] === '0') {
    return false;
  }

  const digits = cleanTcNo.split('').map(Number);

  // İlk 10 hanenin toplamının birler basamağı 11. haneye eşit olmalı
  const sum10 = digits.slice(0, 10).reduce((acc, val) => acc + val, 0);
  if (sum10 % 10 !== digits[10]) {
    return false;
  }

  // 1, 3, 5, 7, 9. hanelerin toplamının 7 katından,
  // 2, 4, 6, 8. hanelerin toplamını çıkarttığımızda,
  // elde edilen sonucun birler basamağı 10. haneye eşit olmalı
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
  const checkDigit = (oddSum * 7 - evenSum) % 10;

  return checkDigit === digits[9];
};

/**
 * Şifre validasyonu
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= VALIDATION.minPasswordLength;
};

/**
 * Şifre gücü kontrolü
 */
export const getPasswordStrength = (password: string): {
  score: number;
  feedback: string;
} => {
  let score = 0;
  const feedback: string[] = [];

  if (password.length >= 8) {
    score++;
  } else {
    feedback.push('En az 8 karakter olmalı');
  }

  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    score++;
  } else {
    feedback.push('Büyük ve küçük harf içermeli');
  }

  if (/[0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('Sayı içermeli');
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('Özel karakter içermeli');
  }

  return {
    score,
    feedback: feedback.join(', ') || 'Güçlü şifre',
  };
};

/**
 * İsim validasyonu
 */
export const isValidName = (name: string): boolean => {
  return name.trim().length > 0 && name.length <= VALIDATION.maxNameLength;
};

/**
 * Boş alan kontrolü
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Sayı validasyonu
 */
export const isValidNumber = (value: string | number): boolean => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  return !isNaN(num) && isFinite(num);
};

/**
 * Pozitif sayı validasyonu
 */
export const isPositiveNumber = (value: string | number): boolean => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  return isValidNumber(num) && num > 0;
};

/**
 * Tarih validasyonu
 */
export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
};

/**
 * Saat validasyonu (HH:mm formatı)
 */
export const isValidTime = (time: string): boolean => {
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(time);
};

/**
 * URL validasyonu
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Telefon numarasını formatlar (5551234567 -> 555 123 45 67)
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
  }
  return phone;
};

/**
 * TC Kimlik No formatlar (12345678901 -> 123 4567 8901)
 */
export const formatTcNo = (tcNo: string): string => {
  const cleaned = tcNo.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 7)} ${cleaned.slice(7)}`;
  }
  return tcNo;
};

/**
 * Para formatlar (1234.56 -> 1.234,56 TL)
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  }).format(amount);
};

/**
 * Yüzde formatlar (0.75 -> %75)
 */
export const formatPercentage = (value: number): string => {
  return `%${(value * 100).toFixed(0)}`;
};

/**
 * Metin kısaltır (uzun metinler için)
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

/**
 * İlk harfleri büyük yapar (john doe -> John Doe)
 */
export const capitalizeWords = (text: string): string => {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Form hatası mesajları
 */
export const ERROR_MESSAGES = {
  required: 'Bu alan zorunludur',
  invalidEmail: 'Geçerli bir email adresi giriniz',
  invalidPhone: 'Geçerli bir telefon numarası giriniz (10 haneli)',
  invalidTcNo: 'Geçerli bir TC Kimlik No giriniz (11 haneli)',
  invalidPassword: `Şifre en az ${VALIDATION.minPasswordLength} karakter olmalıdır`,
  invalidNumber: 'Geçerli bir sayı giriniz',
  invalidDate: 'Geçerli bir tarih giriniz',
  invalidTime: 'Geçerli bir saat giriniz (HH:mm)',
  invalidUrl: 'Geçerli bir URL giriniz',
  maxLength: (max: number) => `Maksimum ${max} karakter olmalıdır`,
  minLength: (min: number) => `Minimum ${min} karakter olmalıdır`,
  positiveNumber: 'Pozitif bir sayı giriniz',
};
