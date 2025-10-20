/**
 * Serene Pilates CRM - Type Definitions
 * Tüm uygulama için type ve interface tanımlamaları
 */

// ============================================
// KULLANICI VE AUTH TİPLERİ
// ============================================

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'owner' | 'instructor';
  studioName: string;
  createdAt: string;
  profileImage?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// ============================================
// MÜŞTERİ TİPLERİ
// ============================================

export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string; // Anne, Baba, Eş, Kardeş, Arkadaş, Diğer
}

export interface HealthInfo {
  healthStatus: string;
  allergies: string[];
  medications: string[];
  goals: string[];
  notes?: string;
}

export interface Client {
  id: string;
  // Kişisel Bilgiler
  firstName: string;
  lastName: string;
  fullName: string; // Computed: firstName + lastName
  tcNo: string; // TC Kimlik No
  phone: string;
  email?: string;
  gender: 'male' | 'female' | 'other';
  birthDate: string; // ISO format
  address?: string;
  profileImage?: string;

  // Acil Durum İletişim
  emergencyContact?: EmergencyContact;

  // Sağlık Bilgileri
  healthInfo: HealthInfo;

  // Durum
  status: 'active' | 'passive';

  // Takip
  registrationDate: string;
  lastSessionDate?: string;
  totalSessions: number;

  // Notlar
  notes?: string;

  // Meta
  createdAt: string;
  updatedAt: string;
}

// ============================================
// SEANS TİPLERİ
// ============================================

export type SessionType =
  | 'reformer'
  | 'mat'
  | 'yoga'
  | 'group'
  | 'private'
  | 'other';

export type SessionStatus =
  | 'scheduled' // Planlandı
  | 'completed' // Tamamlandı
  | 'cancelled' // İptal edildi
  | 'postponed' // Ertelendi
  | 'no-show'; // Gelmedi

export type AttendanceStatus =
  | 'present' // Geldi
  | 'absent' // Gelmedi
  | 'late' // Geç kaldı
  | 'excused'; // Mazeretli

export interface Session {
  id: string;
  clientId: string;
  clientName: string; // Denormalized için

  // Tarih ve Saat
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm

  // Seans Bilgileri
  type: SessionType;
  status: SessionStatus;

  // Yoklama
  attendance?: AttendanceStatus;
  attendanceNotes?: string;

  // Tekrar Eden Seanslar
  isRecurring: boolean;
  recurringPattern?: 'daily' | 'weekly' | 'biweekly' | 'monthly';
  recurringEndDate?: string;
  parentSessionId?: string; // Ana seans ID'si

  // Renk Etiketi
  color?: string;

  // Notlar
  notes?: string;

  // Meta
  createdAt: string;
  updatedAt: string;
}

// ============================================
// ÖDEME TİPLERİ
// ============================================

export type PaymentMethod = 'cash' | 'card' | 'transfer' | 'other';
export type PaymentStatus = 'paid' | 'unpaid' | 'partial';

export interface Payment {
  id: string;
  clientId: string;
  clientName: string; // Denormalized

  // Ödeme Bilgileri
  amount: number;
  paidAmount: number;
  remainingAmount: number;

  // Durum ve Yöntem
  status: PaymentStatus;
  method: PaymentMethod;

  // Tarihler
  dueDate?: string;
  paidDate?: string;

  // Paket Bilgisi
  packageName?: string;
  sessionCount?: number; // Kaç seanslık paket

  // Notlar
  notes?: string;

  // Meta
  createdAt: string;
  updatedAt: string;
}

// ============================================
// PAKET TİPLERİ
// ============================================

export interface Package {
  id: string;
  name: string;
  description?: string;
  sessionCount: number;
  price: number;
  validityDays: number; // Geçerlilik süresi (gün)
  sessionType?: SessionType;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// ============================================
// RAPOR TİPLERİ
// ============================================

export interface FinancialSummary {
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  startDate: string;
  endDate: string;

  totalRevenue: number;
  totalPaid: number;
  totalUnpaid: number;
  totalClients: number;
  totalSessions: number;
  completedSessions: number;
  cancelledSessions: number;

  // Ödeme yöntemi dağılımı
  paymentBreakdown: {
    cash: number;
    card: number;
    transfer: number;
    other: number;
  };
}

export interface ClientReport {
  clientId: string;
  clientName: string;
  totalSessions: number;
  completedSessions: number;
  cancelledSessions: number;
  totalPaid: number;
  totalUnpaid: number;
  lastSessionDate?: string;
  attendanceRate: number; // Yüzde
}

// ============================================
// BİLDİRİM TİPLERİ
// ============================================

export type NotificationType =
  | 'session-reminder'
  | 'payment-reminder'
  | 'birthday'
  | 'inactive-client';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  clientId?: string;
  sessionId?: string;
  paymentId?: string;
  scheduledFor: string;
  sent: boolean;
  sentAt?: string;
  createdAt: string;
}

// ============================================
// AYARLAR TİPLERİ
// ============================================

export interface StudioSettings {
  name: string;
  phone: string;
  email: string;
  address?: string;

  // Çalışma Saatleri
  workingHours: {
    [key: string]: { // 'monday', 'tuesday', etc.
      isOpen: boolean;
      startTime: string;
      endTime: string;
    };
  };

  // Bildirim Ayarları
  notifications: {
    sessionReminder: {
      enabled: boolean;
      hoursBefore: number;
    };
    paymentReminder: {
      enabled: boolean;
      daysBefore: number;
    };
    birthdayMessage: {
      enabled: boolean;
    };
    inactiveClientAlert: {
      enabled: boolean;
      daysInactive: number;
    };
  };

  // Varsayılan Değerler
  defaultSessionDuration: number; // dakika
  defaultSessionType: SessionType;
}

// ============================================
// TAKVIM TİPLERİ
// ============================================

export interface CalendarDay {
  date: string; // YYYY-MM-DD
  sessions: Session[];
  hasEvents: boolean;
}

export interface CalendarWeek {
  weekNumber: number;
  days: CalendarDay[];
}

export interface CalendarMonth {
  year: number;
  month: number;
  weeks: CalendarWeek[];
}

// ============================================
// FORM TİPLERİ
// ============================================

export interface ClientFormData extends Omit<Client, 'id' | 'fullName' | 'totalSessions' | 'createdAt' | 'updatedAt'> {}

export interface SessionFormData extends Omit<Session, 'id' | 'clientName' | 'createdAt' | 'updatedAt'> {}

export interface PaymentFormData extends Omit<Payment, 'id' | 'clientName' | 'remainingAmount' | 'createdAt' | 'updatedAt'> {}

// ============================================
// NAVIGATION TİPLERİ
// ============================================

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Clients: undefined;
  Calendar: undefined;
  Reports: undefined;
  Settings: undefined;
};

export type ClientsStackParamList = {
  ClientList: undefined;
  ClientDetail: { clientId: string };
  ClientForm: { clientId?: string };
  SessionForm: { clientId: string; sessionId?: string };
  PaymentForm: { clientId: string; paymentId?: string };
};

export type CalendarStackParamList = {
  CalendarView: undefined;
  SessionDetail: { sessionId: string };
  SessionForm: { date?: string; sessionId?: string };
};

export type ReportsStackParamList = {
  ReportList: undefined;
  FinancialReport: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' };
  ClientReport: { clientId?: string };
};

export type SettingsStackParamList = {
  SettingsList: undefined;
  ProfileSettings: undefined;
  StudioSettings: undefined;
  NotificationSettings: undefined;
  PackageSettings: undefined;
  SessionTypeSettings: undefined;
};
