import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Img from 'gatsby-image'
import styles from './case-cover.module.css'

const CaseCover = ({ image }) => {
    gsap.registerPlugin(ScrollTrigger)

    let coverEl = useRef(null)

    useEffect(()=>{
        gsap.fromTo(coverEl, {x: -300, opacity: 0}, {x: -200, opacity: 1, duration: 1, ease: 'power2.inOut'})
        gsap.fromTo(coverEl,
            {
                x: -200
            },
            {
                x: 0,
                duration: 2,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: coverEl,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none reverse',
                    scrub: false,
                },
            }
        ) 
    })
    
    return (
        <section ref={el => coverEl = el} className={styles.cover}>
            <Img fluid={image}/>
        </section> 
    )
}

export default CaseCover