import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import rehypeReact from 'rehype-react'

const Cell = styled.div`
  flex: 0 0 32%;
  margin-bottom: 5px;
  text-align: center;
  width: 80%;
  @media (min-width: 400px) {
    padding: 0;
  }
`

const StyledImage = styled(Img)`
  border-radius: 100%;
  overflow: hidden;
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const TeamMemberCell = ({ member }) => {
  const cv = member.cv.markdown.htmlAst
  return (
    <Cell>
      <StyledImage sizes={member.profile.fluid} />
      <span>{member && member.name && renderAst(cv)}</span>
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
