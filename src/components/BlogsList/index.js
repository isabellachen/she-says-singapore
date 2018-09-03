import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BlogItem from '../BlogItem'

const StyledBlogsList = styled.div``

const renderBlogs = edges => {
  console.log('renderblogs: ', edges)
  return edges.map(({ node }) => {
    return <BlogItem key={node.slug} blog={node} />
  })
}

function BlogList({ blogs }) {
  console.log('from bloglist')
  return <StyledBlogsList>{blogs && renderBlogs(blogs.edges)}</StyledBlogsList>
}

export default BlogList

export const blogFields = graphql`
  fragment blogFields on ContentfulBlog {
    title
    slug
    publishDate
    author {
      name
    }
    description {
      childMarkdownRemark {
        htmlAst
      }
    }
    heroImage {
      fluid(maxWidth: 1280) {
        ...GatsbyContentfulFluid
      }
    }
  }
`
