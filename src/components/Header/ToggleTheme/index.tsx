import { Moon, Sun } from 'phosphor-react';
import { useTheme } from '../../../hooks/useTheme';
import { Wrapper } from './styles';

export function ToggleTheme() {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <Wrapper>
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      <span />
      <Moon size={16} color="#FEFCD7" />
      <Sun size={16} color={colors.yellow} />
    </Wrapper>
  );
}
