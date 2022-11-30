import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: Colors;
  }

  export interface Colors {
    primary: string;
    secundary: string;
    highlight: string;

    background: string;
    shape: string;

    title: string;
    text: string;
    textNav: string;

    yellow: string;
    red: string;

    white: string;
    black: string;
  }
}
