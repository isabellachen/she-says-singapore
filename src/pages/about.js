import React from 'react'
import styled from 'styled-components'

import Head from '../components/Head'
import Layout from '../components/Layout'
import TeamMemberGrid from '../components/TeamMemberGrid'

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
      <TeamMemberGrid team={team} />
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
          ...teamMemberFields
        }
      }
    }
  }
`
