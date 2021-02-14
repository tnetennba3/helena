import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { FONT } from "../styles/tokens"

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5rem;
`

const StyledLink = styled(Link)`
  position: relative;
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.5rem 1rem;
  font-size: ${FONT.SIZE.L};
  text-decoration: none;
`

const Navigation: React.FC = () => (
  <StyledNav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/blog/">Blog</StyledLink>
  </StyledNav>
)

export default Navigation
