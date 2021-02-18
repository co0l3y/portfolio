import React, { useEffect, useRef } from 'react'
import { caseCoverAnim } from '../Anim'

import Img from 'gatsby-image'
import styles from './case-cover.module.css'

const CaseCover = ({ image }) => {
    

    let coverEl = useRef(null)

    useEffect(()=>{
        caseCoverAnim(coverEl)
    })
    
    return (
        <section ref={el => coverEl = el} className={styles.cover}>
            <Img fluid={image}/>
        </section> 
    )
}

export default CaseCover