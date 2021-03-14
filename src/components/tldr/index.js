import React from 'react'

import styles from './tldr.module.css'

const Tldr = ({ data: { role, date, summary, company, skills, tools, credits} }) => {
    

    return(
        <section className={styles.container}>
        <div className={styles.headContainer}>
            <div className={styles.headWrapper}>
                <h3 className={styles.header}>TL&#59;DR <span role='img' aria-label="Winking Face" className={styles.emoji}>&#128521;</span></h3>
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.row}>
                <div className={styles.col4}>
                    <h5 className={styles.subHead}>My Role</h5>
                    <p className={styles.text}>{role}</p>
                </div>
                <div className={styles.col4}>
                    <h5 className={styles.subHead}>Date</h5>
                    <p className={styles.text}>{date}</p>
                </div>
                <div className={styles.col4}>
                    <h5 className={styles.subHead}>Company</h5>
                    <p className={styles.text}>{company}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col6}>
                    <h5 className={styles.subHead}>What I Did</h5>
                    <ul className={styles.skills}>
                        {skills.map((skill, index)=>(
                            <li key={index} className={styles.skillItem}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.col6}>
                    <div>
                        <h5 className={styles.subHead}>Tools I used</h5>
                        <p className={styles.text}>{tools}</p>
                    </div>
                    <div>
                        <h5 className={styles.subHead}>Who Helped Me Do It</h5>
                        <p className={styles.text}>{credits}</p>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.summaryWrapper}>
                    <h5 className={styles.subHead}>What's it all about!?</h5>
                    {summary.map((p, index)=>(
                        <p key={p} className={styles.text}>{p}</p>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Tldr