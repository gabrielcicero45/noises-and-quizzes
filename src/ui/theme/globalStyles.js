import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
  --white: #FFFFFF;
  --green: #29D305;
  --blue: #006DDB;
  --black: #000000;
  --grey: #262626;
  --danger: #EE0701;
  
  }

  body {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
    font-family: 'Red Hat Text','Red Hat Display';
    height: 100vh;
  }
`;
 