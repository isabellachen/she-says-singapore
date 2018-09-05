import React, { Component } from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Head from '../components/Head'
import EventList from '../components/EventsList'
import FrontQuote from '../components/FrontQuote'
import FeaturesList from '../components/FeaturesList'
import BlogsList from '../components/BlogsList'

import Layout from '../components/Layout'

//get gatsby node to render features and pages
//link to about us
//dynamically link to features

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
      <FeaturesList features={features} />
      <BlogsList blogs={blogs} />
      <Link to="/page-2/">Go to page 2</Link>
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
