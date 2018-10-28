/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const anchorate = require('anchorate').anchorate

exports.onRouteUpdate = () => {
  anchorate({
    scroller: function(element) {
      if (!element) return false
      element.scrollIntoView({ behavior: 'smooth' })
      return true
    },
    callback: function(error) {
      if (error) {
        console.error(error)
      }
    },
  })
}
