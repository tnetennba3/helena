import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR, FONT } from "../../styles/tokens"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import coverImage from "./i-read-my-first-book-in-japanese/images/cover.png"

const Article = styled.article`
  position: relative;
  margin: 1rem 0;
  padding: 2px;
  box-shadow: 0 0 0.5rem ${COLOR.ACCENT.LIGHT_GREY};
  background-color: ${COLOR.ACCENT.LIGHT_GREY};
  border-radius: 2px;

  &:hover {
    transform: scale(1.05, 1.05);
    transition: all 0.25s ease-out;
  }
`

const ArticleLink = styled(Link)`
  display: block;
  text-decoration: none;

  &:hover {
    font-weight: ${FONT.WEIGHT.MEDIUM};
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`

const ArticleText = styled.div`
  margin: 0.75rem 1rem 0.5rem;
`

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>
      This is where I write about stuff.{" "}
      <span role="img" aria-label="Writing Hand">
        ✍️
      </span>
    </h1>
    <ol>
      <li>
        <Article>
          <img
            src={coverImage}
            alt="Graph showing reading speed and rate of lookups per chapter trending downwards."
          />
          <ArticleText>
            <h2>
              <ArticleLink to="/blog/i-read-my-first-book-in-japanese/">
                I read my first book in Japanese{" "}
                <span role="img" aria-label="Party Popper">
                  🎉
                </span>
              </ArticleLink>
            </h2>
            <p>
              My 2020 goal was to read Harry Potter and the Philosopher’s Stone
              (or <span lang="ja">ハリー・ポッターと賢者の石</span>) by the end
              of the year. Two weeks ago, I accomplished this goal.
            </p>
            <footer>
              <time dateTime="2021-01-10">10th January 2021</time>
            </footer>
          </ArticleText>
        </Article>
      </li>
    </ol>
    <p>➕ More to come soon.</p>
  </Layout>
)

export default Blog
