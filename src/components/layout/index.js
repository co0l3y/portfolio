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

        return(()=>{
            initAnim.kill()
        })
        
    },[mainRef])

    return (
        <>
            <Sidebar/>
            <Container>
                <main className='main-container' ref={mainRef}>{children}</main>
            </Container>
        </>
    )
}

export default Layout