import React, { useRef, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import BackgroundSceneSvg from '../components/background-scene'
import DeskSequence from '../components/desk-sequence'

import { scrollSceneAnim, caseEnterAnim } from '../components/Anim'

import styles from '../components/index/index-page.module.css'
import { interpolate } from 'gsap/gsap-core'
import { Tween } from 'gsap/gsap-core'


const IndexPage = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger)

  // refs
  let introRef = useRef(null)
  let scrollRef = useRef(null)
  let svgRef = useRef(null)
  let svgContainerRef = useRef(null)
  let pinRef = useRef(null)
  let workRef = useRef(null)
  let caseRef = useRef(null)
  let deskRef = useRef(null)

  useEffect(()=>{

    // elements
    const deskEl = deskRef.current

    //animations

      scrollSceneAnim(introRef, scrollRef, pinRef, svgContainerRef, deskEl)
      caseEnterAnim(caseRef)

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
      <section ref={el => workRef = el} className={styles.work}>
        <div ref={el => caseRef = el} className={styles.caseSlide}>
          <div className={styles.caseImg}>
            <Img fluid={data.caseCover.childImageSharp.fluid} />
          </div>
          <div className={styles.caseTitle}>
            <h3>FirstMet</h3>
            <span className={styles.line}></span>
          </div>
          <div className={styles.caseInfo}>
            <div className={styles.caseInfoCat}>UX Design &amp; Optimization</div>
            <div className={styles.caseInfoDate}>March 2018 - May 2018</div>
          </div>
          <div className={styles.caseSkills}>
            <ul>
              <li>Lead UI/UX Design</li>
              <li>Discovery and requirements gathering</li>
              <li>Prototyping &amp; wireframing</li>
              <li>High fidelity mockups</li>
              <li>A/B and usability testing</li>
              <li>Product scoping &amp; management</li>
            </ul>
          </div>
          <div className={styles.caseNum}>
            <div className={styles.caseNumCurrent}><span>0</span><span>1</span></div>
            <div className={styles.caseNumTotal}><span>–0</span><span>4</span></div>
          </div>
        </div>
      </section>
    </section>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    caseCover: file(relativePath: {regex: "/firstmet/cover.png/"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`