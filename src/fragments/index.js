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
  fragment eventFields on ContentfulEvent {
    title
    date
    location {
      lon
      lat
    }
    description {
      description
    }
    body {
      data: childMarkdownRemark {
        htmlAst
      }
    }
  }
`
