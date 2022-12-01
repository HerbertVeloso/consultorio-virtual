import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
    -webkit-font-feature-settings: "lnum";
    -moz-font-feature-settings: "lnum";
    font-feature-settings: "lnum";

    transition: color 0.2s;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: ${(props) => props.theme.colors.title};
    font-weight: 700;

    transition: color 0.2s;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  main {
    padding: 2rem;
    flex: 1;
  }

  #root {
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    flex-direction: column;

    transition: background-color 0.2s;
  }
`;
