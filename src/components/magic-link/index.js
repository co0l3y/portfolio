import React, { useRef } from 'react'

import Icon from '../icon'
import { Link } from 'gatsby'

import { magicLinkExit, magicLinkOver, magicLinkEnter } from "../Anim";

import styles from './magic-link.module.css'

const LinkWrapper = ({internal, to, children, ...props}) => {
    if (internal) {
        return <Link to={to} {...props}>{children}</Link>
    } else {
        return <a href={to} {...props}>{children}</a>
    }
}

const MagicLink = ({children, to, icon, internal, ...props}) => {

    let containerRef = useRef(null)
    let backgroundRef = useRef(null)
    let textRef = useRef(null)
    let iconRef = useRef(null)
    let iconContainerRef = useRef(null)

    const handleMouseMove = (e) => {
        const container = containerRef.current
        const background = backgroundRef.current
        const text = textRef.current
        const iconEl = iconRef.current
        const iconContainer = iconContainerRef.current

        magicLinkOver(e,container, background, text, iconEl, iconContainer)
    }

    const handleMouseEnter = () => {
        const background = backgroundRef.current
        const text = textRef.current
        const iconEl = iconRef.current
        const iconContainer = iconContainerRef.current

        magicLinkEnter(background, text, iconEl, iconContainer)
    }

    const handleMouseExit = () => {

        const background = backgroundRef.current
        const text = textRef.current
        const iconEl = iconRef.current
        const iconContainer = iconContainerRef.current

        magicLinkExit(background, text, iconEl, iconContainer)
    }

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