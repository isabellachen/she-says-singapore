import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

const Head = ({ site, pageTitle, path, description }) => {
  const { title: siteTitle, url } = site.meta
  return (
    <Helmet>
      <title>{`${pageTitle} | ${siteTitle}`}</title>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content={url + path} />
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="description" content={description} />}
    </Helmet>
  )
}

export default Head

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
