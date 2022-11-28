import styled from 'styled-components';

export const Wrapper = styled.label`
  width: 64px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 0 8px;
  border-radius: 24px;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background-color 0.2s;

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  }

  span {
    display: block;
    background-color: ${(props) => props.theme.colors.secundary};
    width: 24px;
    height: 24px;
    border-radius: 24px;

    position: absolute;
    left: 4px;

    transition: all 0.2s;
  }

  input[type="checkbox"]:checked + span {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }

  input[type="checkbox"]:active + span {
    width: 36px;
  }
`;
