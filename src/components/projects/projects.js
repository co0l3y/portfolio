import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from '../layout'
import ProjectIntro from './intro'
import ProjectCover from './cover'
import Tldr from '../tldr'
import styles from './projects.module.css'

const ProjectLayout = ({ data : { mdx }}) => {
    const { body, frontmatter: {title, type, cover, tldr }} = mdx

    return(
        <Layout>
            <ProjectIntro title={title} category={type} />
            <ProjectCover image={cover.childImageSharp.fluid} />
            <Tldr data={tldr}/>
            <MDXProvider components={{
              h4: props => <h4 {...props} className={styles.contentHeader}/>,
              p: props => <p {...props} className={styles.contentBody} />,
            }}>
            <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
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