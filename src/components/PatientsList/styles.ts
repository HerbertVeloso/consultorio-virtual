import styled from 'styled-components';

export const EmptyText = styled.p`
  text-align: center;
`;


export const Table = styled.table`
width: 100%;
border-collapse: collapse;

th {
  padding: 1rem 2rem;
  text-align: left;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textNav};
  transition: all 0.2s;

  &:last-child {
    width: 12.75rem;
  }
}

tbody {
  tr {
    td {
      background: ${(props) => props.theme.colors.background};
      border-bottom: 2px solid ${(props) => props.theme.colors.shape};
      color: ${(props) => props.theme.colors.text};
      padding: 1rem 2rem;

      transition: all 0.2s;

      &.actions {
        display: flex;
        gap: 0.25rem;
        width: 12.75rem;
      }
    }

    &:first-child {
      td:first-child {
        border-radius: 1rem 0 0 0;
      }

      td:last-child {
        border-radius: 0 1rem 0 0;
      }
    }

    &:last-child {
      td:first-child {
        border-radius: 0 0 0 1rem;
      }

      td:last-child {
        border-radius: 0 0 1rem 0;
      }
    }
  }
}
`;

export const ActionButton = styled.button`
padding: 0.25rem;
font-size: 1.5rem;
color: ${(props) => props.theme.colors.text};
background-color: transparent;
border: 0;

transition: color 0.2s;

&:hover {
  color: ${(props) => props.theme.colors.title};
}
`;
