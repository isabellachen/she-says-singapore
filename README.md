# She Says Singapore

Website for the She Says Singapore Chapter. SheSays SG is an award-winning organization running free events and mentorship for women across a variety of industries including creative, digital, technology and communications.

### Stage

The website is still a work in progress.

### Tech

The site uses Gatsby v2 and GraphQl, with the Contentful and Eventbrite APIs. To get information from Eventbrite, it uses a custom plugin [gatsby-source-eventbrite](https://github.com/isabellachen/gatsby-source-eventbrite).

### Installing the plugin

`cd` into the plugins folder and clone the plugin as a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Add the [.babel-preset.js](https://gist.github.com/isabellachen/da18d33f170970b117934e620f3fd58d) file to the root and `npm i` to install dependencies. `npm run build` to transpile the src files, chucking them into the root of gatsby-source-eventrbite. Gatsby will look for plugin files in the root.

### Setting up the project

Make sure all the plugins and their options are listed in the `gatsby-config.js` file. In the root, `gatsby develop` to run the project.

### Develop Endpoints

[Homepage](http://localhost:8000)
[GraphQL Apollo Server](http://localhost:8000/___graphql)
