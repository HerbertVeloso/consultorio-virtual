import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${props => props.theme.colors.shape};
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -2px 4px #000;
  z-index: 1;

  transition: background-color 0.2s;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};

    transition: color 0.2s;
  }

  strong {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.title};

    transition: color 0.2s;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogInButton = styled.button`
  background-color: ${props => props.theme.colors.secundary};
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transition: all 0.2s;
`;

export const LogOutButton = styled.button`
  background-color: ${props => props.theme.colors.red};
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transition: all 0.2s;
`;
