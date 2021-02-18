import React, { useRef, useEffect } from 'react'

import styles from './case-intro.module.css'

import { gsap } from 'gsap'


const CaseIntro = ({ title, category }) => {

    let titleEl = useRef(null)
    let lineEl = useRef(null)
    let categoryEl = useRef(null)

    let tl = gsap.timeline()

    useEffect(()=>{
        tl.from(titleEl, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut'
        })
        .from(lineEl, {
            width: 0,
            duration: .5,
            ease: 'power3.inOut'
        }, '<.35')
        .from(categoryEl, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut'
        }, '<.15')
    },[tl])


    return(
    <section className={`${styles.intro} grid`}>
        <div className='col-md-6'>
            <div ref={el => titleEl = el} className={styles.title}>
                <h2>{title}</h2>
            </div>
            <span ref={el => lineEl = el} className={styles.line}></span>
            <div ref={el => categoryEl = el} className={styles.category}>
                {category}
            </div>
        </div>
    </section>
    )
}

export default CaseIntro