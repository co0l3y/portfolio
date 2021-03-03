import React from 'react'

import styles from './case-section.module.css'

import Image from 'gatsby-image'
import SectionHeader from './section-header'

const SectionIntroImage = ({ title, stepNum, intro, image, phone, children }) => {

    return(
        <section>
                <div className={styles.introContainerImage}>
                <div className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
                            <Image fluid={image} />
                        </div>
                    </div>
                    <div className={styles.headContainer}>
                        <div className={styles.headWrapperImage}>
                            <SectionHeader title={title} stepNum={stepNum}></SectionHeader>
                            <p className={styles.summary}>{intro}</p>
                        </div>
                    </div>
                </div>
            {children}
        </section>
    )
}

export default SectionIntroImage