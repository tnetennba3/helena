import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/journal/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          body
          frontmatter {
            date
          }
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
    allMdx: {
      edges: Node[]
    }
  }
}

const Journal: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Helena’s Japanese Journal" />
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
      But I don't get much practice actually using the language myself.
    </p>
    <p>
      To fix that, I have set myself the goal to write in Japanese every day.
      Every morning, I set a timer for 10 minutes and just see where I can get
      to writing a journal entry. There are bound to be a lot of mistakes here.
      At some point, I might go back and see if I can improve on them. But for
      now, I think I will get a lot out of just forcing myself to write. And
      hopefully, as I get better at writing, it will be motivating to have a
      record of how far I've come.
    </p>
    <ol>{data.allMdx.edges.map(JournalEntry)}</ol>
    <hr />
  </Layout>
)

export default Journal
