export interface AnalyticsConfig {
    baidu?: {
      trackingId: string;
      enabled: boolean;
    };
    google?: {
      trackingId: string;
      enabled: boolean;
    };
    clarity?: {
      trackingId: string;
      enabled: boolean;
    };
    // umami?: {
    //   websiteId: string;
    //   src: string;
    //   enabled: boolean;
    // }
  }

import { i18n } from '@/lib/i18n';

// Define different analytics configurations for different languages
const analyticsConfigByLanguage: Record<string, AnalyticsConfig> = {
  'en': {
    baidu: {
      trackingId: '',
      enabled: false
    },
    google: {
      trackingId: 'G-YF5VHZSTE0', // Google Analytics ID for English website
      enabled: true
    },
    clarity: {
      trackingId: 'qf9f625a3h', // Clarity ID for English website
      enabled: true
    }
  },
  'zh-cn': {
    baidu: {
      trackingId: '', // Baidu Analytics ID for Chinese website
      enabled: false
    },
    google: {
      trackingId: '', // Google Analytics ID for Chinese website
      enabled: false
    },
    clarity: {
      trackingId: '', // Clarity ID for Chinese website
      enabled: false
    }
  }
};

// Get analytics configuration for the current default language
export const analyticsConfig: AnalyticsConfig = (() => {
  const currentLanguage = i18n.defaultLanguage;
  // Return configuration for the current language if available; otherwise return English configuration as default
  return analyticsConfigByLanguage[currentLanguage] || analyticsConfigByLanguage['en'];
})();