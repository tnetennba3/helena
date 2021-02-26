import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import { COLOR } from "../styles/tokens"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Small = styled.small`
  color: ${COLOR.ACCENT.DARK_GREY};
`

const ArticleLink = styled(Link)`
  display: block;
  background: none;
`

const Divider = styled.hr`
  border: solid 2px ${COLOR.ACCENT.LIGHT_GREY};
  margin: 1.5rem 0;
`

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
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
    <>
      <article>
        <Small>
          <time dateTime={date}>{dateFormatted}</time>
        </Small>
        <ArticleLink to={slug}>
          <h2>{title}</h2>
          <Img fluid={image.childImageSharp.fluid} alt={imageAlt} />
        </ArticleLink>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Small>
          <Link to={slug}>
            Read more <span aria-hidden="true">・</span> {node.timeToRead} min
            read
          </Link>
        </Small>
      </article>
      <Divider />
    </>
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
