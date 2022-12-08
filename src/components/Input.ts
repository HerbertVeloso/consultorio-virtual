import styled, { css } from 'styled-components';

interface InputProps {
  error?: string | boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  background-color: #F7F7F7;
  border: 2px solid #F7F7F7;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.black};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.black};
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.red} !important;
  `}
`;
