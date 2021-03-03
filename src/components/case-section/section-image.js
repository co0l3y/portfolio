import React from 'react'

import styles from './case-section.module.css'

import Image from 'gatsby-image'
import SectionHeader from './section-header'


const SectionImage = ({ title, stepNum, image, children }) => {

    return(
        <section>
            <div className={styles.introContainerImage}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image style={{'height': '100%'}} imgStyle={{'objectFit' : 'cover'}} fluid={image} />
                    </div>
                </div>
                <div className={styles.headContainer}>
                    <div className={styles.headWrapperImage}>
                        <SectionHeader title={title} stepNum={stepNum}></SectionHeader>
                    </div>
                </div>
            </div>
            {children}
        </section>
    )
}

export default SectionImage