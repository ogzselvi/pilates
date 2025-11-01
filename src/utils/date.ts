/**
 * Tarih ve saat işlemleri için yardımcı fonksiyonlar
 */

import { format, parse, isValid, addDays, subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameDay, isBefore, isAfter } from 'date-fns';

/**
 * Tarihi YYYY-MM-DD formatına çevirir
 */
export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, 'yyyy-MM-dd');
};

/**
 * Tarihi DD/MM/YYYY formatına çevirir (Görüntüleme için)
 */
export const formatDateDisplay = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, 'dd/MM/yyyy');
};

/**
 * Tarihi uzun formatta gösterir (örn: 18 Mayıs 2024, Cumartesi)
 */
export const formatDateLong = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, 'dd/MM/yyyy');
};

/**
 * Saati HH:mm formatına çevirir
 */
export const formatTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, 'HH:mm');
};

/**
 * Tarihi ve saati birlikte gösterir
 */
export const formatDateTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, 'dd/MM/yyyy HH:mm');
};

/**
 * String tarihi Date objesine çevirir
 */
export const parseDate = (dateString: string): Date => {
  return new Date(dateString);
};

/**
 * Tarihin geçerli olup olmadığını kontrol eder
 */
export const isValidDate = (date: any): boolean => {
  return date instanceof Date && isValid(date);
};

/**
 * Bugünün tarihini döndürür
 */
export const getToday = (): string => {
  return formatDate(new Date());
};

/**
 * Şu anki saati döndürür
 */
export const getCurrentTime = (): string => {
  return formatTime(new Date());
};

/**
 * İki tarihin aynı gün olup olmadığını kontrol eder
 */
export const isSameDayDate = (date1: Date | string, date2: Date | string): boolean => {
  const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
  return isSameDay(d1, d2);
};

/**
 * Tarih geçmişte mi kontrol eder
 */
export const isPast = (date: Date | string): boolean => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return isBefore(d, new Date());
};

/**
 * Tarih gelecekte mi kontrol eder
 */
export const isFuture = (date: Date | string): boolean => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return isAfter(d, new Date());
};

/**
 * Tarihe gün ekler
 */
export const addDaysToDate = (date: Date | string, days: number): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return formatDate(addDays(d, days));
};

/**
 * Tarihten gün çıkarır
 */
export const subtractDaysFromDate = (date: Date | string, days: number): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return formatDate(subDays(d, days));
};

/**
 * Haftanın başlangıç tarihini döndürür (Pazartesi)
 */
export const getWeekStart = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return formatDate(startOfWeek(d, { weekStartsOn: 1 }));
};

/**
 * Haftanın bitiş tarihini döndürür (Pazar)
 */
export const getWeekEnd = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return formatDate(endOfWeek(d, { weekStartsOn: 1 }));
};

/**
 * Ayın başlangıç tarihini döndürür
 */
export const getMonthStart = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return formatDate(startOfMonth(d));
};

/**
 * Ayın bitiş tarihini döndürür
 */
export const getMonthEnd = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return formatDate(endOfMonth(d));
};

/**
 * Yaş hesaplar
 */
export const calculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

/**
 * İki tarih arasındaki gün sayısını hesaplar
 */
export const daysBetween = (date1: Date | string, date2: Date | string): number => {
  const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Göreceli zaman (örn: "2 saat önce", "3 gün önce")
 */
export const getRelativeTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return 'Az önce';
  if (diffMin < 60) return `${diffMin} dakika önce`;
  if (diffHour < 24) return `${diffHour} saat önce`;
  if (diffDay < 7) return `${diffDay} gün önce`;
  if (diffDay < 30) return `${Math.floor(diffDay / 7)} hafta önce`;
  if (diffDay < 365) return `${Math.floor(diffDay / 30)} ay önce`;
  return `${Math.floor(diffDay / 365)} yıl önce`;
};

/**
 * Saat aralığı oluşturur (örn: "09:00 - 10:00")
 */
export const formatTimeRange = (startTime: string, endTime: string): string => {
  return `${startTime} - ${endTime}`;
};

/**
 * Dakikayı saat:dakika formatına çevirir
 */
export const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
};

/**
 * Saat:dakika formatını dakikaya çevirir
 */
export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};
