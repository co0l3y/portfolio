import React, { useEffect, useRef } from 'react'

import Icon from '../icon'
import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-gtag";

import { magicLinkExit, magicLinkOver, magicLinkEnter } from "../Anim";

import * as styles from './magic-link.module.css'

const LinkWrapper = ({internal, to, children, ...props}) => {
    if (internal) {
        return <Link to={to} {...props}>{children}</Link>
    } else {
        return <OutboundLink href={to} {...props}>{children}</OutboundLink>
    }
}

const MagicLink = ({children, to, icon, internal, ...props}) => {

    let containerRef = useRef(null)
    let backgroundRef = useRef(null)
    let textRef = useRef(null)
    let iconRef = useRef(null)
    let iconContainerRef = useRef(null)
    let tlRef = useRef(null)

    const handleMouseMove = (e) => {
        const container = containerRef.current
        const background = backgroundRef.current
        const text = textRef.current
        const iconEl = iconRef.current
        const iconContainer = iconContainerRef.current

        magicLinkOver(e,container, background, text, iconEl, iconContainer)
    }

    const handleMouseEnter = () => {

        tlRef.current.play()
        
    }

    const handleMouseExit = () => {

        const background = backgroundRef.current
        const text = textRef.current
        const iconContainer = iconContainerRef.current

        tlRef.current.reverse()
        magicLinkExit(background,text,iconContainer)
    }

    useEffect(()=>{
        const background = backgroundRef.current
        const text = textRef.current
        const iconEl = iconRef.current
        const iconContainer = iconContainerRef.current
        tlRef.current = magicLinkEnter(background, text, iconEl, iconContainer)

        return(()=>{
            tlRef.current.kill()
        })
    },[tlRef, backgroundRef, textRef, iconRef, iconContainerRef])

    return(
        <LinkWrapper to={to} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className={styles.linkWrapper} {...props}>
            <span ref={ref => containerRef.current = ref} className={styles.container}>
                <span ref={ref => backgroundRef.current = ref} className={styles.circle}>
                    <span ref={ref=> iconContainerRef.current = ref} className={styles.iconWrapper}>
                        <Icon ref={iconRef} icon={icon} />
                    </span>
                </span>
                <span ref={ref => textRef.current = ref} className={styles.text}>{children}</span>
            </span>
         </LinkWrapper>
    )
}

export default MagicLink