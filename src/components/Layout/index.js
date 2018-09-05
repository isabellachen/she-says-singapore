import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'

import favicon from '../../assets/favicon.png'

import NavBar from '../NavBar'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
`

const Footer = styled.div`
  background-color: firebrick;
  width: 100%;
  height: 2rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contact: contentfulPage(slug: { eq: "contact-us" }) {
          email
        }
      }
    `}
    render={({ contact }) => (
      <Container>
        <Helmet>
          <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
        <NavBar />
        <Content>{children}</Content>
        <Footer>{contact.email}</Footer>
      </Container>
    )}
  />
)

export default Layout
