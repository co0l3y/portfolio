import React, { useRef, useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BackgroundSceneSvg from '../components/background-scene'
import DeskSequence from '../components/desk-sequence'
import CaseGallery from '../components/case-gallery'
import MagicLink from '../components/magic-link'
import SEO from '../components/seo'

import { heroAnim, scrollHintAnim, scrollSceneAnim, refreshScrollTrigger, killScrollTrigger } from '../components/Anim'

import styles from './index-page.module.css'


const IndexPage = ({
   data : { 
     caseStudies: {
       nodes : caseStudies,
       totalCount
      }
    } 
  }) => {

    
  // refs
  let introRef = useRef(null)
  let scrollRef = useRef(null)
  let svgRef = useRef(null)
  let svgContainerRef = useRef(null)
  let pinRef = useRef(null)
  let deskRef = useRef(null)
  
  

  useEffect(()=>{

    // elements
    const deskEl = deskRef.current
    const heroTl = heroAnim(introRef)
    
    heroTl.play()
    scrollHintAnim(scrollRef)
    scrollSceneAnim(introRef, scrollRef, pinRef, svgContainerRef, deskEl)
    refreshScrollTrigger()
      
      return(()=>{
        heroTl.kill()
        killScrollTrigger()
      })
  })

  return(
  <Layout>
    <SEO title='Home'/>
    <section ref={el => introRef = el} className={styles.hero}>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heroHeader}>Sean Cameron Cooley</h1>
        <span className={styles.line}></span>
        <h2 className={styles.heroSubHeader}>Design, Motion, &amp; Interactive</h2>
      </div>
      <div className={styles.heroRightWrapper}>
        <div className={styles.contactContainer}>
          <div className={styles.contactWrapper}>
            <MagicLink to='https://drive.google.com/file/d/1sAie7l_gz_h3shtSI3Zz7DgxliXkOKaG/view?usp=sharing' target='_blank' icon='resume'>View Resume</MagicLink>
          </div>
          <div className={styles.contactWrapper}>
            <MagicLink to='https://www.linkedin.com/in/seancameroncooley/' icon='linkedin'>Linkedin</MagicLink>
          </div>
        </div>
      </div>
    </section>
    <section ref={el => pinRef = el} className={styles.pinScene}>
      <div ref={el => scrollRef = el} className={styles.scrollScene}>
        <div ref={el => svgContainerRef = el} className={styles.backgroundScene}>
          <BackgroundSceneSvg background inputRef={svgRef}/>
          <div className={styles.deskSequence}>
            <DeskSequence inputRef={deskRef}/>
          </div>
        </div>
        <div className={styles.scrollTextLeft}>
          <div className={styles.scrollTextWrapper}>
            <h3 className={styles.scrollHeader}>Oh, hello</h3>
            <span className={styles.line}></span>
            <p className={styles.scrollText}>My name is Sean</p>
          </div>
        </div>
        <div className={styles.scrollTextRight}>
          <div className={styles.scrollTextWrapper}>
            <h3 className={styles.scrollHeader}> I'm a design director</h3>
            <span className={styles.line}></span>
            <p className={styles.scrollText}>with 10 years of experience weaving...</p>
          </div>
        </div>
        <div className={styles.scrollTextLeft}>
          <div className={styles.scrollTextWrapper}>
            <h3 className={styles.scrollHeader}>Pixels, coffee, code, &amp; insights</h3>
            <span className={styles.line}></span>
            <p className={styles.scrollText}>into pretty, pretty, pretty, pretty cool design solutions</p>
            <MagicLink internal icon='arrow' to='/about/'>Learn More</MagicLink>
          </div>
        </div>
        <div className={styles.scrollHint}>C'mon Scroll, you know you want to...</div>
      </div>
      <CaseGallery caseStudies={caseStudies} totalCount={totalCount}/>
    </section>
  </Layout>
)}

export default IndexPage

export const query = graphql`
query IndexQuery {
  caseStudies: allMdx(filter: {fields: {slug: {regex: "/case-studies/"}}}, sort: {fields: frontmatter___order, order: ASC}) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        title
        type
        tldr {
          date
          skills
        }
        cover {
          childImageSharp {
            fluid (maxWidth: 1600, toFormat: JPG, quality: 90) {
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