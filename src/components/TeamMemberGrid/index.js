import React from 'react'
import styled from 'styled-components'

import TeamMemberCell from '../TeamMemberCell'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const renderTeamMembers = edges => {
  return edges.map(({ node }) => {
    return <TeamMemberCell key={node.id} member={node} />
  })
}

const TeamMemberGrid = ({ team }) => {
  return <Grid>{team && renderTeamMembers(team.edges)}</Grid>
}

export default TeamMemberGrid
