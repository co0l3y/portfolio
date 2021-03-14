import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Logo = React.forwardRef((props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: {eq: "logo-color-1024.png"}) {
        id
        childImageSharp {
          fixed(width: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.logoImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img ref={ref} fixed={data.logoImage.childImageSharp.fixed} />
})

export default Logo
