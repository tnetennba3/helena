import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { COLOR } from "../styles/tokens"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Small = styled.small`
  color: ${COLOR.ACCENT.DARK_GREY};
`

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "MMM DD, YYYY")
        ogimage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`

interface Props {
  data: {
    mdx: {
      timeToRead: string
      body: string
      frontmatter: {
        title: string
        description: string
        date: string
        ogimage: {
          childImageSharp: {
            fixed: {
              src: string
            }
          }
        }
      }
    }
  }
}

const Template: React.FC<Props> = ({ data }) => {
  const { frontmatter, body, timeToRead } = data.mdx
  const { title, description, ogimage, date } = frontmatter

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={ogimage.childImageSharp.fixed.src}
      />
      <h1>{title}</h1>
      <Small>
        {date} <span aria-hidden="true">・</span> {timeToRead} min read
      </Small>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default Template
