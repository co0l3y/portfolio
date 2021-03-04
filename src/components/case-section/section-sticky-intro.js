import React, {useRef, useEffect} from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

import { stickyHeaderAnim, sectionIntroAnim } from '../Anim'

const SectionStickyIntro = ({title, stepNum, intro, children}) => {

    let triggerRef = useRef(null)
    let headRef = useRef(null)
    let introRef = useRef(null)

    useEffect(()=> {
        const trigger= triggerRef.current
        const head = headRef.current
        const intro = introRef.current

        stickyHeaderAnim(head, trigger)
        sectionIntroAnim(intro,true)
 
    },[triggerRef, headRef, introRef])


    return(
        <section ref={triggerRef} className={styles.container}>
            <div className={styles.rowSticky}>
                <div className={styles.headWrapper}>
                    <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
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

export default SectionStickyIntro