import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import styles from './desk-sequence.module.css'

import Img from 'gatsby-image'

const DeskSequence = ({inputRef}) => {

    const data = useStaticQuery(graphql`
    query {
        deskSequence: allFile(filter: {relativeDirectory: {regex: "/desk-sequence/"}}, sort: {order: ASC, fields: absolutePath}) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
            }
        }
    }
  `)

    return (
        <div ref={inputRef} className={styles.wrapper}>
            {data.deskSequence.edges.map(({ node }, index)=>(
            <div key={index} className={styles.imgWrap}>
                <Img loading='eager' fluid={node.childImageSharp.fluid} />
            </div>
            ))}
        </div>
    )
}


export default DeskSequence