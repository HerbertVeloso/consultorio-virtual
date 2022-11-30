import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
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
`;
