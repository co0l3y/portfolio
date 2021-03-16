import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import styles from './case-studies.module.css'

import Layout from '../layout'
import ProjectIntro from './intro'
import ProjectCover from './cover'
import Tldr from '../tldr'
import BackgroundSceneSvg from '../background-scene'
import DeskSequence from '../desk-sequence'
import CaseGallery from '../case-gallery'

import { bgSceneCaseAnim, killScrollTrigger, refreshScrollTrigger } from '../Anim'
import SEO from "../seo"


const ProjectLayout = ({
  data : {
    mdx : {
      body,
      frontmatter: {
        title,
        type,
        cover,
        tldr,
        sectionImages,
        galleries,
        phoneGalleries
      },
    },
    allMdx : {
      nodes: otherCaseStudies,
      totalCount
    },
  }}) => {
    
    let svgContainerRef = useRef(null)
    let deskRef = useRef(null)
    let pinRef = useRef(null)

    useEffect(()=>{
      const deskEl = deskRef.current
      
      bgSceneCaseAnim(pinRef, svgContainerRef, deskEl)
      refreshScrollTrigger()

      return(()=>{
        killScrollTrigger()
      })

    },[svgContainerRef, deskRef, pinRef])


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
            <SEO title={title}></SEO>
            <ProjectIntro title={title} category={type} />
            <ProjectCover image={cover.childImageSharp.fluid} />
            <Tldr data={tldr}/>
            <MDXProvider components={{
              h4: props => <h4 {...props} className={styles.contentHeader}/>,
              p: props => <p {...props} className={styles.contentBody} />,
            }}>
            <MDXRenderer sectionImages={sectionImagesById} galleries={galleriesById} phoneGalleries={phoneGalleriesById}>{body}</MDXRenderer>
            </MDXProvider>
            <div className={styles.pinScene} ref={ref => pinRef = ref}>
              <div className={styles.sceneContainer}>
                <div className={styles.backgroundScene} ref={ref => svgContainerRef = ref}>
                  <BackgroundSceneSvg />
                  <div className={styles.deskSequence}>
                    <DeskSequence inputRef={deskRef} />
                  </div>
                </div>
              </div>
              <CaseGallery caseStudies={otherCaseStudies} totalCount={totalCount}/>
            </div>
        </Layout>
    )
}


export default ProjectLayout

export const caseStudyQuery = graphql`
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
          summary
          date
          skills
          credits
          tools
        }
        cover {
          childImageSharp {
            fluid (maxWidth: 1600, toFormat: JPG, quality: 90){
              ...GatsbyImageSharpFluid
            }
          }
        }
        sectionImages {
          id
          src {
            childImageSharp {
              fluid (maxWidth: 1200, maxHeight: 800, toFormat: JPG, quality: 90, cropFocus: CENTER){
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
              fluid (maxWidth: 650, toFormat: JPG, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMdx(filter: {id: {ne: $id}, fields: {slug: {regex: "/case-studies/"}}}, sort: {fields: frontmatter___order, order: ASC}) {
      nodes{
        id
        fields {
          slug
        }
        frontmatter {
          title
          type
          tldr {
            company
            summary
            role
            date
            skills
            credits
            tools
          }
          cover {
            childImageSharp {
              fluid (maxWidth: 1600, toFormat: JPG, quality: 90){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      totalCount
    }
  }
`