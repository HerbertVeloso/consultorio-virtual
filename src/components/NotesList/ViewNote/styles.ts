import styled from 'styled-components';


export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
`;
