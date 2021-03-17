import React from 'react'

import * as styles from './case-section.module.css'

const ContentRow = ({ children, fullHeight }) => {
    const classes = fullHeight ? styles.rowContentFullHeight : styles.rowContent

    return <div className={classes}>{children}</div>
}

export default ContentRow