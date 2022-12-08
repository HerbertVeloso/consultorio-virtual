import { ReactNode } from 'react';
import { Container, Error } from './styles';

interface FormGroupProps {
  children: ReactNode;
  error?: string;
}

export function FormGroup({ children, error }: FormGroupProps) {
  return (
    <Container>
      {children}
      {error && <Error>{error}</Error>}
    </Container>
  );
}
