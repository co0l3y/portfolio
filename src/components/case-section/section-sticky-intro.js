import React, {useRef, useEffect} from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

import { stickyHeaderAnim } from '../Anim'

const SectionStickyIntro = ({title, stepNum, intro, children}) => {

    let triggerRef = useRef(null)
    let headRef = useRef(null)


    useEffect(()=> {
        const trigger= triggerRef.current
        const head = headRef.current

        stickyHeaderAnim(head, trigger)

    },[triggerRef, headRef])


    return(
        <section ref={triggerRef}>
            <div className={styles.rowSticky}>
                <div className={styles.headWrapper}>
                    <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
                </div>
            </div>
            <div className={styles.introRowSticky}>
                <div className={styles.introWrapperSticky}>
                    <p className={styles.intro}>{intro}</p>
                </div>
            </div>
            {children}
        </section>
    )
}

export default SectionStickyIntro