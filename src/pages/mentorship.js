import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Head from '../components/Head'
import Layout from '../components/Layout'
import { TeamMemberGrid } from '../components/TeamMember'
import { Button } from '../components/Styles'

const SignUpWrapper = styled.div`
  display: flex;
`

const SignUp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid gold;
  margin: 0 8px 10px;
  padding: 0 20px 20px;
  & > h2 {
    font-family: 'Permanent Marker', sans-serif;
    font-size: 2em;
    line-height: 1em;
    text-align: center;
    margin-bottom: 20px;
  }
`
const SplashContainer = styled.div`
  margin: 10px;
`

const MentoringInfo = styled.div`
  margin: 10px;
  & > h1 {
    font-family: 'Permanent Marker';
    margin: 0px;
  }
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
      <SplashContainer>
        <Img sizes={heroImage.fluid} />
      </SplashContainer>
      <MentoringInfo>
        <h1>Our Mission</h1>
        {description.excerpt}
      </MentoringInfo>
      <SignUpWrapper>
        <SignUp>
          <h2>Be a Mentor</h2>
          <Button>Join Us</Button>
        </SignUp>
        <SignUp>
          <h2>Be a Mentee</h2>
          <Button>Sign Up</Button>
        </SignUp>
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
