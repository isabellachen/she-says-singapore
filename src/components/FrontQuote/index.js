import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'
import styled from 'styled-components'

import { SplashTitle } from '../styles'

const QuoteWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  background-color: gold;
  -webkit-box-shadow: 0 -2px 5px #999;
  & > p {
    line-height: 1.5rem;
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const FrontQuote = ({ about }) => {
  const htmlAst = about.description.childMarkdownRemark.htmlAst
  return (
    <QuoteWrapper>
      <SplashTitle>We Are</SplashTitle>
      <p>{htmlAst && renderAst(htmlAst)}</p>
    </QuoteWrapper>
  )
}

export default FrontQuote

export const FrontQuoteFields = graphql`
  fragment frontQuoteFields on ContentfulPage {
    title
    slug
    description {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`
