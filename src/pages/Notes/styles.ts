import styled from 'styled-components';


export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Container = styled.section`
  background-color: ${props => props.theme.colors.shape};
  border-radius: 0.5rem;
  padding: 2rem;

  transition: background-color 0.2s;
`;
