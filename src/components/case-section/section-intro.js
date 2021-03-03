import React from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

const SectionIntro = ({ title, stepNum, intro, children }) => {

    return(
        <section>
            <div className={styles.introContainer}>
                <div className={styles.headWrapper}>
                    <SectionHeader title={title} stepNum={stepNum}></SectionHeader>
                </div>
                <div className={styles.summaryWrapper}>
                    <p className={styles.summary}>{intro}</p>
                </div>
            </div>
            {children}
        </section>
    )
}

export default SectionIntro