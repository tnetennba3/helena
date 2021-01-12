import React from "react"
import styled from "styled-components"

import { BREAKPOINT, COLOR } from "../styles/tokens"
import SEO from "../components/seo"
import Layout from "../components/layout"
import mediumBackground from "../images/background-m.png"
import largeBackground from "../images/background-l.png"

const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: url(${mediumBackground}) bottom/cover ${COLOR.BACKGROUND.YELLOW};

  @media (min-width: ${BREAKPOINT.L}) {
    background-image: url(${largeBackground});
  }
`

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

const Home = () => (
  <Background>
    <SEO />
    <Svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill={COLOR.BACKGROUND.BLUE} points="0,100 100,70 100,0 0,0" />
    </Svg>
    <Layout>
      <Heading>
        <h1>
          Hello! My name is Helena. 👋
          <br />
          I’m a Software Engineer.
        </h1>
      </Heading>
    </Layout>
  </Background>
)

export default Home
