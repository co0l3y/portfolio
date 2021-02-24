import React, { useRef, useEffect } from 'react'

import styles from './intro.module.css'

import { caseIntroAnim } from '../../Anim'


const ProjectIntro = ({ title, category }) => {

    let introRef = useRef(null)

    useEffect(()=>{
        caseIntroAnim(introRef)
    },[])


    return(
    <section className={`${styles.intro} grid`}>
        <div ref={el => introRef = el} className='col-md-6'>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>
            <span className={styles.line}></span>
            <div className={styles.category}>
                {category}
            </div>
        </div>
    </section>
    )
}

export default ProjectIntro