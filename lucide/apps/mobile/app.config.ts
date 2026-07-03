import type { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'Lucide',
  slug: 'lucide',
  version: '1.0.0',
  scheme: 'lucide',
  orientation: 'portrait',
  newArchEnabled: true,
  userInterfaceStyle: 'automatic',
  ios: {
    bundleIdentifier: 'app.lucide.ios',
    supportsTablet: false,
    infoPlist: {
      NSMicrophoneUsageDescription:
        'Lucide utilise le micro uniquement pour ton message vocal personnel (le coffre). Il ne quitte pas ton téléphone sans ton accord.',
    },
  },
  plugins: ['expo-router', 'expo-sqlite', 'expo-secure-store', 'expo-audio', 'expo-notifications'],
  experiments: { typedRoutes: false },
};

export default config;
