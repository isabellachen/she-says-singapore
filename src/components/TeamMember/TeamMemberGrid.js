import React from 'react'
import styled from 'styled-components'

import TeamMemberCell from './TeamMemberCell'

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  @media (min-width: 400px) {
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
  }
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
