import React from 'react'

import styles from './case-section.module.css'


const SectionHeader = React.forwardRef(({ title, stepNum }, ref) => {
    const steps = {
        '01' : 'Discover',
        '02' : 'Plan',
        '03' : 'Design',
        '04' : 'Refine'
    }

    const stepName = steps[stepNum]

    return (
        <header ref={ref}>
            <div className={styles.processWrapper}>
                <span className={styles.processNumber}>{stepNum}</span>
                <h4 className={styles.processHeader}>
                    {`${stepNum} ${stepName}`}
                </h4>
            </div>
            <h3 className={styles.header}>{title}</h3>
            <span className={styles.divider}></span>
        </header>
    )
})

export default SectionHeader
