import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const EmptyText = styled.p`
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;

  li {
    background-color: ${props => props.theme.colors.background};
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    transition: background-color 0.2s;

    & + li {
      margin-top: 2px;
    }

    > label {
      cursor: pointer;

      input {
        display: none;
      }

      span {
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 0.25rem;
        background-color: ${props => props.theme.colors.shape};
        border: 2px solid ${props => props.theme.colors.primary};
        position: relative;

        transition: all 0.2s;

        &::after {
          content: '';
          display: block;

          transition: all 0.2s;
        }
      }
    }

    p {
      font-size: 1.1rem;
      font-weight: 400;
      flex: 1;
    }

    &.completed {
      filter: brightness(0.9);

      > label {
        span {
          background-color: ${props => props.theme.colors.primary};

          &::after {
            position: absolute;
            left: 0.275rem;
            top: 0.1rem;
            width: .25rem;
            height: .5rem;
            border: solid white;
            border-width: 0 0.2rem 0.2rem 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
      }

      p {
        text-decoration: line-through;
      }
    }

    &:first-child {
      border-radius: 1rem 1rem 0 0;
    }

    &:last-child {
      border-radius: 0 0 1rem 1rem;
    }
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
