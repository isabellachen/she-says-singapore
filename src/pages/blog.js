import React from 'react'
import styled from 'styled-components'

import Head from '../components/Head'
import Layout from '../components/Layout'

const Blog = ({ data, location }) => {
  console.log(data, location)
  return <div>BLOG PAGE</div>
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
