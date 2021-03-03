import React from 'react'

import Image from 'gatsby-image'

// import styles from './content-gallery.modules.css'

import ContentRow from './content-row'
import Content from './content'

const GalleryImage = ({ phone, image }) => (
    <Image fluid={image} style={phone ? {'borderRadius' : '2rem'}: {}}/>
)

const GalleryItem = ({ image, fullWidth, colRight, phone }) => {
    if (fullWidth) {
        return(
            <ContentRow>
                <Content colRight={colRight}>
                    <GalleryImage image={image} phone={phone}/>
                </Content>
            </ContentRow>
        )
    } else {
        return (
            <Content>
                <GalleryImage image={image} phone={phone}/>
            </Content>
        )
    }
}

const ContentGallery = ({ gallery , fullWidth, colRight, phone }) => {

    console.log(gallery)

    const imageMap = gallery.map((image, index) => {
        console.log(image)
        return( 
            <GalleryItem key={index} phone={phone} fullWidth={fullWidth} colRight={colRight} image={image.childImageSharp.fluid}/>
        )
    })

    console.log(imageMap)

    if (fullWidth) {
        return (
            <>
                {imageMap}
            </>
        )
    } else {
        return (
            <ContentRow>
                {imageMap}
            </ContentRow>
        )
    }
    
}

export default ContentGallery