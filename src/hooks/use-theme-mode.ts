import { useEffect, useMemo, useState } from 'react';

const Theme = {
  key: 'theme',
  light: 'light',
  dark: 'dark',
} as const;

type ThemeMode = typeof Theme.light | typeof Theme.dark;

export const useThemeMode = (defaultThemeMode?: ThemeMode) => {
  const [currentMode, setCurrentMode] = useState<ThemeMode>(() => {
    const storedTheme = localStorage.getItem(Theme.key) as ThemeMode | null;
    return storedTheme || (defaultThemeMode ?? Theme.light);
  });

  const isDark = useMemo(() => {
    return currentMode === Theme.dark;
  }, [currentMode]);

  const isLight = useMemo(() => {
    return currentMode === Theme.light;
  }, [currentMode]);

  const setThemeMode = (themeMode: ThemeMode) => {
    localStorage.setItem(Theme.key, themeMode);
    document.documentElement.classList.remove(Theme.light, Theme.dark);
    document.documentElement.classList.add(themeMode);
    setCurrentMode(themeMode);
  };

  const setDefaultThemeMode = (): void => {
    setThemeMode(currentMode);
  };

  useEffect(() => {
    setDefaultThemeMode();
  }, []);

  const setLightMode = () => setThemeMode(Theme.light);
  const setDarkMode = () => setThemeMode(Theme.dark);
  const toggleThemeMode = () => (currentMode === Theme.dark ? setLightMode() : setDarkMode());

  return { currentMode, isDark, isLight, setLightMode, setDarkMode, toggleThemeMode };
};
