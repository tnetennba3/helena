import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  type?: string
  lang?: string
}

interface QueryResult {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      image: string
      twitterHandle: string
    }
  }
}

const SEO: React.FC<Props> = ({
  title,
  description,
  image,
  imageAlt,
  type = "website",
  lang = "en",
}) => {
  const { siteMetadata } = useStaticQuery<QueryResult>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            twitterHandle
          }
        }
      }
    `
  ).site

  const metaDescription = description || siteMetadata.description
  const metaImage = `${siteMetadata.siteUrl}${image || siteMetadata.image}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
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
          property: `og:locale`,
          content: `en_GB`,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.twitterHandle,
        },
        {
          name: `twitter:image:alt`,
          content: imageAlt,
        },
      ]}
    />
  )
}

export default SEO
