export type TThemes = 'light' | 'dark';

export type TThemeContext = {
  theme: TThemes;
  toggleTheme: () => void;
};

export type TThemeProviderProps = {
  children: React.ReactNode;
};
