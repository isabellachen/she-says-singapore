import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import FeatureItem from '../FeatureItem'

const StyledFeaturesList = styled.div`
  display: flex;
`

const renderFeatures = edges => {
  return edges.map(({ node }) => {
    return <FeatureItem key={node.slug} feature={node} />
  })
}

function FeaturesList({ features }) {
  console.log(features)
  return (
    <StyledFeaturesList>
      {features && renderFeatures(features.edges)}
    </StyledFeaturesList>
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
