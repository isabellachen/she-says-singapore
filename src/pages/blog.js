import React from 'react'

import Head from '../components/Head'
import Layout from '../components/Layout'
import { BlogList } from '../components/Blog'

const Blog = ({ data, location }) => {
  const { site, blogs } = data
  return (
    <Layout>
      <Head
        site={site}
        pageTitle={'Blog'}
        path={location.pathname}
        description={site.meta.description}
      />
      <BlogList blogs={blogs} />
    </Layout>
  )
}

export default Blog

export const blogPageQuery = graphql`
  query BlogQuery {
    ...siteMetaQuery
    blogs: allContentfulBlog {
      edges {
        node {
          ...blogFields
        }
      }
    }
  }
`
