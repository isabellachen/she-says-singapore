import React from 'react'
import { graphql } from 'gatsby'

import EventList from '../components/Event'
import Layout from '../components/Layout'

const getEvents = (status, events) => {
  return status === 'live'
    ? events.filter(event => event.node.status === 'live')
    : events.filter(event => event.node.status === 'completed')
}

const EventsPage = ({ data }) => {
  const events = data.events.edges
  return (
    <Layout>
      <EventList events={getEvents('live', events)} status={'live'} />
      <h1>completed events</h1>
      <EventList events={getEvents('completed', events)} status={'completed'} />
    </Layout>
  )
}

export default EventsPage

export const homePageQuery = graphql`
  query EventsListQuery {
    ...siteMetaQuery
    events: allEventbriteEvents {
      edges {
        node {
          ...eventFields
        }
      }
    }
  }
`
