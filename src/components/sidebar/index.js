import React from "react"

import styles from "./sidebar.module.css"
import Logo from "../logo"

const Sidebar = () => (
    <aside className={styles.sidebar}>
        <div className="logo">
            <Logo />
        </div>
        <nav className={styles.nav}>
            <ul>
                <li>
                    Work
                </li>
                <li>
                    About
                </li>
            </ul>
        </nav>
    </aside>
)

export default Sidebar