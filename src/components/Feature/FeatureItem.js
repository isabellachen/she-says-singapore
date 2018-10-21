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
  color: white;
`

const FeatureContent = styled.div`
  border-top: 20px solid black;
  & > p {
    margin: 10px 10px 25px;
  }
`

const renderLink = slug => {
  const link = `/${slug}/`
  if (slug === 'the-drum-she-says-says') {
    return <a href="https://www.thedrum.com/topics/shesays">Find Out More</a>
  } else {
    return <Link to={link}>Find Out More</Link>
  }
}

function FeatureItem({ feature }) {
  const excerpt = feature.description.excerpt
  return (
    <StyledFeatureItem>
      <FeatureTitle>{feature.title}</FeatureTitle>
      <FeatureContent>
        <Img sizes={feature.heroImage.fluid} />
        <p>{excerpt}</p>
      </FeatureContent>
      <Button>{renderLink(feature.slug)}</Button>
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
