import React from 'react'

import styles from './section-content.module.css'

const SectionContent = ({ children, fullHeight, rightCol }) => {
    
    const classes =
    (rightCol ? styles.wrapperRightCol : styles.wrapper) +
    (fullHeight ? ` ${styles.fullHeight}` : '')

    return(
        <div className={classes}>{children}</div>
    )
}

export default SectionContent