import React from 'react'
import { graphql } from 'gatsby'
import EventList from '../components/EventsList'

const getEvents = (status, events) => {
  return status === 'live'
    ? events.filter(event => event.node.status === 'live')
    : events.filter(event => event.node.status === 'completed')
}

const EventsPage = ({ data }) => {
  const events = data.events.edges
  return (
    <div>
      <EventList events={getEvents('live', events)} status={'live'} />
      <h1>completed events</h1>
      <EventList events={getEvents('completed', events)} status={'completed'} />
    </div>
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
