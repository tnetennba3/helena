import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    image: file(relativePath: { eq: "journal-cover.png" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
    journalEntries: allMdx(
      filter: { fileAbsolutePath: { regex: "/journal/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            date
            dateFormatted: date(formatString: "Do MMMM YYYY")
          }
          body
        }
      }
    }
  }
`

interface Node {
  node: {
    body: string
    frontmatter: {
      date: string
    }
  }
}

const JournalEntry: React.FC<Node> = ({ node }) => (
  <>
    <hr />
    <li>
      <article>
        <small>
          <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
        </small>
        <div lang="ja">
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>
      </article>
    </li>
  </>
)

interface Props {
  data: {
    image: {
      childImageSharp: {
        fixed: {
          src: string
        }
      }
    }
    journalEntries: {
      edges: Node[]
    }
  }
}

const Journal: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      title="Helena’s Japanese Journal"
      description="I keep a Japanese journal to force myself to practice writing. Every morning, I set a timer for ten minutes and see what I can output in that time."
      image={data.image.childImageSharp.fixed.src}
      imageAlt="Helena in Ueno Park, Japan."
    />
    <h1>
      This is where I write in Japanese.{" "}
      <span role="img" aria-label="Japanese Flag">
        🇯🇵
      </span>
    </h1>
    <p>
      I am currently learning Japanese and have spent a lot of time consuming
      the language. Whether that’s hearing my mum scold me as a child, watching
      TV shows, or more recently,{" "}
      <Link to="/blog/i-read-my-first-book-in-japanese/">reading books</Link>.
      But I don't get much practice actually using the language.
    </p>
    <p>
      So, I have set myself the goal to write in Japanese every day. Every
      morning, I set a timer for ten minutes and see what I can write in that
      time. There are bound to be a lot of mistakes here. At some point, I might
      go back and see if I can correct each post. But for now, I think I will
      get a lot out of just forcing myself to write. And hopefully, as I get
      better at writing, it will be motivating to have a record of how far I've
      come.
    </p>
    <ol>{data.journalEntries.edges.map(JournalEntry)}</ol>
    <hr />
  </Layout>
)

export default Journal
