import React from 'react'
import styled from 'styled-components'
import BlogItem from '../BlogItem'

const StyledBlogsList = styled.div``

const renderBlogs = (edges, fromIndex) => {
  return edges.map(({ node }) => {
    return <BlogItem key={node.slug} blog={node} fromIndex={fromIndex} />
  })
}

function BlogList({ blogs, fromIndex }) {
  return (
    <StyledBlogsList>
      {blogs && renderBlogs(blogs.edges, fromIndex)}
    </StyledBlogsList>
  )
}

export default BlogList
