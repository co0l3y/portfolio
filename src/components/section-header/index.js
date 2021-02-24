import React from 'react'

import styles from './section-header.module.css'


const SectionHeader = ({ title, stepName, stepNumber, inputRef }) => {
    return (
        <header ref={inputRef}>
            <div className={styles.processWrapper}>
                <span className={styles.processNumber}>{stepNumber}</span>
                <h4 className={styles.processHeader}>
                    {`${stepNumber} ${stepName}`}
                </h4>
            </div>
            <div>
                <h3 className={styles.header}>{title}</h3>
                <span className={styles.divider}></span>
            </div>
        </header>
    )
}

export default SectionHeader
