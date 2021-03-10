import React, { useEffect, useRef } from 'react'
import { caseCoverAnim } from '../../Anim'

import Img from 'gatsby-image'
import styles from './cover.module.css'

const ProjectCover = ({ image }) => {
    

    let coverEl = useRef(null)
    let animRef = useRef(null)

    useEffect(()=>{
        
        animRef.current = caseCoverAnim(coverEl)
        
    },[coverEl])
    
    return (
        <section ref={el => coverEl = el} className={styles.cover}>
            <Img fluid={image} onLoad={()=> animRef.current.play()}/>
        </section> 
    )
}

export default ProjectCover