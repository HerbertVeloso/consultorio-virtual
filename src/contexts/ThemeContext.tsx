import { createContext, ReactNode } from 'react';
import {
  Colors, ThemeProvider as StyledThemeProvider
} from 'styled-components';
import { usePersistedState } from '../hooks/usePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeContextData {
  isDark: boolean;
  toggleTheme: () => void;
  name: string;
  colors: Colors;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = usePersistedState<boolean>('isDark', false);
  const theme = isDark ? dark : light;

  const name = theme.name;
  const colors = theme.colors;

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, name, colors }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
