import React, { useEffect, useRef } from 'react'

import styles from './case-section.module.css'

import Image from 'gatsby-image'
import SectionHeader from './section-header'

import { regularHeaderAnim } from '../Anim'

const SectionImage = ({ title, stepNum, image, children }) => {

    let headRef = useRef(null)

    useEffect(()=>{
        const head = headRef.current

        regularHeaderAnim(head)

    },[headRef])


    return(
        <section className={styles.container}>
            <div className={styles.introContainerImage}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image style={{'height': '100%'}} imgStyle={{'objectFit' : 'cover'}} fluid={image} />
                    </div>
                </div>
                <div className={styles.headContainer}>
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

export default SectionImage