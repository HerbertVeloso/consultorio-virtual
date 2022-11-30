import styled from 'styled-components';

interface StyledButtonProps {
  danger?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ theme, danger }) => danger ? theme.colors.red : theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transition: all 0.2s;

  svg {
    font-size: 1.25rem;
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.textNav};
  }
`;
