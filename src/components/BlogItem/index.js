import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'
import rehypeReact from 'rehype-react'

const StyledBlogItem = styled.div``

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const BlogItem = ({ blog, fromIndex }) => {
  const description = blog.description.excerpt
  const body = blog.body.markdown.htmlAst

  return (
    <StyledBlogItem>
      <Img sizes={blog.heroImage.fluid} />
      <h1>{blog.title}</h1>
      {description}
      {!fromIndex && body && renderAst(body)}
    </StyledBlogItem>
  )
}

export default BlogItem

export const blogFields = graphql`
  fragment blogFields on ContentfulBlog {
    title
    slug
    publishDate
    author {
      name
    }
    description {
      excerpt: description
    }
    body {
      markdown: childMarkdownRemark {
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
