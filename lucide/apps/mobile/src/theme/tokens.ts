/** Design tokens Lucide (CDC §13). Jamais de rouge punitif. */
export const palette = {
  cream: '#FAF7F2', ink: '#1C2430', dawn: '#E8734A',
  proofGreen: '#2E7D5B', proofYellow: '#C9A227', proofGray: '#8A93A2',
  night: '#10151D', nightText: '#F2EDE6', line: '#E6E0D6',
  card: '#FFFFFF', cardDark: '#1A2230', inkDark: '#EDE7DD', lineDark: '#2A3242',
} as const;

export type ThemeName = 'light' | 'dark' | 'sos';
export interface Theme {
  bg: string; text: string; sub: string; card: string; line: string;
  accent: string; green: string; yellow: string; gray: string;
}
export const themes: Record<ThemeName, Theme> = {
  light: { bg: palette.cream, text: palette.ink, sub: '#5A6472', card: palette.card, line: palette.line, accent: palette.dawn, green: palette.proofGreen, yellow: palette.proofYellow, gray: palette.proofGray },
  dark:  { bg: '#121820', text: palette.inkDark, sub: '#9AA3B2', card: palette.cardDark, line: palette.lineDark, accent: palette.dawn, green: '#4CAF8E', yellow: '#D8B23C', gray: palette.proofGray },
  sos:   { bg: palette.night, text: palette.nightText, sub: '#B9C0CC', card: '#1A2230', line: '#2A3242', accent: '#F08A63', green: '#4CAF8E', yellow: '#D8B23C', gray: palette.proofGray },
};
export const space = { xs: 4, s: 8, m: 16, l: 24, xl: 32 } as const;
export const radius = { card: 20, button: 14, pill: 999 } as const;
export const type_ = { title: 28, h2: 22, body: 17, small: 14 } as const;
