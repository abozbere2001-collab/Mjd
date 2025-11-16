
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nabd.malaeb',
  appName: 'نبض الملاعب',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    hostname: 'localhost'
  },
  plugins: {},
};

export default config;
