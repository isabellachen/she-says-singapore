import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import EventList from '../components/EventsList'

const IndexPage = ({ data }) => {
  const events = data.events.edges
  return (
    <div>
      <EventList events={events} status={"live"}/>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
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
