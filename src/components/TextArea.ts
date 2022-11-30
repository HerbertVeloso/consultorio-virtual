import styled from 'styled-components';

export const TextArea = styled.textarea`
  background-color: #E5E5E5;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.black};
  height: 6rem;
  resize: none;
`;
