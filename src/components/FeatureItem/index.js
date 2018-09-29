import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledFeatureItem = styled.div`
  position: relative;
`

const FeatureTitle = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  z-index: 9999;
  font-size: 1.25rem;
  padding: 10px;
  top: -8px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  left: 0;
  right: 0;
  text-align: center;
  -webkit-box-shadow: 0 2px 5px #000;
`

const FeatureContent = styled.div`
  border-top: 20px solid black;
  & > p {
    margin: 10px 10px 25px;
  }
`

function FeatureItem({ feature }) {
  const excerpt = feature.description.excerpt
  return (
    <StyledFeatureItem>
      <FeatureTitle>{feature.title}</FeatureTitle>
      <FeatureContent>
        <Img sizes={feature.heroImage.fluid} />
        <p>{excerpt}</p>
      </FeatureContent>
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
