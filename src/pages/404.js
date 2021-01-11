import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found 😿</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <p>Return to the <Link to="/">homepage</Link> to see my face. Or to the <Link to="/blog">blog</Link> to read stuff I've written.</p>
  </Layout>
)

export default NotFoundPage
