import styled from 'styled-components';


export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  z-index: 99;

  backdrop-filter: blur(4px);

  display: grid;
  place-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

interface TitleProps {
  danger: boolean
}

export const Title = styled.h2<TitleProps>`
  color: ${({ theme, danger }) => danger ? theme.colors.red : theme.colors.black};
  margin-bottom: 1rem;
`;


export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;

  .cancel-button {
    margin-right: 1.5rem;
    border: none;
    background-color: transparent;
    font-size: 1rem;

  }
`;
