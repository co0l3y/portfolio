import React, { useRef, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import BackgroundSceneSvg from '../components/background-scene'
import DeskSequence from '../components/desk-sequence'

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
    const svgEl = svgRef.current
    const blindsEls = gsap.utils.toArray(svgEl.querySelectorAll('#blinds path'))
    const blindsBlendEls = svgEl.querySelectorAll('#blinds-blend path')
    const moonEl = svgEl.querySelector('#circle')
    const starsEls = svgEl.querySelectorAll('#stars circle')
    const cloudsEls = svgEl.querySelector('#clouds').children
    const steamEls = gsap.utils.toArray(svgEl.querySelectorAll('#coffee-steam path'))
    const buildingsLeftEl = svgEl.querySelector('#buildings-left').children
    const buildingsRightEl = svgEl.querySelector('#buildings-right').children
    const skyBlindsEl = svgEl.querySelectorAll('#sky-blinds')
    const maskEl = svgEl.querySelector('#mask circle')

    const caseImg = caseRef.children[0]
    const caseH = caseRef.children[1].firstChild
    const caseLine = caseRef.children[1].lastChild
    const caseInfo = gsap.utils.toArray(caseRef.children[2].children)
    const caseSkills = gsap.utils.toArray(caseRef.children[3].firstChild.children)
    const caseNumCurrent = gsap.utils.toArray(caseRef.children[4].firstChild.children)
    const caseNumTotal = caseRef.children[4].lastChild

    const deskEl = deskRef.current
    const deskImgs = gsap.utils.toArray(deskEl.children)

    //animations

    const deskAnim1 = (start, end, duration) => {
      const tl = gsap.timeline()
      const steps = end - start

      for (let i = 0; i <= steps; i++) {
        let percent = (i * -100)
        let position = (duration/steps) * i

        console.log(steps, i)

        tl.set(deskEl, {xPercent: percent, duration: 0}, position)
      }
      
      return(tl)
    }

    const blindsEnterAnim = () => {
      const tl = gsap.timeline({paused: true})

      blindsEls.forEach((blind, index) => {
        let pathLength = blind.getTotalLength()
        let pathPadding = pathLength * 1.2
        let position = '<.02'
        tl.fromTo(blind, {strokeDasharray: pathPadding, strokeDashoffset: (pathPadding * 3)},{strokeDashoffset: (pathPadding * 2), duration: 1.5, ease: 'back.inOut(1)'}, position)
      })

      return(tl)

    }


    const blindsExitAnim = () => {
      const tl = gsap.timeline()

      blindsEls.forEach((blind, index) => {
        let pathLength = blind.getTotalLength()
        let pathPadding = pathLength * 1.2
        let position = '<.02'
        tl.fromTo(blind, {strokeDasharray: pathPadding, strokeDashoffset: (pathPadding * 2)}, {strokeDashoffset: pathPadding, duration: 2, immediateRender: false}, position)

      })

      return(tl)

    }

    const blindsBlendAnim = (blinds) => {
      const tl = gsap.timeline()

      gsap.utils.toArray(blinds).reverse().forEach((blind, index) => {
        let pathLength = blind.getTotalLength()
        let dur = 2.75
        let dash = pathLength * .09
        let position = (index === 0) ? '' : '<.02'
        tl.fromTo(blind, {strokeDasharray: [dash, pathLength], strokeDashoffset: (pathLength + (dash * 2))},{strokeDashoffset: dash, duration: dur, ease: 'power2.in'}, position)
      })

      return (tl)
    }

    const parallaxAnim = (els, minDir, maxDir, dir, minDur, maxDur, ease, pos) => {
      const tl = gsap.timeline()

      gsap.utils.toArray(els).forEach((el)=>{
        const clamp = (number) => {
          if (minDir < 0 && Math.abs(number) < 100) {
            return (gsap.utils.random(100, maxDir) * Math.sign(number))
          } else {
            return (number)
          }
        }

        let randomDir = clamp(gsap.utils.random(minDir, maxDir))
        let randomTime = gsap.utils.random(minDur, maxDur)

        tl.from(el, {[dir]: randomDir, duration: randomTime, ease: ease}, pos)
        tl.from(el, {opacity: 0, duration: randomTime/2, ease: ease}, '<')
      })

      return(tl)

    }


    const buildingsAnim = (buildL, buildR) => {
      const tl = gsap.timeline()
      const buildingsLeft = gsap.utils.toArray(buildL)
      const buildingsRight = gsap.utils.toArray(buildR)
      

      tl.from([buildingsLeft, buildingsRight], {y: 400, duration: 3, stagger: -.05, ease: 'power3.out'})

      return(tl)
    }

    const scrollSceenAnim = () => {
      const tl = gsap.timeline({paused: true})

      tl.add(blindsExitAnim())
      tl.add(deskAnim1(1,8,8), '<')
      tl.add(blindsBlendAnim(blindsBlendEls), '<')
      tl.from(steamEls, {yPercent: 50, opacity: 0, duration: .5, stagger: .02 }, '<')
      tl.add(parallaxAnim(starsEls, 200, 300, 'y', 6, 7, 'power2.out', '<.0001'), '<2.25')
      tl.from(moonEl, {y: -200, duration: 4, opacity: 0, ease: 'power2.out'}, 2.25)
      tl.from(maskEl, {opacity: 0, transformOrigin: 'center bottom', scale: 0, duration: 2, ease: 'back.out(1.2)', smoothOrigin: true,  }, '<1')
      tl.add(parallaxAnim(cloudsEls, -300, 300, 'xPercent', 4, 4.5, 'power2.out', '<.02'), '<.5')
      tl.add(buildingsAnim(buildingsLeftEl, buildingsRightEl), '<.25')
      tl.to(maskEl, {transformOrigin: 'center bottom', scale: 0, duration: 2, ease: 'back.in(1.2)', smoothOrigin: true,  }, '>')
      tl.to([cloudsEls, moonEl], {opacity: 0, duration: 2}, '<')
      
      
      return(tl)
    }


    const caseEnterAnim = () => {
      const tl = gsap.timeline()

      tl.from(caseImg, {yPercent: 100, scale: .5, duration: 1, ease: 'back.out(1.2)'})
      tl.from(caseImg, {opacity:0, duration: .5, ease: 'power3.out'}, '<')
      tl.from(caseH, {yPercent: 50, opacity: 0, duration: .5, ease: 'power3.inOut' }, '<.5')
      tl.from(caseLine, {width: 0, ease: 'power3.out'}, '.15')
      tl.from(caseSkills, {yPercent: 100, opacity: 0, duration: .5, stagger: .2}, 0)
      tl.from(caseNumCurrent, {yPercent: 100, ease: 'back.out(1.2)', stagger: 0.15}, '<0.5')
      tl.from(caseNumTotal, {opacity: 0, duration: .5,ease: 'power2.out'},'<.25')
      tl.from(caseInfo, {xPercent: -100, duration: .5, stagger: .15}, 0)

                

      return(tl)
    }
      


      ScrollTrigger.create({
        id: 'blinds-init',
        trigger: introRef,
        animation: blindsEnterAnim(),
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play complete none none'
      })


      ScrollTrigger.create({
        id: 'scene-scrub',
        trigger: scrollRef,
        start: 'top top',
        end: 'bottom center',
        animation: scrollSceenAnim(),
        scrub: 1,
      })

      // ScrollTrigger.create({
      //   id: 'scene-snap',
      //   trigger: scrollRef,
      //   start: 'top top',
      //   end: 'bottom bottom',
      //   snap: 1/3
      // })

      ScrollTrigger.create({
        id: 'scene-pin',
        trigger: pinRef,
        start: 'top top',
        end: 'bottom bottom',
        pin: svgContainerRef,
        pinSpacing: false,
      })

      ScrollTrigger.create({
        id: 'case-enter',
        trigger: caseRef,
        animation: caseEnterAnim(),
        start: 'top top+=25%',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
        markers: true,
      })

      

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