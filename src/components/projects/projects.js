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
    const { body, frontmatter: {title, type, cover, tldr, sectionImages, galleries, phoneGalleries }} = mdx

    const imageReducer = (images, image, index) => {
      images[`${image.id}`] = images[`${image.id}`] || image.src.childImageSharp.fluid
      
      return images
    }

    const galleryReducer = (galleriesAcc, gallery, index) => {
      galleriesAcc[`${gallery.id}`] = galleriesAcc[`${gallery.id}`] || gallery.images
      
      return galleriesAcc
    }

    const galleriesById =
      galleries &&
      galleries.reduce(galleryReducer, {})
    
    const phoneGalleriesById =
      phoneGalleries &&
      phoneGalleries.reduce(galleryReducer, {})

    const sectionImagesById = 
      sectionImages &&
      sectionImages.reduce(imageReducer, {})
      

    return(
        <Layout>
            <ProjectIntro title={title} category={type} />
            <ProjectCover image={cover.childImageSharp.fluid} />
            <Tldr data={tldr}/>
            <MDXProvider components={{
              h4: props => <h4 {...props} className={styles.contentHeader}/>,
              p: props => <p {...props} className={styles.contentBody} />,
            }}>
            <MDXRenderer sectionImages={sectionImagesById} galleries={galleriesById} phoneGalleries={phoneGalleriesById}>{body}</MDXRenderer>
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
            fluid (maxWidth: 1600){
              ...GatsbyImageSharpFluid
            }
          }
        }
        sectionImages {
          id
          src {
            childImageSharp {
              fluid (maxWidth: 1200){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        galleries {
          id
          images {
            childImageSharp {
              fluid (maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        phoneGalleries {
          id
          images {
            childImageSharp {
              fluid (maxWidth: 650) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`