import React, { useEffect } from "react"

import Sidebar from "../sidebar"
import Container from "../container"

import { refreshScrollTrigger, killScrollTrigger } from '../Anim'

import './layout.css'

const Layout = ({ children }) => {

    useEffect(() => {
        // recalc scrolltrigger on font load

        document.fonts.ready.then(() => {
            refreshScrollTrigger()
            console.log('fonts are ready')

            return(()=>{
                killScrollTrigger()
            })
        })
    },[document])

    return (
        <>
            <Sidebar />
            <Container>
                <main>{children}</main>
            </Container>
        </>
    )
}

export default Layout