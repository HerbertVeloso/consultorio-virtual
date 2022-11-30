import { ReactNode } from 'react';

import { Header, Title } from './styles';

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <Header>
      <Title>{title}</Title>
      {children}
    </Header>
  );
}
