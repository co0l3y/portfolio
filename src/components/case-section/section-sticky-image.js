import React, { useEffect, useRef } from 'react'

import * as styles from './case-section.module.css'

import SectionHeader from './section-header'

import Image from 'gatsby-image'

import { stickyHeaderAnim, sectionImageAnim } from '../Anim'

const SectionStickyImage = ({ title, stepNum, image, children}) => {

    let triggerRef = useRef(null)
    let headRef = useRef(null)
    let imageRef = useRef()

    useEffect(()=> {
        const trigger= triggerRef.current
        const head = headRef.current
        const image = imageRef.current

        stickyHeaderAnim(head, trigger)
        sectionImageAnim(image)
 
    },[triggerRef, headRef, imageRef])

    return(
        <section ref={triggerRef} className={styles.container}>
            <div className={styles.introContainerSticky}>
                <div className={styles.imageContainer}>
                    <div ref={imageRef} className={styles.imageWrapper}>
                        <Image style={{'height': '100%', 'borderRadius': '2rem'}} imgStyle={{'objectFit' : 'cover'}} fluid={image} />
                    </div>
                </div>
                <div className={styles.headContainerStickyImage}>
                    <div className={styles.headWrapperImage}>
                        <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
                    </div>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </section>
    )
}

export default SectionStickyImage