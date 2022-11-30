import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from '../Spinner';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  isLoading?: boolean,
  danger?: boolean
}

export function Button({
  children,
  danger,
  isLoading,
  disabled = false,
  type = 'button',
  ...rest
}: ButtonProps) {

  return (
    <StyledButton
      {...rest}
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
    >
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
}
