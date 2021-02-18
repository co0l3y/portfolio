import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './case-section-sticky.module.css'

import SectionHeader from '../section-header'

const CaseSectionSticky = (props) => {
    gsap.registerPlugin(ScrollTrigger)

    let wrapperRef = useRef(null)
    let headRef = useRef(null)


    useEffect(()=> {
        const headEl = headRef.current
        const stepNum = headEl.children[0].firstChild
        const stepH = headEl.children[0].lastChild
        const secH = headEl.children[1].firstChild
        const line = headEl.children[1].lastChild

        ScrollTrigger.saveStyles([wrapperRef, headEl, stepNum, stepH, secH, line])
        ScrollTrigger.matchMedia({
            '(max-width: 767px)': () => {
                let tl1 = gsap.timeline({
                    scrollTrigger: {
                        id: 'headTriggerMobile',
                        trigger: wrapperRef,
                        start: 'top top',
                        end: 'bottom top',
                        toggleActions: 'play reverse play reverse',
                        markers: true,
                        immediateRender: true
                    }
                })
        
                tl1.from(secH, {yPercent: 50, opacity: 0, duration: .5, ease: 'power3.inOut'})
                .from(line, {width: 0}, '<.15')
                .from(stepH, {yPercent: 50, opacity: 0, duration: .5, ease: 'power3.inOut'}, .35)
                .from(stepNum, {xPercent: -25, opacity: 0, duration: .5, ease: 'power3.inOut'}, '<.25')

                return (() => {
                    tl1.kill()
                })

            },
            '(min-width: 768px)': () => {
                let tl2 = gsap.timeline({
                    scrollTrigger: {
                        id: 'headTriggerDesktop',
                        trigger: wrapperRef,
                        start: '10% top',
                        end: '80% bottom',
                        toggleActions: 'play reverse play reverse',
                        markers: true,
                        immediateRender: true
                    }
                })
        
                tl2.from(secH, {yPercent: 50, opacity: 0, duration: .5, ease: 'power3.inOut'})
                .from(line, {width: 0}, '<.15')
                .from(stepH, {yPercent: 50, opacity: 0, duration: .5, ease: 'power3.inOut'}, .35)
                .from(stepNum, {xPercent: -25, opacity: 0, duration: .5, ease: 'power3.inOut'}, '<.25')


                ScrollTrigger.create({
                    id: 'stickyTriggerDesktop',
                    trigger: wrapperRef,
                    pin: headEl,
                    pinSpacing: false,
                    anticipatePin: true,
                    start: 'top top',
                    end: 'bottom bottom',
                })

                return(() => {
                    tl2.kill()
                })
            }
        })



        
    })

    return (
        <section ref={el => wrapperRef = el} className={styles.wrapper}>
            <div className={`grid ${styles.header}`}>
                <div className='col-md-5 col-lg-6`'>
                    <SectionHeader inputRef={headRef} title='So What&apos;s The Problem?' stepNumber='01' stepName='Discovery'/>
                </div>
            </div>
            <div className={`grid ${styles.content}`}>
                <div className='col-md-7 push-md-5'>
                    <h5>Problem 01</h5>
                    <p>Although we were always A/B testing new features, the core experience and interface of FirstMet had not changed in over 10 years. User’s found it dated compared to competitors.</p>
                </div>
            </div>
        </section>
    )
}

export default CaseSectionSticky