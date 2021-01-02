import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5em;
`

const StyledLink = styled(Link)`
  padding: 0.5em 1em;
  margin: 0.5em 0.5em 0.5em 0;
`

const Navigation = () => (
  <StyledNav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/blog">Blog</StyledLink>
  </StyledNav>
)

export default Navigation
