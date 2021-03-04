import React, { useEffect, useRef } from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

import { stickyHeaderAnim, sectionIntroAnim } from '../Anim'

const SectionSticky = ({title, stepNum, children}) => {

    let triggerRef = useRef(null)
    let headRef = useRef(null)


    useEffect(()=> {
        const trigger = triggerRef.current
        const head = headRef.current

        stickyHeaderAnim(head, trigger)

    })

    return(
        <section ref={triggerRef} className={styles.container}>
            <div className={styles.rowSticky}>
                <div className={styles.headWrapper}>
                    <SectionHeader ref={headRef} title={title} stepNum={stepNum}></SectionHeader>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </section>
    )
}

export default SectionSticky