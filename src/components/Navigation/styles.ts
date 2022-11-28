import styled from 'styled-components';


export const Container = styled.aside`
  width: 15rem;
  background-color: ${props => props.theme.colors.shape};
  padding: 2rem;
  box-shadow: -2px 0px 4px #000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: background-color 0.2s;

  nav {
    display: flex;
    flex-direction: column;

    ul {
      list-style: none;
    }
  }
`;


export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 3rem;
    border-radius: 2rem;
    border: 2px solid ${props => props.theme.colors.secundary};

    transition: border-color 0.2s;
  }

  span {
    font-weight: 700;
    color: ${props => props.theme.colors.textNav};

    transition: color 0.2s;
  }
`;
