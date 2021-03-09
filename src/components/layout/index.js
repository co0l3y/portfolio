import React, { useEffect } from "react"

import Sidebar from "../sidebar"
import Container from "../container"

import { refreshScrollTrigger, killScrollTrigger } from '../Anim'

import './layout.css'

const Layout = ({ children }) => {

    useEffect(() => {
        // recalc scrolltrigger on font load
        if (typeof document !== 'undefined') {
            document.fonts.ready.then(() => {
                refreshScrollTrigger(true)
                console.log('Scrolltrigger refreshed!')
            })
        }

        return(()=>{
            killScrollTrigger()
        })
    },[])

    return (
        <>
            <Sidebar/>
            <Container>
                <main>{children}</main>
            </Container>
        </>
    )
}

export default Layout