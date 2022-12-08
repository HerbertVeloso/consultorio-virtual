import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const EmptyText = styled.p`
  text-align: center;
`;


export const ListHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 8rem 10rem 1fr 6rem;
  gap: 2rem;
  padding: 1rem;

  strong {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textNav};
    transition: all 0.2s;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 8rem 10rem 1fr 6rem;
  gap: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.background};
  }

  strong {
    text-align: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    border: none;
    background-color: transparent;

    svg {
      font-size: 1.5rem;
    }
  }
`;
