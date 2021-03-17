import React from 'react'

import * as styles from './case-section.module.css'

const Content = ({ children, colRight, fullHeight}) => {
    const classes = (colRight ? `${styles.contentColRight}` : `${styles.col}`) +
    (fullHeight ? ` ${styles.colFullHeight}` : '')

    return <div className={classes}>{children}</div>
}

export default Content