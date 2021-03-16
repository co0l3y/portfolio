import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSceneSvg from "../components/background-scene"

import styles from './404.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Ooopsie Doopsie" />
    <div className={styles.container}>
      <div className={styles.background}>
        <BackgroundSceneSvg />
      </div>
      <div className={styles.copyContainer}>
        <div className={styles.hero}>
            <div className={styles.heroWrapper}>
              <h1 className={styles.heroHeader}>Sean Cameron Cooley</h1>
              <span className={styles.line}></span>
              <h2 className={styles.heroSubHeader}>Design, Motion, &amp; Interactive</h2>
              <p className={styles.copy}>Ooops, I think you took a wrong turn....</p>
            </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
