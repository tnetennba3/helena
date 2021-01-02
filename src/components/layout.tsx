import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

import BaseStylesheet from "../styles/base"
import Navigation from "../components/navigation"

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

interface Props {
  children?: React.ReactNode
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
