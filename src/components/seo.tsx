import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  title?: string
  description?: string
  image?: string
  lang?: string
}

interface QueryResult {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      siteUrl: string
      image: string
    }
  }
}

const SEO: React.FC<Props> = ({ title, description, image, lang = "en" }) => {
  const { siteMetadata } = useStaticQuery<QueryResult>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  ).site

  const defaultTitle = siteMetadata.title
  const metaTtile = title || defaultTitle
  const metaDescription = description || siteMetadata.description
  const metaImage = `${siteMetadata.siteUrl}${image || siteMetadata.image}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTtile}
      titleTemplate={title ? `%s | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: metaTtile,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTtile,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

export default SEO
