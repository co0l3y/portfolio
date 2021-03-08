import React, { useEffect, useRef } from 'react'

import Image from 'gatsby-image'
import { Link } from "gatsby"

import styles from './case-gallery.module.css'

import { caseGalleryAnim }from '../Anim'

const CaseSlide = React.forwardRef(({ 
    caseStudy: { 
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
}, ref) => {

    // let caseRef = useRef(null)

    // useEffect(()=>{
    //     const caseEl = caseRef.current
    //     caseEnterAnim(caseEl)

    // },[caseRef])

    return(
        <div ref={ref} className={styles.slideContainer}>
            <div className={styles.imageWrapper}>
                <Link className={styles.titleLink} to={slug}>
                    <Image className={styles.image} fluid={cover.childImageSharp.fluid} />
                </Link>
            </div>
            <div className={styles.titleWrapper}>
                <Link className={styles.titleLink} to={slug}>
                    <h3 className={styles.title}>{title}</h3>
                </Link>
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
    
})

const CaseGallery = ({ caseStudies, totalCount }) => {

    let slideRefs = useRef([])
    let containerRef = useRef(null)

    const slides = caseStudies.map((caseStudy, index) =>
            <CaseSlide ref={ref => slideRefs.current[index] = ref} key={caseStudy.id} caseStudy={caseStudy} totalCount={totalCount} index={index + 1} />
    )
    
    useEffect(()=>{
        
        const { current: slideEls } = slideRefs
        const { current: container } = containerRef

        caseGalleryAnim(slideEls, container)
        
    },[slideRefs, containerRef])

    return(
        <div ref={containerRef} className={styles.container}>
            {slides}
        </div>
    )
}

export default CaseGallery