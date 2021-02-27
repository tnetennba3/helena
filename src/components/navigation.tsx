import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"

import { FONT, BREAKPOINT } from "../styles/tokens"

const Header = styled.header`
  z-index: 100;
  top: 0px;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: inherit;
  padding: 0.5rem 0.5rem 0 1rem;

  @media (min-width: ${BREAKPOINT.S}) {
    padding-right: 1rem;
  }
`

const Nav = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${BREAKPOINT.S}) {
    width: auto;
  }
`

const NavLink = styled(Link)`
  position: relative;
  margin-right: 0.5rem;
  padding: 0.5rem 0;
  font-size: ${FONT.SIZE.M};
  background: none;

  @media (min-width: ${BREAKPOINT.S}) {
    padding: 0.5rem;
    font-size: ${FONT.SIZE.L};
  }

  @media (min-width: ${BREAKPOINT.L}) {
    padding: 0.5rem 1rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: flex-end;
`

const SocialLink = styled.a`
  padding: 0.5rem;

  @media (min-width: ${BREAKPOINT.S}) {
    padding: 0.5rem 0.75rem;
  }

  @media (max-width: ${BREAKPOINT.M}) {
    background: none;
  }
`

interface Edge {
  node: {
    iconName: string
    childImageSharp: {
      small: FixedObject
      medium: FixedObject
      large: FixedObject
    }
  }
}

interface Props {
  data: {
    allFile: {
      edges: Edge[]
    }
  }
}

const MyNavigation: React.FC = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "icons/social" } }) {
          edges {
            node {
              iconName: name
              childImageSharp {
                small: fixed(height: 15) {
                  ...GatsbyImageSharpFixed_withWebp
                }
                medium: fixed(height: 20) {
                  ...GatsbyImageSharpFixed_withWebp
                }
                large: fixed(height: 26) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Navigation data={data} />}
  />
)

interface IconProps {
  name: string
  edges: Edge[]
}

const Icon: React.FC<IconProps> = ({ name, edges }) => {
  const { node } = edges.find(({ node }) => node.iconName === name) as Edge
  const { small, medium, large } = node.childImageSharp
  const sources = [
    small,
    { ...large, media: `(min-width: ${BREAKPOINT.L})` },
    { ...medium, media: `(min-width: ${BREAKPOINT.S})` },
  ]

  return <Img fixed={sources} alt={name} />
}

const Navigation: React.FC<Props> = ({ data }) => (
  <Header>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog/">Blog</NavLink>
    </Nav>
    <SocialLinks>
      <SocialLink href="https://twitter.com/hafuhelena">
        <Icon name="twitter" edges={data.allFile.edges} />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/helena-thompson-developer/">
        <Icon name="linkedin" edges={data.allFile.edges} />
      </SocialLink>
      <SocialLink href="mailto:helenathompson.dev@gmail.com">
        <Icon name="email" edges={data.allFile.edges} />
      </SocialLink>
      <SocialLink href="https://github.com/tnetennba3">
        <Icon name="github" edges={data.allFile.edges} />
      </SocialLink>
    </SocialLinks>
  </Header>
)

export default MyNavigation
