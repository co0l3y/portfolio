import React from 'react'

import styles from './case-section.module.css'

import Image from 'gatsby-image'
import SectionHeader from './section-header'

const SectionIntroImagePhone = ({ title, stepNum, intro, image, children }) => {

    return(
        <section>
                <div className={styles.introContainer}>
                    <div className={styles.headWrapperSummaryImage}>
                        <SectionHeader title={title} stepNum={stepNum}></SectionHeader>
                        <p className={styles.summary}>{intro}</p>
                    </div>
                    <div className={styles.imageWrapperPhone}>
                        <Image style={{'borderRadius': '2rem'}} fluid={image.childImageSharp.fluid} />
                    </div>
                </div>
                {children}
        </section>
    )
}

export default SectionIntroImagePhone