import React from 'react'
import rehypeReact from 'rehype-react'
import styled from 'styled-components'

const FocusCircle = styled.div`
  background-color: firebrick;
`
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'focus-circle': FocusCircle,
  },
}).Compiler

const About = ({ data }) => {
  const { site, page } = data
  const descHtmlAst = page.description.markdown.htmlAst
  const bodyHtmlAst = page.body.markdown.htmlAst
  return (
    <div>
      {descHtmlAst && renderAst(descHtmlAst)}
      {bodyHtmlAst && renderAst(bodyHtmlAst)}
    </div>
  )
}

export default About

export const aboutPageQuery = graphql`
  query AboutQuery {
    ...siteMetaQuery
    page: contentfulPage(title: { eq: "About Us" }) {
      title
      description {
        markdown: childMarkdownRemark {
          htmlAst
        }
      }
      body {
        markdown: childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`
