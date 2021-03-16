import React, { useEffect, useRef } from "react"

import Sidebar from "../sidebar"
import Container from "../container"

import { initLoad } from '../Anim'

import './layout.css'

const Layout = ({ children }) => {

    const mainRef = useRef(null)

    useEffect(() => {
        const main = mainRef.current

        const initAnim = initLoad(main)

        initAnim.play()
        
    },[mainRef])

    return (
        <>
            <Sidebar/>
            <Container>
                <main ref={mainRef}>{children}</main>
            </Container>
        </>
    )
}

export default Layout