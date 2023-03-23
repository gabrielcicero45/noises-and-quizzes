import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: var(--background);
    font-family: 'Red Hat Text','Red Hat Display';
    height: 100vh;
  }
`;
 