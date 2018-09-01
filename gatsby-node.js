const path = require('path')
// const {graphql} = require('gatsby')

const blogPostTemplate = path.resolve('src/templates/blog-post.js')

const contentfulQuery = contentType => `
  {
    content: allContentful${contentType} (limit: 100) {
      edges {
        node {
          slug
        }
      }
    }
  }
`

const pageSets = [
  {
    query: contentfulQuery('Blog'),
    component: blogPostTemplate,
    pathPrefix: 'blog/',
  },
]

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  pageSets.forEach(async ({ query, component, pathPrefix }) => {
    const response = await graphql(query)
    if (response.errors) {
      console.error(response.errors)
      throw new Error(response.errors)
    }
    response.data.content.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
