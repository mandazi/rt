/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const seriesData = require('./src/content/series.json');

// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent)
        console.log(`\n`, fileNode.relativePath)
    }
}

exports.createPages = async ({ actions: { createPage } }) => {

  const seriesContent = seriesData.content;

  seriesContent.forEach(series => {

    const seriesData = require('./src/content/series/'+series.url+'.json');
    const episodes = seriesData.episodes;

    createPage({
      path: `/series/${series.url}/`,
      component: require.resolve("./src/templates/series-template.js"),
      context: { series, episodes },
    })

    if ( episodes && episodes.length > 0){
      episodes.forEach( episode => {
        createPage({
          path: `/series/${series.url}/episode/${episode.episode}/`,
          component: require.resolve("./src/templates/episode-template.js"),
          context: { episode, series },
        });
      });
    }
  })
}