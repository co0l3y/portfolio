import React from 'react'

import styles from './section-row.module.css'

const SectionRow = ({ children , fullHeight }) => {

    const classes = styles.container + (fullHeight ? ` ${styles.fullHeight}`: '')

    return(
        <div className={classes}>{children}</div>
    )
}

export default SectionRow