import React, { useEffect, useRef } from 'react'

import styles from './case-section-sticky.module.css'

import { stickyHeaderAnim } from '../Anim'

import SectionHeader from '../section-header'

const CaseSectionSticky = ({ title, stepNumber, stepName, children }) => {
    

    let wrapperRef = useRef(null)
    let headRef = useRef(null)


    useEffect(()=> {
        const headEl = headRef.current
        stickyHeaderAnim(headEl, wrapperRef)
    })

    return (
        <section ref={el => wrapperRef = el} className={styles.container}>
            <div className={`grid ${styles.header}`}>
                <div className='col-md-5 col-lg-6`'>
                    <SectionHeader inputRef={headRef} title={title} stepNumber={stepNumber} stepName={stepName}/>
                </div>
            </div>
            <div className={`grid ${styles.content}`}>
                <div className='col-md-7'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default CaseSectionSticky