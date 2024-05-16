import { createContext, useContext, useState } from 'react';
import { TThemeContext, TThemeProviderProps, TThemes } from './types';
import { Theme } from '@radix-ui/themes';

const ThemeContext = createContext<TThemeContext>(
  null as unknown as TThemeContext
);

export function useTheme(): TThemeContext {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error(
      'Компоненты, использующие тему должны быть обёрнуты в <ThemeProvider />'
    );
  }

  return ctx;
}

function ThemeProvider({ children }: TThemeProviderProps) {
  const [theme, setTheme] = useState<TThemes>('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme appearance={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
