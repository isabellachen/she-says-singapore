import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const StyledFeatureItem = styled.div`
  width: 500px;
`

function FeatureItem({ feature }) {
  const htmlAst = feature.description.childMarkdownRemark.htmlAst
  return (
    <StyledFeatureItem>
      <Img sizes={feature.heroImage.fluid} />
      <h1>{feature.title}</h1>
      {htmlAst && renderAst(htmlAst)}
    </StyledFeatureItem>
  )
}

export default FeatureItem
