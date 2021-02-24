import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from '../layout'
import ProjectIntro from './intro'
import ProjectCover from './cover'
import Tldr from '../tldr'

const ProjectLayout = ({ data : { mdx }}) => {
    const { body, frontmatter: {title, category, cover, tldr }} = mdx

    return(
        <Layout>
            <ProjectIntro title={title} category={category} />
            <ProjectCover image={cover.childImageSharp.fluid} />
            <Tldr data={tldr}/>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}


export default ProjectLayout

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        type
        tldr {
          company
          role
          date
          skills
          credits
          tools
        }
        cover {
          childImageSharp {
            fluid (maxWidth: 1200){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`