import React, { useEffect, useRef } from 'react'

import styles from './section.module.css'

import { stickyHeaderAnim } from '../Anim'

import SectionHeader from '../section-header'


const Section = ({ title, stepNumber, stepName, sticky, intro, children  }) => {

    const triggerRef = useRef(null)
    const headRef = useRef(null)

    useEffect(()=>{
        const header = headRef.current
        const trigger = triggerRef.current

        if (sticky) {
            stickyHeaderAnim(header, trigger)
        }
    },[])


    return(
        <section ref={triggerRef}>
            <div className={sticky ? `${styles.headSticky}` : `${styles.head}`}>
                <div className={styles.headWrapper}>
                    <SectionHeader inputRef={headRef} title={title} stepNumber={stepNumber} stepName={stepName}/>
                </div>
                {intro && !sticky && 
                <div className={styles.introWrapper}>
                    <p className={styles.introP}>{intro}</p>
                </div>
                }
            </div>
            {intro && sticky && 
                <div className={sticky ? `${styles.introSticky}` : `${styles.intro}`}>
                    <div className={styles.introWrapper}>
                        <p className={styles.introP}>{intro}</p>
                    </div>
                </div>
            }
            {children}
        </section>
    )
}

export default Section