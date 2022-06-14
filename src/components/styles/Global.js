import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15rem;
  }

  p {
    line-height: 1.5;
    opacity: 0.6;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
