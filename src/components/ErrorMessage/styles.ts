import styled from 'styled-components';

interface ContainerProps {
  inline?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({ inline }) => inline ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.red};

  svg {
    font-size: ${({ inline }) => inline ? '1.25rem' : '5rem'};
  }

  p {
    font-size: 1.25rem;
  }

`;
