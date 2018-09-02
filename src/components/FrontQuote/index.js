import React from 'react'
import rehypeReact from 'rehype-react'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const FrontQuote = ({ about }) => {
  const htmlAst = about.description.childMarkdownRemark.htmlAst
  return <div>{htmlAst && renderAst(htmlAst)}</div>
}

export default FrontQuote
