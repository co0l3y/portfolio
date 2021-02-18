import React from 'react'

import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../../../components/layout'
import CaseIntro from '../../../components/case-intro'
import CaseCover from '../../../components/case-cover'
import CaseSectionSticky from '../../../components/case-section-sticky'

import styles from '../../../components/case-studies/case-studies.module.css'

const CaseStudy = ({ data }) => {

    return (
        <Layout>
            <CaseIntro title='FirstMet' category='User Experience Design &amp; Optimization' />
            <CaseCover image={data.cover.childImageSharp.fluid} />
            <section className={`grid ${styles.tldr}`}>
                <div className='col-md-2 push-lg-1'>
                    <div className={styles.tldrHeading}>
                        <h3>TL&#59;DR 😉</h3>
                    </div>
                </div>
                <div className='col-md-10 col-lg-9'>
                    <div className={`grid ${styles.tldrRow}`}>
                        <div className='col-md-4'>
                            <h5>My Role</h5>
                            <p>Senior Product Designer</p>
                        </div>
                        <div className='col-md-4'>
                            <h5>Date</h5>
                            <p>Aug 2018 - Dec 2019</p>
                        </div>
                        <div className='col-md-4'>
                            <h5>Company</h5>
                            <p>Snap Interactive</p>
                        </div>
                    </div>
                    <div className={`grid ${styles.tldrRow}`}>
                        <div className={`col-md-6 ${styles.skills}`}>
                            <h5>What I Did</h5>
                            <ul>
                                <li>Lead UI/UX Design</li>
                                <li>Discovery and requirements gathering</li>
                                <li>Prototyping &amp; wireframing</li>
                                <li>High fidelity mockups</li>
                                <li>A/B and usability testing</li>
                                <li>Product scoping &amp; management</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <h5>Tools I used</h5>
                                <p>Sketch, Figma, Photoshop, Illustrator, After Effects, Airtable, Optimizely, Instapage</p>
                            </div>
                            <div>
                                <h5>Who Helped Me Do It</h5>
                                <p>Krist Rehm, Samantha Guzman, Tom Losinksi, Krysti Pryde, Matt Ogilvie,  Hazel Adao</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CaseSectionSticky></CaseSectionSticky>
            <section className={styles.sectionGallery}>
                <div className={`grid ${styles.sectionRow}`}>
                    <div className={`col-md-5 col-lg-6 ${styles.sectionHeader}`}>
                        <h4 data-step='01'>01 Discover</h4>
                        <h3>So What's the Problem?</h3>
                    </div>
                    <div className={`col-md-7 col-lg-6 ${styles.sectionContent}`}>
                        <p>Although we w/B testing new feere always Aatures, the core experience and interface of FirstMet had not changed in over 10 years. User’s found it dated compared to competitors.</p>
                    </div>
                </div>
                <div className={`grid ${styles.sectionRow}`}>
                    <div className={`col-md-4 ${styles.galleryItm}`}>
                        <Img style={{ borderRadius : '2rem', maxWidth : '300px', width: '100%' }} fluid={data.gallery1.nodes[1].childImageSharp.fluid} />
                    </div>
                    <div className={`col-md-4 ${styles.galleryItm}`}>
                        <Img style={{ borderRadius : '2rem', maxWidth : '300px', width: '100%' }} fluid={data.gallery1.nodes[1].childImageSharp.fluid} />
                    </div>
                    <div className={`col-md-4 ${styles.galleryItm}`}>
                        <Img style={{ borderRadius : '2rem', maxWidth : '300px', width: '100%' }} fluid={data.gallery1.nodes[2].childImageSharp.fluid} />
                    </div>
                </div>
            </section>
        </Layout> 
    )
}

export default CaseStudy


export const caseQuery = graphql`
  query CaseQuery {
    cover: file(relativePath: {regex: "/firstmet/cover.png/"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gallery1: allFile(filter: {relativePath: {regex: "/firstmet/gallery1//"}}) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
  }
`