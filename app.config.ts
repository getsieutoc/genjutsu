import 'ts-node/register'; // Add this to import TypeScript files
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  owner: 'sieutoc',
  name: process.env.APP_NAME,
  slug: 'genjutsu',
  scheme: 'sieutoc.genjutsu',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#F89E13',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#F89E13',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: '36f47c87-11c2-42e9-a199-f9d8294a0435',
    },
  },
  plugins: ['expo-font', 'expo-router', 'expo-secure-store'],
});
