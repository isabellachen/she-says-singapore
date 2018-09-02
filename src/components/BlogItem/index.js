import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'

const StyledBlogItem = styled.div`
  width: 800px;
  border: 2px solid pink;
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const BlogItem = ({ blog }) => {
  console.log('from blogitem: ', blog)
  const htmlAst = blog.description.childMarkdownRemark.htmlAst
  return (
    <StyledBlogItem>
      <Img sizes={blog.heroImage.fluid} />
      <h1>{blog.title}</h1>
      {htmlAst && renderAst(htmlAst)}
    </StyledBlogItem>
  )
}

export default BlogItem
