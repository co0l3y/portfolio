import React, { useRef, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import BackgroundSceneSvg from '../components/background-scene'
import DeskSequence from '../components/desk-sequence'
import CaseSlide from '../components/case-slide'

import { scrollSceneAnim, caseEnterAnim } from '../components/Anim'

import styles from '../components/index/index-page.module.css'


const IndexPage = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger)

  // refs
  let introRef = useRef(null)
  let scrollRef = useRef(null)
  let svgRef = useRef(null)
  let svgContainerRef = useRef(null)
  let pinRef = useRef(null)
  let deskRef = useRef(null)

  const caseStudies = data.caseStudies.nodes

  const totalCount = data.caseStudies.totalCount

  const caseSlides = caseStudies.map((caseStudy, index) =>
    <CaseSlide key={caseStudy.id} slideData={caseStudy} totalCount={totalCount} index={index + 1} />
  )

  console.log(caseSlides)

  useEffect(()=>{
    // elements
    const deskEl = deskRef.current
    //animations
      scrollSceneAnim(introRef, scrollRef, pinRef, svgContainerRef, deskEl)
  })

  return(
  <Layout>
    <section ref={el => introRef = el} className={`${styles.hero} grid`}>
      <div className='col-md-4 push-md-1'>
        <h1>Sean Cameron Cooley</h1>
        <h2>Design, Motion, &amp; Interactive</h2>
      </div>
    </section>
    <section ref={el => pinRef = el} className={styles.pinScene}>
      <section ref={el => scrollRef = el} className={styles.scrollScene}>
        <div ref={el => svgContainerRef = el} className={styles.backgroundScene}>
          <BackgroundSceneSvg inputRef={svgRef}/>
          <div className={styles.deskSequence}>
            <DeskSequence inputRef={deskRef}/>
          </div>
        </div>
        <div className={`grid ${styles.scrollTextLeft}`}>
          <div className='col-sm-6 col-md-5'>
            <h3>Oh, hello</h3>
            <span className={styles.line}></span>
            <p>My name is Sean</p>
          </div>
        </div>
        <div className={`grid ${styles.scrollTextRight}`}>
          <div className='col-sm-6 col-md-5'>
            <h3>I'm a design director</h3>
            <span className={styles.line}></span>
            <p>With over 9 years of experience weaving...</p>
          </div>
        </div>
        <div className={`grid ${styles.scrollTextLeft}`}>
          <div className='col-sm-6 col-md-5'>
            <h3>pixels, coffee, code, &amp; insights</h3>
            <span className={styles.line}></span>
            <p>into pretty, pretty, pretty, pretty cool design solutions</p>
          </div>
        </div>
      </section>
      <section className={styles.work}>
        {caseSlides}
      </section>
    </section>
  </Layout>
)}

export default IndexPage

export const query = graphql`
query IndexQuery {
  caseStudies: allMdx(filter: {fields: {slug: {regex: "/case-studies/"}}}) {
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
            fluid (maxWidth: 1600) {
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