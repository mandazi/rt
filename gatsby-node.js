/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

//const fs = require(`fs`);
//const seriesData = fs.readFileSync("./src/content/series.json");
const seriesDataRaw = require('./src/content/series.json');

// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent)
        console.log(`\n`, fileNode.relativePath)
    }
}

exports.createPages = async ({ actions: { createPage } }) => {
    const seriesData = JSON.stringify(seriesDataRaw);
    
    // Create a page for each series.
    seriesData.forEach(series => {
      console.log('series',series);
      createPage({
        path: `/series/${series.url}/`,
        component: require.resolve("./src/templates/series-single.js"),
        context: { series },
      })
    })
  }