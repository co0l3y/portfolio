import React, { useEffect, useRef } from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

import { regularHeaderAnim, sectionIntroAnim }from '../Anim'

const SectionIntro = ({ title, stepNum, intro, children }) => {

    let headRef = useRef(null)
    let introRef = useRef(null)

    useEffect(()=>{
        const head = headRef.current
        const intro = introRef.current

        regularHeaderAnim(head)
        sectionIntroAnim(intro)

    },[headRef, introRef])

    return(
        <section className={styles.container}>
            <div className={styles.introContainer}>
                <div className={styles.headWrapper}>
                    <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
                </div>
                <div className={styles.summaryWrapper}>
                    <p ref={introRef} className={styles.summary}>{intro}</p>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </section>
    )
}

export default SectionIntro