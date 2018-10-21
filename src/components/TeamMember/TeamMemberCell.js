import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
  flex: 0 0 32%;
  height: 100px;
  margin-bottom: 5px;
  background-color: firebrick;
`

const TeamMemberCell = ({ member }) => {
  return <Cell>{member.name}</Cell>
}

export default TeamMemberCell

export const teamMemberFields = graphql`
  fragment teamMemberFields on ContentfulPerson {
    name
    id
    title
    mentor
    cv {
      markdown: childMarkdownRemark {
        htmlAst
      }
    }
  }
`
