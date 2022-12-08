import styled from 'styled-components';


export const Container = styled.div`
  height: calc(100vh - 5rem);
  display: flex;

  overflow: hidden;

  main {
    flex: 1;
    overflow-y: scroll;

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.shape};
      transition: background-color 0.2s;
    }
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.secundary};
      border-radius: 0.25rem;
      transition: background-color 0.2s;
    }
  }
`;
