import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const renderFeatures = edges => {
  return edges.map(edge => {
    return <Img sizes={edge.node.heroImage.fluid} />
  })
}

function FeaturesList({ features }) {
  console.log(features)
  return (
    <div>
      {features && renderFeatures(features.edges)}
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
