import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'

import favicon from '../../assets/favicon.png'

import NavBar from '../NavBar'

injectGlobal`

  body {
    margin: 0;
    padding: 0;
    background-color: white;
    color: black;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'Open Sans';
    font-style: medium;
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
  display: flex;
  background-color: gold;
  border-top: solid 4px black;
  justify-content: center;
  align-items: center;
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
