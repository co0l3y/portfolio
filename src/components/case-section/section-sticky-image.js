import React, { useEffect, useRef } from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

import { stickyHeaderAnim } from '../Anim'

const SectionStickyImage = ({ title, stepNum, image, children}) => {

    let triggerRef = useRef(null)
    let headRef = useRef(null)


    useEffect(()=> {
        const trigger= triggerRef.current
        const head = headRef.current

        stickyHeaderAnim(head, trigger)

    },[triggerRef, headRef])

    return(
        <section>
            <div className={styles.rowSticky}>
                <div className={styles.headWrapper}>
                    <SectionHeader title={title} stepNum={stepNum}></SectionHeader>
                </div>
                <div className={styles.imageWrapper}>
                    {image}
                </div>
            </div>
            {children}
        </section>
    )
}

export default SectionStickyImage