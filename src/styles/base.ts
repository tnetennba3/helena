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
    font-weight: ${FONT.WEIGHT.NORMAL};
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
  }

  h1, h2 {
    margin: 0.25em 0 0.75em !important;
  }

  h2 {
    font-size: ${FONT.SIZE.L};
    font-weight: ${FONT.WEIGHT.MEDIUM};
  }

  p {
    line-height: 1.75;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
`

export default GlobalStyle
