import React from 'react'

import styles from './case-section.module.css'

import SectionHeader from './section-header'

const SectionImage = ({ title, stepNum, image, children }) => {

    return(
        <section>
            <div className={styles.row}>
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

export default SectionImage