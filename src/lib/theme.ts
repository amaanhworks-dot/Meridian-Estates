function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleaned = hex.replace('#', '');
  const full =
    cleaned.length === 3
      ? cleaned
          .split('')
          .map((c) => c + c)
          .join('')
      : cleaned;
  const r = parseInt(full.substring(0, 2), 16);
  const g = parseInt(full.substring(2, 4), 16);
  const b = parseInt(full.substring(4, 6), 16);
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  return (
    '#' +
    [r, g, b]
      .map((v) => clamp(v).toString(16).padStart(2, '0'))
      .join('')
  );
}

function mix(color: { r: number; g: number; b: number }, target: { r: number; g: number; b: number }, weight: number) {
  return {
    r: color.r * (1 - weight) + target.r * weight,
    g: color.g * (1 - weight) + target.g * weight,
    b: color.b * (1 - weight) + target.b * weight,
  };
}

function getLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
  const toLinear = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

export interface Theme {
  accent: string;
  accentHover: string;
  accentSoft: string;
  accentText: string;
  accentTextOnLight: string;
  isDark: boolean;
}

export function createTheme(accentColor: string): Theme {
  const accent = hexToRgb(accentColor);
  const white = { r: 250, g: 248, b: 244 }; // ivory
  const dark = { r: 34, g: 33, b: 31 }; // charcoal

  const accentHover = mix(accent, dark, 0.15);
  const accentSoft = mix(accent, white, 0.85);
  const luminance = getLuminance(accent);
  const isDark = luminance < 0.5;
  const contrastText = isDark ? white : dark;
  const accentTextOnLight = mix(accent, dark, 0.25);

  return {
    accent: accentColor,
    accentHover: rgbToHex(accentHover.r, accentHover.g, accentHover.b),
    accentSoft: rgbToHex(accentSoft.r, accentSoft.g, accentSoft.b),
    accentText: rgbToHex(contrastText.r, contrastText.g, contrastText.b),
    accentTextOnLight: rgbToHex(accentTextOnLight.r, accentTextOnLight.g, accentTextOnLight.b),
    isDark,
  };
}

export function applyTheme(accentColor: string): Theme {
  const theme = createTheme(accentColor);
  const root = document.documentElement;
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-hover', theme.accentHover);
  root.style.setProperty('--accent-soft', theme.accentSoft);
  root.style.setProperty('--accent-text', theme.accentText);
  root.style.setProperty('--accent-text-on-light', theme.accentTextOnLight);
  return theme;
}
