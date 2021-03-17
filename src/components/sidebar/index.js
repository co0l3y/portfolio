import React,{ useEffect, useRef } from "react"

import { Link } from 'gatsby'

import * as styles from "./sidebar.module.css"
import Logo from "../logo"

import { linkHover, logoEnterAnim, logoExitAnim } from '../Anim'

const paths = ['/about/', '/404.html', '/404/']

const NavLink = ({ work, children, ...props}) => {
    let linkRef = useRef(null)
    let activeRef = useRef(false)
    let tweenRef = useRef(null)


    const isActive = ({ location, isCurrent }) => {
        if (work & !paths.includes(location.pathname)) {
            activeRef.current = true
          return { className: styles.navLinkActive }
        } else if ( isCurrent ) {
            activeRef.current = true
            return { className: styles.navLinkActive }
        }
        return null
      }

    const handleMouseEnter = () => {
        tweenRef.current.restart().play()
    }

    const handleMouseLeave = () => {
        if (!activeRef.current) {
            tweenRef.current.reverse()
        }
    }

    useEffect(()=>{
        const link = linkRef.current
        tweenRef.current = linkHover(link)

        if (activeRef.current) {
            tweenRef.current.play()
        }

    },[tweenRef, linkRef])

    return(
        <Link ref={linkRef} getProps={isActive} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.navLink} {...props}>{children}<span aria-hidden='true' className={styles.line}></span></Link>
    )
}

const Sidebar = () => {
    let logoRef = useRef(null)

    const handleLogoEnter = () => {
        const logo = logoRef.current
        logoEnterAnim(logo)
    }

    const handleLogoLeave = () => {
        const logo = logoRef.current
        logoExitAnim(logo)
    }

    return (
    <aside className={styles.container}>
        <div className={styles.logoContainer}>
            <Link to='/' onMouseLeave={handleLogoLeave} onMouseEnter={handleLogoEnter} className={styles.logoLink}>
                <div className={styles.logoWrapper} ref={logoRef}><Logo /></div>
            </Link>
        </div>
        <nav>
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <NavLink work to='/'>Work</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to='/about/'>About</NavLink>
                </li>
            </ul>
        </nav>
    </aside>
    )
}

export default Sidebar