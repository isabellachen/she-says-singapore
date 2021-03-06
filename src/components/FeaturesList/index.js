import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import FeatureItem from '../FeatureItem'

const StyledFeaturesList = styled.div`
  display: flex;
  flex-direction: column;
`

const renderFeatures = edges => {
  return edges.map(({ node }) => {
    return <FeatureItem key={node.slug} feature={node} />
  })
}

function FeaturesList({ features }) {
  return (
    <StyledFeaturesList>
      {features && renderFeatures(features.edges)}
    </StyledFeaturesList>
  )
}

export default FeaturesList
