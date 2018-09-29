import React from 'react'
import styled from 'styled-components'
import BlogItem from '../BlogItem'

const StyledBlogsList = styled.div``
const BlogHeader = styled.div`
  height: 50px;
  background-color: black;
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 1.5rem;
  border-bottom: solid 3px gold;
  -webkit-box-shadow: 0 -2px 5px #999;
`

const renderBlogs = (edges, fromIndex) => {
  return edges.map(({ node }) => {
    return <BlogItem key={node.slug} blog={node} fromIndex={fromIndex} />
  })
}

function BlogList({ blogs, fromIndex }) {
  return (
    <StyledBlogsList>
      <BlogHeader>News</BlogHeader>
      {blogs && renderBlogs(blogs.edges, fromIndex)}
    </StyledBlogsList>
  )
}

export default BlogList
