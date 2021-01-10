import React from "react"
import styled from "styled-components"

import { BREAKPOINT, FONT } from "../styles/tokens"

const Figure = styled.figure`
  text-align: center;

  @media (max-width: ${BREAKPOINT.M}) {
    margin: 0;
  }
`

const Caption = styled.figcaption`
  margin-top: 0.5rem;
  font-size: ${FONT.SIZE.S};
  font-style: italic;

  a {
    text-decoration: underline;

    &:hover {
      font-weight: ${FONT.WEIGHT.BOLD};
    }
  }
`

interface Props {
  src: string
  alt: string
  caption?: string
  cite?: React.ReactNode
}

const FigureImage: React.FC<Props> = ({ src, alt, caption, cite }) => (
  <Figure>
    <img src={src} alt={alt} />
    {caption && (
      <Caption>
        {caption}
        {cite && (
          <>
            {" "}
            Source: <cite>{cite}</cite>
          </>
        )}
      </Caption>
    )}
  </Figure>
)

export default FigureImage
