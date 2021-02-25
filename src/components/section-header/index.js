import React from 'react'

import styles from './section-header.module.css'


const SectionHeader = React.forwardRef(({ title, stepName, stepNumber, inputRef }) => {
    return (
        <header ref={inputRef}>
            <div className={styles.processWrapper}>
                <span className={styles.processNumber}>{stepNumber}</span>
                <h4 className={styles.processHeader}>
                    {`${stepNumber} ${stepName}`}
                </h4>
            </div>
            <h3 className={styles.header}>{title}</h3>
            <span className={styles.divider}></span>
        </header>
    )
})

export default SectionHeader
