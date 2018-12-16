import React from 'react'
import { graphql } from 'gatsby'

import Head from '../components/Head'
import { EventList } from '../components/Event'
import FrontQuote from '../components/FrontQuote'
import { FeatureList } from '../components/Feature'
import { BlogList } from '../components/Blog'
import JoinUs from '../components/JoinUs'

import Layout from '../components/Layout'

const renderLiveEvents = eventsEdges => {
  if (eventsEdges) {
    return <EventList events={eventsEdges} status={'live'} />
  }
}

const IndexPage = ({ data, location }) => {
  const { site, events, about, features, blogs } = data
  const eventsEdges = events ? events.edges : null
  return (
    <Layout>
      <Head
        site={site}
        pageTitle={'Home'}
        path={location.pathname}
        description={site.meta.description}
      />
      {renderLiveEvents(eventsEdges)}
      <FrontQuote about={about} />
      <FeatureList features={features} />
      <div id="join-us">
        <JoinUs />
      </div>
      <BlogList blogs={blogs} fromIndex={true} />
    </Layout>
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
      ...frontQuoteFields
    }
    features: allContentfulFeature {
      edges {
        node {
          ...featureFields
        }
      }
    }
    blogs: allContentfulBlog {
      edges {
        node {
          ...blogFields
        }
      }
    }
  }
`
