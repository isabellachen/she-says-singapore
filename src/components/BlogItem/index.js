import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { Button } from '../Styles'

const StyledBlogItem = styled.div`
  margin: 0 10px 0 10px;
`

const Content = styled.div`
  margin-bottom: 5px;
  & > h1 {
    text-decoration: underline;
    text-decoration-color: gold;
    margin: 0;
  }
`

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
      <Content>
        <h1>{blog.title}</h1>
        {description}
        {!fromIndex && body && renderAst(body)}
      </Content>
      <Button>Find Out More</Button>
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
