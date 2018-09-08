import React from 'react'
import styled from 'styled-components'

import Head from '../components/Head'
import Layout from '../components/Layout'

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Cell = styled.div`
  flex: 0 0 32%;
  height: 100px;
  margin-bottom: 5px;
  background-color: firebrick;
`

const renderTeamMember = edges => {
  return edges.map(({ node }) => {
    return <Cell>{node.name}</Cell>
  })
}

const About = ({ data, location }) => {
  const { site, page, team } = data
  console.log(team)
  const description = page.description.text
  const { events, workshops, mentorship } = page
  return (
    <Layout>
      <Head
        site={site}
        pageTitle={'About'}
        path={location.pathname}
        description={description}
      />
      <div>{description}</div>
      <h1> What We Do </h1>
      <p>{events}</p>
      <p>{workshops}</p>
      <p>{mentorship}</p>
      <TeamGrid>{renderTeamMember(team.edges)}</TeamGrid>
    </Layout>
  )
}

export default About

export const aboutPageQuery = graphql`
  query AboutQuery {
    ...siteMetaQuery
    page: contentfulPage(title: { eq: "About Us" }) {
      title
      description {
        text: description
      }
      events: flexibleInfoField_01
      workshops: flexibleInfoField_02
      mentorship: flexibleInfoField_03
    }
    team: allContentfulPerson {
      edges {
        node {
          name
          title
          cv {
            markdown: childMarkdownRemark {
              htmlAst
            }
          }
        }
      }
    }
  }
`
