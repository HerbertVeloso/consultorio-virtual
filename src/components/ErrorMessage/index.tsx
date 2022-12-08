import { Warning } from 'phosphor-react';
import { ReactNode } from 'react';

import { Container } from './styles';

interface ErrorMessageProps {
  children: ReactNode;
  inline?: boolean;
}

export function ErrorMessage({ children, inline }: ErrorMessageProps) {
  return (
    <Container inline={inline}>
      <Warning />
      <p>{children}</p>
    </Container>
  );
}
