import React, { useEffect, useRef } from 'react'

import styles from './case-slide.module.css'

import { caseEnterAnim }from '../Anim'

import Image from 'gatsby-image'

const CaseSlide = ({ 
    slideData: { 
        fields : { slug },
        frontmatter : { 
            cover,
            title,
            type,
            tldr: {
                date,
                skills
            }
        }
    },
    totalCount,
    index
}) => {

    let caseRef = useRef(null)

    useEffect(()=>{
        const caseEl = caseRef.current
        caseEnterAnim(caseEl)

    },[caseRef])

    return(
        <div ref={caseRef} className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image className={styles.img} fluid={cover.childImageSharp.fluid} />
            </div>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.line}></span>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoCat}>{type}</div>
                <div className={styles.infoDate}>{date}</div>
            </div>
            <div className={styles.skills}>
                <ul className={styles.skillsList}>
                    {skills.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                </ul>
            </div>
            <div className={styles.numContainer}>
                <div className={styles.numCurrent}>
                    <span className={styles.numWrapper}>0</span><span className={styles.numWrapper}>{index}</span>
                </div>
                <div className={styles.numTotal}><span>–0</span><span>{totalCount}</span></div>
            </div>
        </div>
    )
    
}

export default CaseSlide