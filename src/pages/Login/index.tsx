import { GoogleLogo } from 'phosphor-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { ButtonGoogle, Container, Content } from './styles';

export function Login() {
  const { isAuthenticated, onLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <Content>
        <h1>Entrar na plataforma</h1>
        <ButtonGoogle onClick={onLogin}>
          <GoogleLogo weight="bold" />
          Entrar com o Google
        </ButtonGoogle>
      </Content>
    </Container>
  );
}
