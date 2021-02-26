import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hide } from "../components/common"

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        title
        description
        date
        dateFormatted: date(formatString: "MMM DD, YYYY")
        imageAlt
        image {
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
        dateFormatted: string
        imageAlt: string
        image: {
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
  const {
    title,
    description,
    date,
    dateFormatted,
    imageAlt,
    image,
  } = frontmatter

  return (
    <Layout>
      <SEO
        type="article"
        title={title}
        description={description}
        image={image.childImageSharp.fixed.src}
        imageAlt={imageAlt}
      />
      <h1>{title}</h1>
      <small>
        <time dateTime={date}>{dateFormatted}</time> <Hide>・</Hide>{" "}
        {timeToRead} min read
      </small>
      <MDXRenderer>{body}</MDXRenderer>
      <hr />
    </Layout>
  )
}

export default Template
