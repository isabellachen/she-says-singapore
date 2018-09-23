import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'

const Mentorship = ({ data, location }) => {
  const { site, mentorship } = data
  console.log(data)
  return (
    <Layout>
      <Head
        site={site}
        pageTitle={'Mentorship'}
        path={location.pathname}
        description={site.meta.description}
      />
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
