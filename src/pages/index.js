import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Head from '../components/Head'
import EventList from '../components/EventsList'
import FrontQuote from '../components/FrontQuote'
import FeaturesList from '../components/FeaturesList'

//pull in Page- about us
//pull in features
//get gatsby node to render features and pages
//link to about us
//dynamically link to features

const IndexPage = ({ data, location }) => {
  console.log(data)
  const { site, events, about, features } = data
  const eventsEdges = events.edges
  return (
    <div>
      <Head
        site={site}
        pageTitle={'Home'}
        path={location.path}
        description={site.meta.description}
      />
      <EventList events={eventsEdges} status={'live'} />
      <FrontQuote about={about} />
      <FeaturesList features={features}/>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const homePageQuery = graphql`
  query IndexQuery {
    ...siteMetaQuery
    events: allEventbriteEvents(filter: { status: { eq: "live" } }) {
      edges {
        node {
          ...eventFields
        }
      }
    }
    about: contentfulPage(title: { eq: "About Us" }) {
      title
      slug
      description {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
    features: allContentfulFeature {
      edges {
        node {
          ...featureFields
        }
      }
    }
  }
`
