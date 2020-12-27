/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import Series from "../components/series";


// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent)
        console.log(`\n`, fileNode.relativePath)
    }
}

exports.createPages = async ({ actions: { createPage } }) => {
    // `getSeries` is a function that fetches our data
    const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])
    // Create a page that lists all Pokémon.
    createPage({
      path: `/`,
      component: require.resolve("./src/templates/all-pokemon.js"),
      context: { allPokemon },
    })
    // Create a page for each Pokémon.
    allPokemon.forEach(pokemon => {
      createPage({
        path: `/pokemon/${pokemon.name}/`,
        component: require.resolve("./src/templates/pokemon.js"),
        context: { pokemon },
      })
    })
  }