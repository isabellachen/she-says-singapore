import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Cell = styled.div`
  flex: 0 0 32%;
  margin-bottom: 5px;
  background-color: firebrick;
`

const TeamMemberCell = ({ member }) => {
  return (
    <Cell>
      <Img sizes={member.profile.fluid} />
      <span>{member.name}</span>
    </Cell>
  )
}

export default TeamMemberCell

export const teamMemberFields = graphql`
  fragment teamMemberFields on ContentfulPerson {
    name
    id
    title
    mentor
    sorting
    profile {
      fluid(maxWidth: 1280) {
        ...GatsbyContentfulFluid
      }
    }
    cv {
      markdown: childMarkdownRemark {
        htmlAst
      }
    }
  }
`
