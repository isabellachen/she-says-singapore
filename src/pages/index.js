import React, { Component } from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'

import Head from '../components/Head'
import EventList from '../components/EventsList'
import FrontQuote from '../components/FrontQuote'
import FeaturesList from '../components/FeaturesList'
import BlogsList from '../components/BlogsList'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
`
const NavContainer = styled.div`
  position: relative;
`
const StyledNav = styled.div`
  position: relative;
  width: 100%;
  height: 2rem;
  background-color: firebrick;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`
const Menu = styled.div`
  position: absolute;
  top: 2rem;
  background-color: blue;
  left: 0;
  width: 100%;
  transition: transform 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${props => (props.isOpen ? 'none' : 'translateY(-100%)')};

  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

//pull in Page- about us
//pull in features
//get gatsby node to render features and pages
//link to about us
//dynamically link to features

class Nav extends Component {
  state = {
    isOpen: false,
  }

  toggleMenu = () => {
    this.setState(state => ({ isOpen: !state.isOpen }))
  }

  render() {
    return (
      <NavContainer>
        <StyledNav>
          <span>logo</span>
          <button onClick={this.toggleMenu}>button</button>
        </StyledNav>
        <Menu isOpen={this.state.isOpen}>
          <ul>
            <li>about</li>
            <li>contact</li>
            <li>blog</li>
          </ul>
        </Menu>
      </NavContainer>
    )
  }
}

const IndexPage = ({ data, location }) => {
  const { site, events, about, features, blogs } = data
  const eventsEdges = events.edges
  return (
    <MainContainer>
      <Head
        site={site}
        pageTitle={'Home'}
        path={location.path}
        description={site.meta.description}
      />
      <Nav />
      <EventList events={eventsEdges} status={'live'} />
      <FrontQuote about={about} />
      <FeaturesList features={features} />
      <BlogsList blogs={blogs} />
      <Link to="/page-2/">Go to page 2</Link>
    </MainContainer>
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
    about: contentfulPage(title: { eq: "About Us" }) {
      ...frontQuoteFields
    }
    features: allContentfulFeature {
      edges {
        node {
          ...featureFields
        }
      }
    }
    blogs: allContentfulBlog {
      edges {
        node {
          ...blogFields
        }
      }
    }
  }
`
