import { Activity, SignIn, SignOut } from 'phosphor-react';

import { useAuth } from '../../hooks/useAuth';
import { ToggleTheme } from './ToggleTheme';

import { Actions, Container, LogInButton, LogOutButton, Title } from './styles';

export function Header() {
  const { isAuthenticated, onLogin, onLogout } = useAuth();

  return (
    <Container>
      <Title>
        <Activity weight='bold' />
        <strong>Consultório Virtual</strong>
      </Title>
      <Actions>
        <ToggleTheme />

        {isAuthenticated ? (
          <LogOutButton onClick={onLogout}>
            <SignOut weight="bold" />
            Sair
          </LogOutButton>
        ) : (
          <LogInButton onClick={onLogin}>
            <SignIn weight="bold" />
            Entrar
          </LogInButton>

        )}
      </Actions>
    </Container>
  );
}
