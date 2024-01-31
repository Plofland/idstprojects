import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
  /* Reset styles for the Main div */
  body, h1, h2, h3, h4, h5, h6, p, blockquote, figure, dl, dd, ul, ol, li, pre {
    margin: 0;
    padding: 0;
  }

  /* Set Main div to have no margin and padding by default */
  #Main {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles from ul and ol */
  ul, ol {
    list-style: none;
  }

  /* Set default font family and size */
  body {
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  /* Additional styles to make sure elements are displayed consistently */
  body, figure {
    margin: 0;
  }

  /* Optional: Box-sizing border-box for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default ResetStyles;
