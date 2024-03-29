import React, { useEffect, useRef } from 'react'

import Image from 'gatsby-image'
import { Link } from "gatsby"

import * as styles from './case-gallery.module.css'

import { caseSlideAnim, caseHoverAnim }from '../Anim'

const CaseSlide = ({ 
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
}) => {

    let containerRef = useRef(null)
    let hoverRef = useRef(null)

    useEffect(()=>{
        const slide = containerRef.current
        hoverRef.current = caseHoverAnim(slide)

        caseSlideAnim(slide, index)

    },[containerRef, hoverRef, index])

    const handleMouseEnter = () => {
        hoverRef.current.play()
    }

    const handleMouseLeave = () => {
        hoverRef.current.reverse()
    }


    return(
        <div ref={containerRef} className={styles.slideContainer}>
            <div className={styles.imageWrapper} >
                <Link className={styles.titleLink} to={slug} role="navigation" aria-label={title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Image className={styles.image} fluid={cover.childImageSharp.fluid} />
                </Link>
            </div>
            <div className={styles.titleWrapper}>
                <Link className={styles.titleLink} to={slug} role="navigation" aria-label={title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <h3 className={styles.title}>{title}</h3>
                </Link>
                <span className={styles.line}></span>
                <Link className={styles.view} to={slug} role="navigation" aria-label={title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>View Case Study</Link>
            </div>
            <div className={styles.infoContainer}>
                <div>{type}</div>
                <div>{date}</div>
            </div>
            <div className={styles.skills}>
                <ul className={styles.skillsList}>
                    {skills.map(skill => <li key={skill} className={styles.skillsItem}>{skill}</li>)}
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

const CaseGallery = ({ caseStudies, totalCount }) => {

    let containerRef = useRef(null)


    const slides = caseStudies.map((caseStudy, index) =>
            <CaseSlide key={caseStudy.id} caseStudy={caseStudy} totalCount={totalCount} index={index + 1} />
    )

    return(
        <div ref={containerRef}>
            {slides}
        </div>
    )
}

export default CaseGallery