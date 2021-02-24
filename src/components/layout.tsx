import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

import BaseStylesheet from "../styles/base"
import { BREAKPOINT, COLOR } from "../styles/tokens"
import Navigation from "../components/navigation"

interface BackgroundProps {
  readonly backgroundColor?: string
}

const Background = styled.div<BackgroundProps>`
  background-color: ${props => props.backgroundColor || COLOR.BACKGROUND.WHITE};
`

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem 1.5rem;

  @media (min-width: ${BREAKPOINT.M}) {
    padding: 0 2rem 1.5rem;
  }

  @media (min-width: ${BREAKPOINT.L}) {
    padding: 0 0 1.5rem;
  }
`

interface Props {
  backgroundColor?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ backgroundColor, children }) => (
  <Background backgroundColor={backgroundColor}>
    <Helmet>
      <link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
    </Helmet>
    <BaseStylesheet />
    <Navigation />
    <Content>{children}</Content>
  </Background>
)

export default Layout
