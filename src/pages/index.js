import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Head from '../components/Head'
import { EventList } from '../components/Event'
import FrontQuote from '../components/FrontQuote'
import { FeatureList } from '../components/Feature'
import { BlogList } from '../components/Blog'

import Layout from '../components/Layout'

const IndexPage = ({ data, location }) => {
  const { site, events, about, features, blogs } = data
  const eventsEdges = events.edges
  return (
    <Layout>
      <Head
        site={site}
        pageTitle={'Home'}
        path={location.pathname}
        description={site.meta.description}
      />
      <EventList events={eventsEdges} status={'live'} />
      <FrontQuote about={about} />
      <FeatureList features={features} />
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
