import { Outlet } from 'react-router-dom';

import { Navigation } from '../Navigation';
import { Container } from './styles';

export function Layout() {
  return (
    <Container>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
