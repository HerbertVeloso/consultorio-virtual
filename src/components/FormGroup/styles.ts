import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
`;

export const Error = styled.span`
  display: block;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.red};
  margin-top: 0.25rem;
  margin-left: 0.5rem;
`;
