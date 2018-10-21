import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Head from '../components/Head'
import Layout from '../components/Layout'
import { TeamMemberGrid } from '../components/TeamMember'

const SignUpWrapper = styled.div`
  display: flex;
`

const SignUp = styled.div`
  flex: 1;
`

const renderContactPerson = team => {
  const contactPerson = team.edges.filter(
    edge => edge.node.name === 'Meera Jane Nava'
  )[0]
  return contactPerson.node.name
}

const Mentorship = ({ data, location }) => {
  const { site, mentorship, team } = data
  const { title, description, heroImage } = mentorship
  return (
    <Layout>
      <Head
        site={site}
        pageTitle={title}
        path={location.pathname}
        description={site.meta.description}
      />
      <Img sizes={heroImage.fluid} />
      <p>{description.excerpt}</p>
      <SignUpWrapper>
        <SignUp>Be a Mentor</SignUp>
        <SignUp>Be a Mentee</SignUp>
      </SignUpWrapper>
      <TeamMemberGrid team={team} fromMentorship={true} />
      <h1>Questions?</h1>
      <h3>{renderContactPerson(team)}</h3>
    </Layout>
  )
}

export default Mentorship

export const mentorshipPageQuery = graphql`
  query MentorshipQuery {
    ...siteMetaQuery
    mentorship: contentfulFeature(slug: { eq: "mentorship" }) {
      ...featureFields
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
