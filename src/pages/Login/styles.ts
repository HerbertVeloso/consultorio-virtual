import styled from 'styled-components';


export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 600px;
  padding: 3rem 2rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.shape};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  transition: background-color 0.2s;

  > h1 {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const ButtonGoogle = styled.button`
  background-color: ${props => props.theme.colors.red};
  padding: 1rem;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transition: all 0.2s;

  svg {
    font-size: 1.5rem;
  }
`;

