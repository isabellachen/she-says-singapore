import React from 'react'
import styled from 'styled-components'

import Head from '../components/Head'
import Layout from '../components/Layout'
import BlogsList from '../components/Blog'

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
      <BlogsList blogs={blogs} />
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
