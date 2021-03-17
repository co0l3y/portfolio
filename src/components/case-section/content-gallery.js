import React, { useRef, useEffect } from 'react'

import Image from 'gatsby-image'

import * as styles from './case-section.module.css'

import ContentRow from './content-row'
import Content from './content'

import { galleryAnimUp } from '../Anim'

const GalleryImage = ({ phone, image }) => (
    <Image fluid={image} style={phone ? {'borderRadius' : '2rem'}: {}}/>
)

const GalleryItem = React.forwardRef(({ image, fullWidth, colRight, phone }, ref) => {
    if (fullWidth) {
        return(
            <ContentRow>
                <Content colRight={colRight}>
                    <div ref={ref}>
                        <GalleryImage image={image} phone={phone}/>
                    </div>
                </Content>
            </ContentRow>
        )
    } else {
        return (
            <Content>
                <div ref={ref} className={styles.galleryItem}>
                    <GalleryImage image={image} phone={phone}/>
                </div>
            </Content>
        )
    }
})

const ContentGallery = ({ gallery , fullWidth, colRight, phone }) => {
    let imagesRef = useRef([])
    let triggerRef = useRef(null)

    useEffect(()=>{
        const images = imagesRef.current
        const trigger = triggerRef.current

        galleryAnimUp(images, trigger)

    },[imagesRef])

    const imageMap = gallery.map((image, index) => {
        return( 
            <GalleryItem ref={ref => imagesRef.current[index] = ref} key={index} phone={phone} fullWidth={fullWidth} colRight={colRight} image={image.childImageSharp.fluid}/>
        )
    })


    if (fullWidth) {
        return (
            <div ref={triggerRef}>
                {imageMap}
            </div>
        )
    } else {
        return (
            <div ref={triggerRef}>
                <ContentRow>
                    {imageMap}
                </ContentRow>
            </div>
        )
    }
    
}

export default ContentGallery