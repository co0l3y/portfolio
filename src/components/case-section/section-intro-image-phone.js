import React, { useEffect, useRef } from 'react'

import styles from './case-section.module.css'

import Image from 'gatsby-image'
import SectionHeader from './section-header'

import { regularHeaderAnim, sectionIntroAnim } from '../Anim'

const SectionIntroImagePhone = ({ title, stepNum, intro, image, children }) => {

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
                    <div className={styles.headWrapperSummaryImage}>
                        <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
                        <p ref={introRef} className={styles.summary}>{intro}</p>
                    </div>
                    <div className={styles.imageWrapperPhone}>
                        <Image style={{'borderRadius': '2rem'}} fluid={image.childImageSharp.fluid} />
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    {children}
                </div>
        </section>
    )
}

export default SectionIntroImagePhone