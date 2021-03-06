import React, { useEffect, useRef } from 'react'

import * as styles from './case-section.module.css'

import Image from 'gatsby-image'
import SectionHeader from './section-header'

import { regularHeaderAnim, sectionIntroAnim, sectionImageAnim } from '../Anim'

const SectionIntroImage = ({ title, stepNum, intro, image, phone, children }) => {

    let headRef = useRef(null)
    let introRef = useRef(null)
    let imageRef = useRef(null)

    useEffect(()=>{
        const head = headRef.current
        const intro = introRef.current
        const image = imageRef.current

        regularHeaderAnim(head)
        sectionIntroAnim(intro)
        sectionImageAnim(image)

    },[headRef, introRef])

    return(
        <section className={styles.container}>
            <div className={styles.introContainerImage}>
                <div className={styles.imageContainer}>
                    <div ref={imageRef} className={styles.imageWrapper}>
                        <Image style={{'height': '100%', 'borderRadius': '2rem'}} imgStyle={{'objectFit' : 'cover'}} fluid={image} />
                    </div>
                </div>
                <div className={styles.headContainerImage}>
                    <div className={styles.headWrapperSummaryImage}>
                        <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
                        <p ref={introRef} className={styles.summary}>{intro}</p>
                    </div>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
            
        </section>
    )
}

export default SectionIntroImage