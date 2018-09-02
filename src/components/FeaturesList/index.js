import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

function FeaturesList({ features }) {
  console.log(features)
  return (
    <div>
      <Img sizes={features.edges[1].node.heroImage.fluid} />
    </div>
  )
}

export default FeaturesList

export const featureFields = graphql`
  fragment featureFields on ContentfulFeature {
    title
    slug
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
