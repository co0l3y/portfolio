import React,{ useEffect, useRef } from 'react'

import { graphql } from 'gatsby';

import Image from 'gatsby-image'

import Layout from '../../components/layout'
import MagicLink from '../../components/magic-link'

import { heroAnim } from "../../components/Anim";

import * as styles from './about.module.css'
import SEO from '../../components/seo'

const AboutPage = ({
    data: {
        portraitImage: {
            childImageSharp: {
                fluid: portrait
            }
        },
        engagementImage: {
            childImageSharp: {
                fluid: engagement
            }
        },
        wayneImage: {
            childImageSharp: {
                fluid: wayne
            }
        }
    }
} ) => {

    const heroRef = useRef(null)

    useEffect(()=>{
        
        const hero = heroRef.current
        const heroTl = heroAnim(hero)

        heroTl.play()

        return (()=>{
            heroTl.kill()
        })

    },[heroRef])
    return(
        <Layout>
            <SEO title='About' />
            <div className={styles.imageParent}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image fluid={portrait} />
                    </div>
                </div>
            </div>
            <section ref={heroRef} className={styles.hero}>
                    <div className={styles.heroWrapper}>
                        <h1 className={styles.heroHeader}>Sean Cameron Cooley</h1>
                        <span className={styles.line}></span>
                        <h2 className={styles.heroSubHeader}>Design, Motion, &amp; Interactive</h2>
                    </div>
            </section>
            <section className={styles.introContainer}>
                <div className={styles.introWrapper}>
                    <p className={styles.intro}>Hello! I'm a multi-disciplinary designer with over 12 years of experience helping companies understand, and find solutions to, their customer's problems through research, design, and testing. I lead teams, design, code, animate, play guitar, take adventures with my (soon to be) wife and our dog, love to roll up my sleeves, and always sweat the details.</p>
                </div>
            </section>
            <div>
                <section className={styles.sectionContainer}>
                    <div className={styles.infoHeadWrapper}>
                        <h2 className={styles.sectionHeader}>Work Experience</h2>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.infoContentContainer}>
                        <div className={styles.infoContentWrapper}>
                            <span className={styles.date}>2019-2021</span>
                            <h3 className={styles.position}>Associate Director, Design &amp; UX</h3>
                            <span className={styles.company}>Tidal Music &#183; New York, NY</span>
                        </div>
                        <div className={styles.infoContentWrapper}>
                            <span className={styles.date}>2015-2019</span>
                            <h3 className={styles.position}>Senior Product Designer</h3>
                            <span className={styles.company}>Snap Interactive &#183; New York, NY</span>
                        </div>
                        <div className={styles.infoContentWrapper}>
                            <span className={styles.date}>2014-2015</span>
                            <h3 className={styles.position}>Director, Design/Motion</h3>
                            <span className={styles.company}>IMP Digital Studios &#183; Paramus, NJ</span>
                        </div>
                        <div className={styles.infoContentWrapper}>
                            <span className={styles.date}>2011-2014</span>
                            <h3 className={styles.position}>Team Lead, Design/Motion</h3>
                            <span className={styles.company}>Thingee Digital &#183; Parsippany, NJ</span>
                        </div>
                    </div>
                </section>
                <section className={styles.sectionContainer}>
                    <div className={styles.infoHeadWrapper}>
                        <h2 className={styles.sectionHeader}>Education</h2>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.infoContentContainer}>
                        <div className={styles.infoContentWrapper}>
                                <span className={styles.date}>2008-2011</span>
                                <h3 className={styles.position}>B.A., Graphic, Interactive, &amp; Advertising Art</h3>
                                <span className={styles.company}>Seton Hall University &#183; South Orange, NJ</span>
                        </div>
                    </div>
                </section>
                <section className={styles.sectionContainer}>
                    <div className={styles.infoHeadWrapper}>
                            <h2 className={styles.sectionHeader}>What I do, &amp; how I do it</h2>
                            <span className={styles.line}></span>
                        </div>
                        <div className={styles.infoContentContainer}>
                            <div className={styles.infoContentWrapper}>
                                <h3 className={styles.sectionSubhead}>Skills</h3>
                                <ul className={styles.skills}>
                                    <li className={styles.skillsItem}>Design Direction</li>
                                    <li className={styles.skillsItem}>UI/UX Design</li>
                                    <li className={styles.skillsItem}>Product Design</li>
                                    <li className={styles.skillsItem}>Motion Design</li>
                                    <li className={styles.skillsItem}>User Research &amp; Testing</li>
                                    <li className={styles.skillsItem}>Front-End Development</li>
                                    <li className={styles.skillsItem}>Data Analysis</li>
                                    <li className={styles.skillsItem}>Video Editing</li>
                                    <li className={styles.skillsItem}>Branding</li>
                                    <li className={styles.skillsItem}>Digital Marketing</li>
                                    <li className={styles.skillsItem}>3D Modeling &amp; AR</li>
                                    <li className={styles.skillsItem}>Photography</li>
                                </ul>
                            </div>
                            <div className={styles.infoContentWrapper}>
                                <h3 className={styles.sectionSubhead}>Software</h3>
                                <ul className={styles.skills}>
                                    <li className={styles.skillsItem}>Figma</li>
                                    <li className={styles.skillsItem}>Sketch</li>
                                    <li className={styles.skillsItem}>Origami Sudio</li>
                                    <li className={styles.skillsItem}>Illustrator</li>
                                    <li className={styles.skillsItem}>Photoshop</li>
                                    <li className={styles.skillsItem}>After Effects</li>
                                    <li className={styles.skillsItem}>Premier</li>
                                    <li className={styles.skillsItem}>Cinema 4D</li>
                                    <li className={styles.skillsItem}>Spark AR</li>
                                    <li className={styles.skillsItem}>Visual Studio Code</li>
                                </ul>
                            </div>
                        </div>
                </section>
            </div>
            <section className={styles.band}>
                <div className={styles.contentContainer}>
                    <Image fluid={wayne} />
                </div>
                <div className={styles.headWrapper}>
                    <h2 className={styles.sectionHeader}>I'm in a band!</h2>
                    <span className={styles.line}></span>
                    <div className={styles.contentWrapper}>
                        <p className={styles.sectionCopy}>Wayne Johnson's Bicep (not to be confused with Dwayne Johnson for copyright purposes) is a 3 piece band based out of central New Jersey. We just recently played the Live From Lonely Town virtual festival. More to come soon...</p>
                        <MagicLink to='https://youtu.be/ENx5AimxYWU' target='_blank' icon='arrow'>Don't say Dwayne!</MagicLink>
                    </div>
                </div>
            </section>
            <section className={styles.outroContainer}>
                <div className={styles.outroWrapper}>
                    <div><h2 className={styles.outro}>Currently available for your next project. Let's keep the conversation going!</h2></div>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactItem}>
                            <MagicLink to="https://drive.google.com/file/d/1sAie7l_gz_h3shtSI3Zz7DgxliXkOKaG/view?usp=sharing" target='_blank' icon='resume'>Resume</MagicLink>
                        </div>
                        <div className={styles.contactItem}>
                            <MagicLink to="mailto:hello@seancameroncooley.com" icon='mail'>Contact</MagicLink>
                        </div>
                        <div className={styles.contactItem}>
                            <MagicLink to="https://www.linkedin.com/in/seancameroncooley/" target='_blank' icon='linkedin'>Linkedin</MagicLink>
                        </div>
                        <div className={styles.contactItem}>
                            <MagicLink to="https://www.behance.net/seancameron" target='_blank' icon='behance'>Behance</MagicLink>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage

export const query = graphql`
    query AboutQuery {
        portraitImage: file(relativePath: {eq: "portrait-01.png"}) {
            id
            childImageSharp {
                fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        engagementImage: file(relativePath: {eq: "engagement.jpg"}) {
            id
            childImageSharp {
                fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        wayneImage: file(relativePath: {eq: "wjb.jpg"}) {
            id
            childImageSharp {
                fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`