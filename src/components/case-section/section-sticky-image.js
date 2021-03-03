import React, { useEffect, useRef } from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

import Image from 'gatsby-image'

import { stickyHeaderAnim } from '../Anim'

const SectionStickyImage = ({ title, stepNum, image, children}) => {

    let triggerRef = useRef(null)
    let headRef = useRef(null)


    useEffect(()=> {
        const trigger = triggerRef.current
        const head = headRef.current

        stickyHeaderAnim(head, trigger)

        console.log(trigger)

    })

    return(
        <section ref={triggerRef} className={styles.container}>
            <div className={styles.introContainerImage}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image fluid={image} />
                    </div>
                </div>
                <div className={styles.headContainerSticky}>
                    <div className={styles.headWrapperImage}>
                        <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
                    </div>
                </div>
            </div>
            {children}
        </section>
    )
}

export default SectionStickyImage