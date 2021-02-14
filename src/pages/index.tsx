import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import { BREAKPOINT, COLOR } from "../styles/tokens"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Svg = styled.svg`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70vh;

  @media (min-width: ${BREAKPOINT.L}) {
    height: 60vh;
  }
`

const Heading = styled.div`
  height: 40vh;
  display: flex;
  align-items: flex-end;

  @media (min-width: ${BREAKPOINT.L}) {
    height: 30vh;
  }
`

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "background-m.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, traceSVG: { color: "#362925" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    desktopImage: file(relativePath: { eq: "background-l.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, traceSVG: { color: "#362925" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

interface Props {
  data: {
    mobileImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    desktopImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const Home: React.FC<Props> = ({ data }) => {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: ${BREAKPOINT.L})`,
    },
  ]

  return (
    <>
      <SEO />
      <Img
        fluid={sources}
        backgroundColor={COLOR.BACKGROUND.YELLOW}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill={COLOR.BACKGROUND.BLUE} points="0,100 100,70 100,0 0,0" />
      </Svg>
      <Layout>
        <Heading>
          <h1>
            Hello! My name is Helena.{" "}
            <span role="img" aria-label="Waving Hand">
              👋
            </span>
            <br />
            I’m a Software Engineer.
          </h1>
        </Heading>
      </Layout>
    </>
  )
}

export default Home
