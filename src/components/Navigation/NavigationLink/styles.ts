import styled from 'styled-components';

export const Wrapper = styled.li`
  & + li {
    margin-top: 0.5rem;
  }

  a {
    color: ${(props) => props.theme.colors.textNav};
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: background-color 0.2s, color 0.2s;

    &::before {
      content: "";
      height: 100%;
      width: 0.5rem;
      position: absolute;
      left: 0;
      top: 0;

      transition: background-color 0.2s;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }

    span {
      font-weight: 700;
    }

    &.active {
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
    }

    &.active::before {
      background-color: ${(props) => props.theme.colors.secundary};
    }
  }
`;
