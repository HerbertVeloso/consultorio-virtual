import styled from 'styled-components';

export const Form = styled.form`
  width: 20rem;
  display: flex;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #F7F7F7;

  input, button {
    border-radius: 0;
  }

  input {
    background-color: transparent;
    padding: 0.75rem 0 0.75rem 1rem;
    font-size: 1rem;
    border: none;
    color: ${({ theme }) => theme.colors.black};
    outline: none;
    flex: 1;
  }

  button {
    padding: 0.75rem;
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ClearButton = styled.button`
  font-size: 1.25rem;
  border: none;
  background-color: transparent;
  display: grid;
  place-items: center;
`;
