import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import { COLOR, FONT } from "../styles/tokens"
import Layout from "../components/layout"
import SEO from "../components/seo"

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

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
      edges {
        node {
          frontmatter {
            slug
            title
            description
            date
            dateFormatted: date(formatString: "Do MMMM YYYY")
            imageAlt
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

interface Node {
  node: {
    frontmatter: {
      slug: string
      title: string
      description: string
      date: string
      dateFormatted: string
      imageAlt: string
      image: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const Card: React.FC<Node> = ({ node }) => {
  const {
    slug,
    title,
    description,
    date,
    dateFormatted,
    imageAlt,
    image,
  } = node.frontmatter

  return (
    <li key={title}>
      <Article>
        <Img fluid={image.childImageSharp.fluid} alt={imageAlt} />
        <ArticleText>
          <h2>
            <ArticleLink to={slug}>{title}</ArticleLink>
          </h2>
          <p>{description}</p>
          <footer>
            <time dateTime={date}>{dateFormatted}</time>
          </footer>
        </ArticleText>
      </Article>
    </li>
  )
}

interface Props {
  data: {
    allMdx: {
      edges: Node[]
    }
  }
}

const Blog: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Helena’s Blog" />
    <h1>
      This is where I write about stuff.{" "}
      <span role="img" aria-label="Writing Hand">
        ✍️
      </span>
    </h1>
    <ol>{data.allMdx.edges.map(Card)}</ol>
    <p>➕ More to come soon.</p>
  </Layout>
)

export default Blog
