import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import favicon from '../../assets/favicon.png'

import NavBar from '../NavBar'

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
