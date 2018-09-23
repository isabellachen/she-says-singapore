import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledFeatureItem = styled.div``

function FeatureItem({ feature }) {
  const excerpt = feature.description.excerpt
  return (
    <StyledFeatureItem>
      <Img sizes={feature.heroImage.fluid} />
      <h1>{feature.title}</h1>
      <p>{excerpt}</p>
    </StyledFeatureItem>
  )
}

export default FeatureItem

export const featureFields = graphql`
  fragment featureFields on ContentfulFeature {
    title
    slug
    description {
      excerpt: description
    }
    heroImage {
      fluid(maxWidth: 1280) {
        ...GatsbyContentfulFluid
      }
    }
  }
`
