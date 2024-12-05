import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    padding: 0; /* body için padding sıfırlanır */
  }

  body {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
