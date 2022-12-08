import styled from 'styled-components';

export const Overview = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Box = styled.section`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 0.5rem;
  padding: 2rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  svg {
    background-color: ${({ theme }) => theme.colors.secundary};
    padding: 0.75rem;
    border-radius: 100%;
    margin-right: 1.5rem;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.white};
  }

  strong {
    font-size: 2rem;
    margin-right:0.52rem;
  }

  span {
    font-size: 1.5rem;
  }
`;
