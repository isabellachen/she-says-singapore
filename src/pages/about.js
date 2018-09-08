import React from 'react'
import styled from 'styled-components'

import Head from '../components/Head'
import Layout from '../components/Layout'

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const TeamMemberCell = styled.div`
  flex: 0 0 32%;
  height: 100px;
  margin-bottom: 5px;
  background-color: firebrick;
`

const ActivityGrid = styled.div`
  @media (min-width: 800px) {
    background-color: teal;
  }
`

const ActivityCell = styled.div`
  flex: 0 0 32%;
  height: 100px;
  margin-bottom: 5px;
`

const renderTeamMember = edges => {
  return edges.map(({ node }) => {
    return <TeamMemberCell key={node.id}>{node.name}</TeamMemberCell>
  })
}

const About = ({ data, location }) => {
  const { site, page, team } = data
  console.log(team)
  const description = page.description.text
  const { events, workshops, mentorship } = page
  return (
    <Layout>
      <Head
        site={site}
        pageTitle={'About'}
        path={location.pathname}
        description={description}
      />
      <div>{description}</div>
      <h1> What We Do </h1>
      <ActivityGrid>
        <ActivityCell>{events}</ActivityCell>
        <ActivityCell>{workshops}</ActivityCell>
        <ActivityCell>{mentorship}</ActivityCell>
      </ActivityGrid>
      <h1>The Team</h1>
      <TeamGrid>{renderTeamMember(team.edges)}</TeamGrid>
    </Layout>
  )
}

export default About

export const aboutPageQuery = graphql`
  query AboutQuery {
    ...siteMetaQuery
    page: contentfulPage(title: { eq: "About Us" }) {
      title
      description {
        text: description
      }
      events: flexibleInfoField_01
      workshops: flexibleInfoField_02
      mentorship: flexibleInfoField_03
    }
    team: allContentfulPerson {
      edges {
        node {
          name
          title
          cv {
            markdown: childMarkdownRemark {
              htmlAst
            }
          }
        }
      }
    }
  }
`
