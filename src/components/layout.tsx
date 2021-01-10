import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

import BaseStylesheet from "../styles/base"
import { BREAKPOINT } from "../styles/tokens"
import Navigation from "../components/navigation"

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem;

  @media (min-width: ${BREAKPOINT.M}) {
    padding: 0 2rem;
  }

  @media (min-width: ${BREAKPOINT.L}) {
    padding: 0;
  }
`

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Helmet>
      <link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
    </Helmet>
    <BaseStylesheet />
    <Navigation />
    <Container>{children}</Container>
  </>
)

export default Layout
