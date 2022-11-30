import styled from 'styled-components';


export const Container = styled.section`
  background-color: ${props => props.theme.colors.shape};
  border-radius: 0.5rem;
  padding: 2rem;
  margin-top: 1rem;

  transition: background-color 0.2s;
`;
