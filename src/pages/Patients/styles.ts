import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.shape};
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 1rem;

  transition: background-color 0.2s;
`;
