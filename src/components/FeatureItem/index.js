import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Button } from '../Styles'
import Link from 'gatsby-link'

const StyledFeatureItem = styled.div`
  position: relative;
`

const FeatureTitle = styled.div`
  position: absolute;
  background-color: black;
  z-index: 9999;
  font-size: 1.25rem;
  padding: 10px 0;
  top: -8px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  left: 0;
  right: 0;
  text-align: center;
  -webkit-box-shadow: 0 2px 5px #000;
`

const LinkedTitle = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: gold;
    color: black;
  }
`

const FeatureContent = styled.div`
  border-top: 20px solid black;
  & > p {
    margin: 10px 10px 25px;
  }
`

function FeatureItem({ feature }) {
  const excerpt = feature.description.excerpt
  const link = `/${feature.slug}`
  return (
    <StyledFeatureItem>
      <FeatureTitle>
        <LinkedTitle>{feature.title}</LinkedTitle>
      </FeatureTitle>
      <FeatureContent>
        <Img sizes={feature.heroImage.fluid} />
        <p>{excerpt}</p>
      </FeatureContent>
      <Button>
        <Link to={link}>Find Out More</Link>
      </Button>
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
