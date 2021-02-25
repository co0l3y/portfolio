const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'Mdx') {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: 'slug',
            node,
            value: `/case-studies${value}`
        })
    }
}

const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    const projects = result.data.allMdx.edges

    projects.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/components/projects/projects.js'),
            context: { id: node.id },
        })
    })
}