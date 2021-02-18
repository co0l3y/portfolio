import React from "react"

import Sidebar from "../sidebar"
import Container from "../container"

import { useStaticQuery, graphql } from "gatsby"

import './layout.css'

const Layout = ({ children }) => {
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