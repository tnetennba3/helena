import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hide } from "../components/common"

const ArticleLink = styled(Link)`
  display: block;
  background: none;
`

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            slug
            title
            date
            dateFormatted: date(formatString: "Do MMMM YYYY")
            excerpt
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
    timeToRead: string
    frontmatter: {
      slug: string
      title: string
      date: string
      dateFormatted: string
      excerpt: string
      imageAlt: string
      image: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const BlogPost: React.FC<Node> = ({ node }) => {
  const {
    slug,
    title,
    date,
    dateFormatted,
    excerpt,
    imageAlt,
    image,
  } = node.frontmatter

  return (
    <li>
      <article>
        <small>
          <time dateTime={date}>{dateFormatted}</time>
        </small>
        <ArticleLink to={slug}>
          <h2>{title}</h2>
          <Img fluid={image.childImageSharp.fluid} alt={imageAlt} />
        </ArticleLink>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <small>
          <Link to={slug}>
            Read more <Hide>・</Hide> {node.timeToRead} min read
          </Link>
        </small>
      </article>
      <hr />
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
    <ol>{data.allMdx.edges.map(BlogPost)}</ol>
  </Layout>
)

export default Blog
