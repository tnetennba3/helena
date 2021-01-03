import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { FONT } from "../styles/tokens"

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5em;
`

const StyledLink = styled(Link)`
  margin: 0.5em 0.5em 0.5em 0;
  padding: 0.5em 1em;
  font-size: ${FONT.SIZE.L};

  &:hover {
    font-weight: ${FONT.WEIGHT.BOLD};
  }
`

const Navigation = () => (
  <StyledNav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/blog">Blog</StyledLink>
  </StyledNav>
)

export default Navigation
