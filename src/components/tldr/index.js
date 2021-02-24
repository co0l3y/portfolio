import React from 'react'

import styles from './tldr.module.css'

const Tldr = ({ data: { role, date, company, skills, tools, credits} }) => {
    

    return(
        <section className={`grid ${styles.wrapper}`}>
        <div className='col-md-2 push-lg-1'>
            <div className={styles.heading}>
                <h3>TL&#59;DR 😉</h3>
            </div>
        </div>
        <div className='col-md-10 col-lg-9'>
            <div className={`grid ${styles.row}`}>
                <div className='col-md-4'>
                    <h5>My Role</h5>
                    <p>{role}</p>
                </div>
                <div className='col-md-4'>
                    <h5>Date</h5>
                    <p>{date}</p>
                </div>
                <div className='col-md-4'>
                    <h5>Company</h5>
                    <p>{company}</p>
                </div>
            </div>
            <div className={`grid ${styles.row}`}>
                <div className={`col-md-6 ${styles.skills}`}>
                    <h5>What I Did</h5>
                    <ul>
                        {skills.map((skill, index)=>(
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className='col-md-6'>
                    <div>
                        <h5>Tools I used</h5>
                        <p>{tools}</p>
                    </div>
                    <div>
                        <h5>Who Helped Me Do It</h5>
                        <p>{credits}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Tldr