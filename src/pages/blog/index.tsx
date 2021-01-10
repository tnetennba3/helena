import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR } from "../../styles/tokens"
import Layout from "../../components/layout"
import chart from "../../images/chart-by-chapter.png"

const Article = styled.article`
  box-shadow: 0 0 0.5rem ${COLOR.ACCENT.LIGHT_GREY};
  background-color: ${COLOR.ACCENT.LIGHT_GREY};
  border-radius: 2px;
  padding: 2px;
`

const Img = styled.img`
  width: 100%;
`

const ArticleLink = styled(Link)`
  display: block;

  &:hover {
    transform: scale(1.05, 1.05);
    transition: all 0.25s ease-out;
  }
`

const ArticleText = styled.div`
  margin: 0.75rem 1rem 0.5rem;
`

const Blog = () => (
  <Layout>
    <h1>This is where I write about stuff.</h1>
    <ol>
      <li>
        <ArticleLink to="/blog/my-first-blog">
          <Article>
            <Img src={chart} alt="Lorem ipsum dolor sit amet dolor sit amet" />
            <ArticleText>
              <h2>Lorem ipsum dolor sit amet dolor sit amet</h2>
              <footer>
                <p>
                  <time dateTime="2021-01-03">3rd January 2021</time>
                </p>
              </footer>
            </ArticleText>
          </Article>
        </ArticleLink>
      </li>
    </ol>
  </Layout>
)

export default Blog
