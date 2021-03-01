import React from 'react'

import styles from './case-section.module.css'

const Content = ({ children, colRight, fullHeight}) => {
    const classes = (colRight ? `${styles.contentColRight}` : `${styles.Col}`) +
    (fullHeight ? ` ${styles.colFullHeight}` : '')

    return <div className={classes}>{children}</div>
}

export default Content