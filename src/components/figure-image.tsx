import React from "react"
import styled from "styled-components"
import Img, { FluidObject } from "gatsby-image"

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
    &:hover {
      font-weight: ${FONT.WEIGHT.BOLD};
    }
  }
`

interface Props {
  fluid: FluidObject
  alt: string
  caption?: string | React.ReactNode
}

const FigureImage: React.FC<Props> = ({ fluid, alt, caption }) => (
  <Figure>
    <Img fluid={fluid} alt={alt} />
    {caption && <Caption>{caption}</Caption>}
  </Figure>
)

export default FigureImage
