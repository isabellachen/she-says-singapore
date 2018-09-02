import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import EventList from '../components/EventsList'

const IndexPage = ({ data, location }) => {
  const { site, events } = data
  const description = "She Says Singapore is the first of its kind in South East Asia"
  const eventsEdges = events.edges
  return (
    <div>
      <Head site={site} pageTitle={'Home'} path={location.path} description={description} />
      <EventList events={eventsEdges} status={'live'} />
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
  }
`
