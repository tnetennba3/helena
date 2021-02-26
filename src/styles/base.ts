import { createGlobalStyle } from "styled-components"

import { COLOR, FONT, BREAKPOINT } from "./tokens"

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
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
    background: linear-gradient(to bottom, ${COLOR.ACCENT.BLUE} 0%, ${COLOR.ACCENT.BLUE} 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 0.2rem 0.2rem;
    color: inherit;
    text-decoration: none;
    transition: background-size .2s;

    &:hover {
      background-size: 4px 100%;
    }

    &:focus, &:active {
      outline: 2px dashed ${COLOR.ACCENT.DARK_GREY};
    }
  }

  h1, h2, h3 {
    margin: 0.5rem 0 0.25rem !important;

    a {
      background: none;
    }
  }

  h2 {
    font-size: ${FONT.SIZE.XL};
    font-weight: ${FONT.WEIGHT.MEDIUM};
  }

  h3 {
    font-size: ${FONT.SIZE.M};
    font-weight: ${FONT.WEIGHT.BOLD};
  }

  p {
    margin: 0.75rem 0;
    line-height: 1.75;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  em {
    font-weight: ${FONT.WEIGHT.MEDIUM};
  }

  img {
    width: 100%;
  }

  figure {
    text-align: center;

    @media (max-width: ${BREAKPOINT.M}) {
      margin: 0;
    }
  }

  figcaption {
    margin-top: 0.5rem;
    font-size: ${FONT.SIZE.S};
    font-style: italic;
  }
}
`

export default GlobalStyle
