import React, {useEffect, useRef} from 'react'

import SectionHeader from './section-header'
import Image from 'gatsby-image'

import * as styles from './case-section.module.css'

import { stickyHeaderAnim, sectionIntroAnim, sectionImageAnim } from '../Anim'

const SectionStickyIntroImage = ({ title, stepNum, intro, image, children}) => {

    let triggerRef = useRef(null)
    let headRef = useRef(null)
    let introRef = useRef(null)
    let imageRef = useRef(null)

    useEffect(()=> {

        const trigger= triggerRef.current
        const head = headRef.current
        const intro = introRef.current
        const image = imageRef.current

        stickyHeaderAnim(head, trigger)
        sectionIntroAnim(intro,true)
        sectionImageAnim(image)

    },[triggerRef, headRef, introRef, imageRef])
    

    return(
        <section ref={triggerRef} className={styles.container}>
            <div className={styles.rowSticky}>
                <div className={styles.headWrapper}>
                    <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
                </div>
                <div className={styles.imageWrapper}>
                    <Image fluid={image} />
                </div>
            </div>
            <div className={styles.introRowSticky}>
                <div className={styles.introWrapperSticky}>
                    <p ref={introRef} className={styles.intro}>{intro}</p>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </section>
    )
}

export default SectionStickyIntroImage