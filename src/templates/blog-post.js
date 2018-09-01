import React, { Component } from 'react'

export default class BlogPost extends Component {
  render() {
    const { title, body } = this.props.data.contentfulBlog
    return (
      <div>
        <div>{title}</div>
        <div dangerouslySetInnerHTML={{ __html: body.markdown.html }} />
      </div>
    )
  }
}

export const blogPostQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      body {
        markdown: childMarkdownRemark {
          html
        }
      }
    }
  }
`
