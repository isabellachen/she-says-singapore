const contentful = require('./private/conf.json').contentful
const eventbrite = require('./private/conf.json').eventbrite

module.exports = {
  siteMetadata: {
    title: 'She Says | Singapore',
    description:
      'Singapore chapter of She Says, a network for the advancement of women in the creative tech industries.',
    url: 'https://shesays.sg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: contentful.spaceId,
        accessToken: contentful.accessToken,
      },
    },
    {
      resolve: 'gatsby-source-eventbrite',
      options: {
        organizationId: eventbrite.organizationId,
        accessToken: eventbrite.accessToken,
      },
    },
  ],
}
