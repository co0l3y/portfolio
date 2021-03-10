import React, { useRef, useEffect } from 'react'

import styles from './intro.module.css'

import { caseIntroAnim } from '../../Anim'


const ProjectIntro = ({ title, category }) => {

    let introRef = useRef(null)

    useEffect(()=>{
        caseIntroAnim(introRef)
    },[])


    return(
    <section className={styles.container}>
        <div ref={el => introRef = el} className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.line}></span>
            <div className={styles.category}>{category}</div>
        </div>
    </section>
    )
}

export default ProjectIntro