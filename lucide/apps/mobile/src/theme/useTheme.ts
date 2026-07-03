import { useColorScheme } from 'react-native';
import { themes, type Theme } from './tokens';
export function useTheme(): Theme {
  const scheme = useColorScheme();
  return scheme === 'dark' ? themes.dark : themes.light;
}
