import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Head from '../components/Head'
import Layout from '../components/Layout'

const SignUpWrapper = styled.div`
  display: flex;
`

const SignUp = styled.div`
  flex: 1;
`

const Mentorship = ({ data, location }) => {
  const { site, mentorship } = data
  const { title, description, heroImage } = mentorship
  return (
    <Layout>
      <Head
        site={site}
        pageTitle={'Mentorship'}
        path={location.pathname}
        description={site.meta.description}
      />
      <Img sizes={heroImage.fluid} />
      <p>{description.excerpt}</p>
      <SignUpWrapper>
        <SignUp>Be a Mentor</SignUp>
        <SignUp>Be a Mentee</SignUp>
      </SignUpWrapper>
    </Layout>
  )
}

export default Mentorship

export const mentorshipPageQuery = graphql`
  query MentorshipQuery {
    ...siteMetaQuery
    mentorship: contentfulFeature(slug: { eq: "she-says-mentorship" }) {
      ...featureFields
    }
  }
`
