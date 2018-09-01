import { graphql } from 'gatsby'

export const siteMetaQuery = graphql`
  fragment siteMetaQuery on Query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`

export const eventQuery = graphql`
  fragment eventFields on EventbriteEvents {
    name {
      text
    }
    start {
      local
    }
    end {
      local
    }
    description {
      text
    }
    status
    url
    venue: venue__NODE {
      name
      address {
        address_1
        address_2
        postal_code
        city
      }
    }
  }
`
