import React from 'react'
import styled from 'styled-components'

import TeamMemberCell from './TeamMemberCell'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const renderTeamMembers = (members, fromMentorship) => {
  if (fromMentorship) {
    members = members.filter(edge => edge.node.mentor === true)
  }
  const sorted = members.sort((a, b) => a.node.sorting - b.node.sorting)
  return sorted.map(({ node }) => {
    return <TeamMemberCell key={node.id} member={node} />
  })
}

const TeamMemberGrid = ({ team, fromMentorship }) => {
  return <Grid>{team && renderTeamMembers(team.edges, fromMentorship)}</Grid>
}

export default TeamMemberGrid
