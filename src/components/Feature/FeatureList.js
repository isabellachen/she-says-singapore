import React from 'react'
import styled from 'styled-components'

import FeatureItem from './FeatureItem'

const StyledFeatureList = styled.div`
  display: flex;
  flex-direction: column;
`

const renderFeatures = edges => {
  return edges.map(({ node }) => {
    return <FeatureItem key={node.slug} feature={node} />
  })
}

function FeatureList({ features }) {
  return (
    <StyledFeatureList>
      {features && renderFeatures(features.edges)}
    </StyledFeatureList>
  )
}

export default FeatureList
