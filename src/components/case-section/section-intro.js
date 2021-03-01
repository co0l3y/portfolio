import React from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

const SectionIntro = ({ title, stepNum, intro, children }) => {

    return(
        <section>
            <div className={styles.row}>
                <div className={styles.headWrapper}>
                    <SectionHeader title={title} stepNum={stepNum}></SectionHeader>
                </div>
                <div className={styles.introWrapper}>
                    {intro}
                </div>
            </div>
            {children}
        </section>
    )
}

export default SectionIntro