import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.shape};
  padding: 2rem;
  border-radius: 1rem;

  transition: background-color 0.2s;

  header {
    h1 {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.title};
      margin-bottom: 1rem;

      transition: color 0.2s;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`;
