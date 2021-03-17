import React, { useRef, useEffect } from 'react'

import * as styles from './intro.module.css'

import { caseIntroAnim } from '../../Anim'


const ProjectIntro = ({ title, category }) => {

    let headRef = useRef(null)
    let lineRef = useRef(null)
    let catRef = useRef(null)

    useEffect(()=>{
        const head = headRef.current
        const line = lineRef.current
        const cat = catRef.current

        const tween = caseIntroAnim(head, line, cat)
        if (typeof document != 'undefined') {
            document.fonts.ready.then(()=>{
                tween.play()
            })
        }

        return(tween.kill())

    },[headRef, lineRef, catRef])


    return(
    <section className={styles.container}>
        <div className={styles.wrapper}>
            <h2 ref={headRef} className={styles.title}>{title}</h2>
            <span ref={lineRef} className={styles.line}></span>
            <div ref={catRef} className={styles.category}>{category}</div>
        </div>
    </section>
    )
}

export default ProjectIntro