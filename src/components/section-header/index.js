import React from 'react'

import styles from './section-header.module.css'


const SectionHeader = ({ title, stepName, stepNumber, inputRef }) => {
    return (
        <header ref={inputRef} className={styles.wrapper}>
            <div className={styles.process}>
                <span className={styles.processNumber}>{stepNumber}</span>
                <h4>
                    {`${stepNumber} ${stepName}`}
                </h4>
            </div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <span className={styles.line}></span>
            </div>
        </header>
    )
}

export default SectionHeader
