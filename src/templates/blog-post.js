import React, { Component } from 'react'
import rehypeReact from 'rehype-react'

import Layout from '../components/Layout'
import Head from '../components/Head'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

export default class BlogPost extends Component {
  render() {
    const { data, location } = this.props
    const { blog, site } = data
    const htmlAst = blog.body.childMarkdownRemark.htmlAst
    return (
      <Layout>
        <Head
          site={site}
          pageTitle={blog.title}
          path={location.pathname}
          description={site.meta.description}
        />
        <div>{blog.title}</div>
        {htmlAst && renderAst(htmlAst)}
      </Layout>
    )
  }
}

export const blogPostQuery = graphql`
  query blogPostQuery($slug: String!) {
    ...siteMetaQuery
    blog: contentfulBlog(slug: { eq: $slug }) {
      ...blogFields
    }
  }
`
