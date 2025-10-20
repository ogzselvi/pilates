/**
 * Veri depolama servisi
 * JSON dosyalarından veri okuma ve yazma işlemleri
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Client, Session, Payment, Package, User, StudioSettings, Notification } from '@/types';

const STORAGE_KEYS = {
  USERS: '@serene_pilates/users',
  CLIENTS: '@serene_pilates/clients',
  SESSIONS: '@serene_pilates/sessions',
  PAYMENTS: '@serene_pilates/payments',
  PACKAGES: '@serene_pilates/packages',
  SETTINGS: '@serene_pilates/settings',
  NOTIFICATIONS: '@serene_pilates/notifications',
  AUTH_TOKEN: '@serene_pilates/auth_token',
  CURRENT_USER: '@serene_pilates/current_user',
};

// ============================================
// Generic Storage Functions
// ============================================

/**
 * Veri yazar
 */
const setItem = async <T>(key: string, value: T): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`Error saving ${key}:`, error);
    throw error;
  }
};

/**
 * Veri okur
 */
const getItem = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Error reading ${key}:`, error);
    return null;
  }
};

/**
 * Veri siler
 */
const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key}:`, error);
    throw error;
  }
};

/**
 * Tüm verileri temizler
 */
const clearAll = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
    throw error;
  }
};

// ============================================
// Auth Storage
// ============================================

export const AuthStorage = {
  saveToken: async (token: string): Promise<void> => {
    await setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  getToken: async (): Promise<string | null> => {
    return await getItem<string>(STORAGE_KEYS.AUTH_TOKEN);
  },

  removeToken: async (): Promise<void> => {
    await removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  saveUser: async (user: User): Promise<void> => {
    await setItem(STORAGE_KEYS.CURRENT_USER, user);
  },

  getUser: async (): Promise<User | null> => {
    return await getItem<User>(STORAGE_KEYS.CURRENT_USER);
  },

  removeUser: async (): Promise<void> => {
    await removeItem(STORAGE_KEYS.CURRENT_USER);
  },

  logout: async (): Promise<void> => {
    await AuthStorage.removeToken();
    await AuthStorage.removeUser();
  },
};

// ============================================
// Clients Storage
// ============================================

export const ClientsStorage = {
  getAll: async (): Promise<Client[]> => {
    const clients = await getItem<Client[]>(STORAGE_KEYS.CLIENTS);
    return clients || [];
  },

  getById: async (id: string): Promise<Client | null> => {
    const clients = await ClientsStorage.getAll();
    return clients.find(c => c.id === id) || null;
  },

  save: async (client: Client): Promise<void> => {
    const clients = await ClientsStorage.getAll();
    const index = clients.findIndex(c => c.id === client.id);

    if (index >= 0) {
      clients[index] = { ...client, updatedAt: new Date().toISOString() };
    } else {
      clients.push(client);
    }

    await setItem(STORAGE_KEYS.CLIENTS, clients);
  },

  delete: async (id: string): Promise<void> => {
    const clients = await ClientsStorage.getAll();
    const filtered = clients.filter(c => c.id !== id);
    await setItem(STORAGE_KEYS.CLIENTS, filtered);
  },

  search: async (query: string): Promise<Client[]> => {
    const clients = await ClientsStorage.getAll();
    const lowerQuery = query.toLowerCase();

    return clients.filter(
      c =>
        c.fullName.toLowerCase().includes(lowerQuery) ||
        c.phone.includes(query) ||
        c.tcNo.includes(query) ||
        c.email?.toLowerCase().includes(lowerQuery)
    );
  },

  filterByStatus: async (status: 'active' | 'passive'): Promise<Client[]> => {
    const clients = await ClientsStorage.getAll();
    return clients.filter(c => c.status === status);
  },
};

// ============================================
// Sessions Storage
// ============================================

export const SessionsStorage = {
  getAll: async (): Promise<Session[]> => {
    const sessions = await getItem<Session[]>(STORAGE_KEYS.SESSIONS);
    return sessions || [];
  },

  getById: async (id: string): Promise<Session | null> => {
    const sessions = await SessionsStorage.getAll();
    return sessions.find(s => s.id === id) || null;
  },

  save: async (session: Session): Promise<void> => {
    const sessions = await SessionsStorage.getAll();
    const index = sessions.findIndex(s => s.id === session.id);

    if (index >= 0) {
      sessions[index] = { ...session, updatedAt: new Date().toISOString() };
    } else {
      sessions.push(session);
    }

    await setItem(STORAGE_KEYS.SESSIONS, sessions);
  },

  delete: async (id: string): Promise<void> => {
    const sessions = await SessionsStorage.getAll();
    const filtered = sessions.filter(s => s.id !== id);
    await setItem(STORAGE_KEYS.SESSIONS, filtered);
  },

  getByClientId: async (clientId: string): Promise<Session[]> => {
    const sessions = await SessionsStorage.getAll();
    return sessions.filter(s => s.clientId === clientId);
  },

  getByDate: async (date: string): Promise<Session[]> => {
    const sessions = await SessionsStorage.getAll();
    return sessions.filter(s => s.date === date);
  },

  getByDateRange: async (startDate: string, endDate: string): Promise<Session[]> => {
    const sessions = await SessionsStorage.getAll();
    return sessions.filter(s => s.date >= startDate && s.date <= endDate);
  },
};

// ============================================
// Payments Storage
// ============================================

export const PaymentsStorage = {
  getAll: async (): Promise<Payment[]> => {
    const payments = await getItem<Payment[]>(STORAGE_KEYS.PAYMENTS);
    return payments || [];
  },

  getById: async (id: string): Promise<Payment | null> => {
    const payments = await PaymentsStorage.getAll();
    return payments.find(p => p.id === id) || null;
  },

  save: async (payment: Payment): Promise<void> => {
    const payments = await PaymentsStorage.getAll();
    const index = payments.findIndex(p => p.id === payment.id);

    if (index >= 0) {
      payments[index] = { ...payment, updatedAt: new Date().toISOString() };
    } else {
      payments.push(payment);
    }

    await setItem(STORAGE_KEYS.PAYMENTS, payments);
  },

  delete: async (id: string): Promise<void> => {
    const payments = await PaymentsStorage.getAll();
    const filtered = payments.filter(p => p.id !== id);
    await setItem(STORAGE_KEYS.PAYMENTS, filtered);
  },

  getByClientId: async (clientId: string): Promise<Payment[]> => {
    const payments = await PaymentsStorage.getAll();
    return payments.filter(p => p.clientId === clientId);
  },

  getUnpaid: async (): Promise<Payment[]> => {
    const payments = await PaymentsStorage.getAll();
    return payments.filter(p => p.status === 'unpaid' || p.status === 'partial');
  },
};

// ============================================
// Packages Storage
// ============================================

export const PackagesStorage = {
  getAll: async (): Promise<Package[]> => {
    const packages = await getItem<Package[]>(STORAGE_KEYS.PACKAGES);
    return packages || [];
  },

  getById: async (id: string): Promise<Package | null> => {
    const packages = await PackagesStorage.getAll();
    return packages.find(p => p.id === id) || null;
  },

  save: async (pkg: Package): Promise<void> => {
    const packages = await PackagesStorage.getAll();
    const index = packages.findIndex(p => p.id === pkg.id);

    if (index >= 0) {
      packages[index] = { ...pkg, updatedAt: new Date().toISOString() };
    } else {
      packages.push(pkg);
    }

    await setItem(STORAGE_KEYS.PACKAGES, packages);
  },

  delete: async (id: string): Promise<void> => {
    const packages = await PackagesStorage.getAll();
    const filtered = packages.filter(p => p.id !== id);
    await setItem(STORAGE_KEYS.PACKAGES, filtered);
  },

  getActive: async (): Promise<Package[]> => {
    const packages = await PackagesStorage.getAll();
    return packages.filter(p => p.isActive);
  },
};

// ============================================
// Settings Storage
// ============================================

export const SettingsStorage = {
  get: async (): Promise<StudioSettings | null> => {
    return await getItem<StudioSettings>(STORAGE_KEYS.SETTINGS);
  },

  save: async (settings: StudioSettings): Promise<void> => {
    await setItem(STORAGE_KEYS.SETTINGS, settings);
  },
};

// ============================================
// Notifications Storage
// ============================================

export const NotificationsStorage = {
  getAll: async (): Promise<Notification[]> => {
    const notifications = await getItem<Notification[]>(STORAGE_KEYS.NOTIFICATIONS);
    return notifications || [];
  },

  save: async (notification: Notification): Promise<void> => {
    const notifications = await NotificationsStorage.getAll();
    const index = notifications.findIndex(n => n.id === notification.id);

    if (index >= 0) {
      notifications[index] = notification;
    } else {
      notifications.push(notification);
    }

    await setItem(STORAGE_KEYS.NOTIFICATIONS, notifications);
  },

  delete: async (id: string): Promise<void> => {
    const notifications = await NotificationsStorage.getAll();
    const filtered = notifications.filter(n => n.id !== id);
    await setItem(STORAGE_KEYS.NOTIFICATIONS, filtered);
  },

  getPending: async (): Promise<Notification[]> => {
    const notifications = await NotificationsStorage.getAll();
    return notifications.filter(n => !n.sent);
  },
};

// ============================================
// Export All
// ============================================

export const Storage = {
  Auth: AuthStorage,
  Clients: ClientsStorage,
  Sessions: SessionsStorage,
  Payments: PaymentsStorage,
  Packages: PackagesStorage,
  Settings: SettingsStorage,
  Notifications: NotificationsStorage,
  clearAll,
};
