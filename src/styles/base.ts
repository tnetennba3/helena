import { createGlobalStyle } from "styled-components"

import { COLOR, FONT, BREAKPOINT } from "./tokens"

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    font-size: 16px;

    @media (min-width: ${BREAKPOINT.M}) {
      font-size: 20px;
    }
    @media (min-width: ${BREAKPOINT.L}) {
      font-size: 24px;
    }
  }

  body {
    overflow-x: hidden;
    background: ${COLOR.BACKGROUND.WHITE};
  }

  ::selection {
    background-color: ${COLOR.ACCENT.YELLOW};
  }

  body,
  input,
  textarea {
    font-family: ${FONT.FAMILY.BODY};
    font-size: ${FONT.SIZE.M};
    font-weight: ${FONT.WEIGHT.REGULAR};
    -webkit-font-smoothing: antialiased;
    color: ${COLOR.TEXT};
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
    &:focus, &:active {
      outline: 2px dashed ${COLOR.ACCENT.DARK_GREY};
    }
    &:hover {
      font-weight: ${FONT.WEIGHT.BOLD};
    }
  }

  h1 {
    font-size: ${FONT.SIZE.XL};
  }

  h2 {
    font-size: ${FONT.SIZE.L};
  }
`

export default GlobalStyle
