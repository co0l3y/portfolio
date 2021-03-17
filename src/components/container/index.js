import React from 'react'

import * as styles from './container.module.css';

const Container = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

export default Container