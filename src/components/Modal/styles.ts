import styled from 'styled-components';


export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
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

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};

`;
