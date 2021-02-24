import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"

import { FONT, BREAKPOINT, COLOR } from "../styles/tokens"

const Header = styled.header`
  z-index: 100;
  top: 0px;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: inherit;
  padding: 0.5rem 0 0 0.5rem;

  @media (min-width: ${BREAKPOINT.S}) {
    padding-right: 0.5rem;
  }

  @media (min-width: ${BREAKPOINT.M}) {
    padding: 0.5rem 1rem 0;
  }
`

const Nav = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  position: relative;
  padding: 0.5rem;
  font-size: ${FONT.SIZE.L};
  text-decoration: none;

  @media (min-width: ${BREAKPOINT.S}) {
    margin-right: 0.5rem;
  }

  @media (min-width: ${BREAKPOINT.M}) {
    padding: 0.5rem 1rem;
  }
`

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
`

const SocialLink = styled.a`
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  padding: 0.5rem;

  @media (min-width: ${BREAKPOINT.M}) {
    padding: 0.75rem;
  }

  &:hover {
    transition: background-color 0.5s, transform 0.5s ease-out;
    border-radius: 50%;
    background-color: ${COLOR.ACCENT.BLUE};
  }
`

interface Props {
  data: {
    [key: string]: {
      childImageSharp: {
        fixed: FixedObject
      }
    }
  }
}

const MyNavigation: React.FC = () => (
  <StaticQuery
    query={graphql`
      query {
        twitterMobile: file(relativePath: { eq: "icons/twitter.png" }) {
          childImageSharp {
            fixed(height: 18) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        twitterDesktop: file(relativePath: { eq: "icons/twitter.png" }) {
          childImageSharp {
            fixed(height: 26) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        linkedinMobile: file(relativePath: { eq: "icons/linkedin.png" }) {
          childImageSharp {
            fixed(height: 18) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        linkedinDesktop: file(relativePath: { eq: "icons/linkedin.png" }) {
          childImageSharp {
            fixed(height: 26) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        emailMobile: file(relativePath: { eq: "icons/email.png" }) {
          childImageSharp {
            fixed(height: 18) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        emailDesktop: file(relativePath: { eq: "icons/email.png" }) {
          childImageSharp {
            fixed(height: 26) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        githubMobile: file(relativePath: { eq: "icons/github.png" }) {
          childImageSharp {
            fixed(height: 18) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        githubDesktop: file(relativePath: { eq: "icons/github.png" }) {
          childImageSharp {
            fixed(height: 26) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        rssMobile: file(relativePath: { eq: "icons/rss.png" }) {
          childImageSharp {
            fixed(height: 18) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        rssDesktop: file(relativePath: { eq: "icons/rss.png" }) {
          childImageSharp {
            fixed(height: 26) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => <Navigation data={data} />}
  />
)

interface IconProps extends Props {
  name: string
}

const Icon: React.FC<IconProps> = ({ name, data }) => {
  const sources = [
    data[name + "Mobile"].childImageSharp.fixed,
    {
      ...data[name + "Desktop"].childImageSharp.fixed,
      media: `(min-width: ${BREAKPOINT.M})`,
    },
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
      <li>
        <SocialLink href="https://twitter.com/hafuhelena">
          <Icon name="twitter" data={data} />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="https://www.linkedin.com/in/helena-thompson-developer/">
          <Icon name="linkedin" data={data} />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="mailto:helenathompson.dev@gmail.com">
          <Icon name="email" data={data} />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="https://github.com/tnetennba3">
          <Icon name="github" data={data} />
        </SocialLink>
      </li>
      <li>
        <SocialLink as={Link} to="/rss.xml">
          <Icon name="rss" data={data} />
        </SocialLink>
      </li>
    </SocialLinks>
  </Header>
)

export default MyNavigation
