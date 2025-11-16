
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nabd.malaeb',
  appName: 'نبض الملاعب',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    // GoogleAuth configuration is removed as the plugin is no longer used.
  },
};

export default config;
