import { graphql } from 'gatsby'

export const siteMetaQuery = graphql`
  fragment siteMetaQuery on Query {
    site {
      meta: siteMetadata {
        title
        description
        url
      }
    }
  }
`
