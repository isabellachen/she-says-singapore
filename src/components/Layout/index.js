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

const Footer = styled.div`
  background-color: firebrick;
  width: 100%;
  height: 2rem;
`

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
