import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR, FONT } from "../../styles/tokens"
import Layout from "../../components/layout"
import coverImage from "./i-read-my-first-book-in-japanese/images/cover.png"

const Article = styled.article`
  margin: 1rem 0;
  padding: 2px;
  box-shadow: 0 0 0.5rem ${COLOR.ACCENT.LIGHT_GREY};
  background-color: ${COLOR.ACCENT.LIGHT_GREY};
  border-radius: 2px;
`

const ArticleLink = styled(Link)`
  display: block;
  text-decoration: none;

  &:hover {
    transform: scale(1.05, 1.05);
    transition: all 0.25s ease-out;
    font-weight: ${FONT.WEIGHT.NORMAL};
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
        <ArticleLink to="/blog/i-read-my-first-book-in-japanese">
          <Article>
            <img src={coverImage} alt="Unlabelled graph" />
            <ArticleText>
              <h2>I read my first book in Japanese 🎉</h2>
              <p>
                My 2020 goal was to read Harry Potter and the Philosopher’s
                Stone (or ハリー・ポッターと賢者の石) by the end of the year.
                Two weeks ago, I accomplished this goal.
              </p>
              <footer>
                <time dateTime="2021-01-10">10th January 2021</time>
              </footer>
            </ArticleText>
          </Article>
        </ArticleLink>
      </li>
    </ol>
    <p>➕ More to come soon.</p>
  </Layout>
)

export default Blog
