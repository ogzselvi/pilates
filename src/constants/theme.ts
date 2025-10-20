/**
 * Tema renkleri ve stil sabitleri
 */

export const Colors = {
  // Ana Renkler
  primary: '#4CAF50', // Yeşil - Pilates teması
  primaryDark: '#388E3C',
  primaryLight: '#C8E6C9',

  // İkincil Renkler
  secondary: '#8BC34A',
  secondaryDark: '#689F38',
  secondaryLight: '#DCEDC8',

  // Fonksiyonel Renkler
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',

  // Nötr Renkler
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',

  // Arkaplan
  background: '#FAFAFA',
  surface: '#FFFFFF',
  surfaceVariant: '#F5F5F5',

  // Text
  textPrimary: '#212121',
  textSecondary: '#757575',
  textDisabled: '#BDBDBD',
  textInverse: '#FFFFFF',

  // Borders
  border: '#E0E0E0',
  divider: '#EEEEEE',

  // Seans Tipi Renkleri
  sessionColors: {
    reformer: '#4CAF50',
    mat: '#2196F3',
    yoga: '#9C27B0',
    group: '#FF9800',
    private: '#E91E63',
    other: '#757575',
  },

  // Durum Renkleri
  statusColors: {
    active: '#4CAF50',
    passive: '#9E9E9E',
    scheduled: '#2196F3',
    completed: '#4CAF50',
    cancelled: '#F44336',
    postponed: '#FF9800',
    noShow: '#757575',
    paid: '#4CAF50',
    unpaid: '#F44336',
    partial: '#FF9800',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const Typography = {
  // Font Sizes
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,

  // Font Weights
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,

  // Line Heights
  lineHeightTight: 1.2,
  lineHeightNormal: 1.5,
  lineHeightRelaxed: 1.75,
};

export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const Shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
};

export const Layout = {
  // Container
  containerMaxWidth: 1200,
  containerPadding: Spacing.md,

  // Screen
  screenPadding: Spacing.md,
  screenPaddingHorizontal: Spacing.md,
  screenPaddingVertical: Spacing.lg,

  // Header
  headerHeight: 56,
  tabBarHeight: 60,

  // Card
  cardPadding: Spacing.md,
  cardBorderRadius: BorderRadius.md,

  // Input
  inputHeight: 48,
  inputPadding: Spacing.md,
  inputBorderRadius: BorderRadius.sm,

  // Button
  buttonHeight: 48,
  buttonPadding: Spacing.md,
  buttonBorderRadius: BorderRadius.sm,

  // Avatar
  avatarSizeSmall: 32,
  avatarSizeMedium: 48,
  avatarSizeLarge: 80,
  avatarSizeXLarge: 120,
};

// Animasyon süreleri
export const AnimationDuration = {
  fast: 150,
  normal: 300,
  slow: 500,
};
