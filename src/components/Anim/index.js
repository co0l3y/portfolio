// import React from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


//Utility Animations

const textFadeUp = (el) => {
    return(gsap.from(el, {yPercent: 50, opacity: 0, duration: .5, ease: 'power3.inOut'}))
}

const lineAnim = (el) => {
    return(gsap.from(el, {width: 0}))
}

const headLineAnim = (headEl, lineEl) => {
    const tl = gsap.timeline()
    
    tl.add(textFadeUp(headEl))
    tl.add(lineAnim(lineEl), '<.15')

    return(tl)
}

const sectionHeadAnim = (sectionHead, line, stepHead, stepNumber) => {
    const tl = gsap.timeline()
    
    tl.add(headLineAnim(sectionHead, line))
    tl.add(textFadeUp(stepHead), .35)
    tl.from(stepNumber, {xPercent: -25, opacity: 0, duration: .5, ease: 'power3.inOut'}, '<.25')

    return(tl)
}

export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh(true)
}

export const killScrollTrigger = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}

// Gallery Image Anim

export const galleryAnimUp = (imageEls, triggerEl) => {

  const anim = gsap.from(imageEls, {yPercent: 5, opacity: 0, duration: .75, stagger: .15, ease: 'power2.out'})

  ScrollTrigger.create({
    id: 'galleryAnim',
    trigger: triggerEl,
    start: 'top bottom-=25%',
    animation: anim,
    markers: true,
    toggleActions: 'play none none reverse'
  })

}

// Section Image Anim

export const sectionImageAnim = (imageEl) => {
  gsap.registerPlugin(ScrollTrigger)
  
  const anim = gsap.from(imageEl, {xPercent: 100, opacity: 0, ease: 'power1.out'})

  ScrollTrigger.create({
    id: 'sectionImageAnim',
    trigger: imageEl,
    start: 'top bottom+=10%',
    end: 'center center-=5%',
    animation: anim,
    scrub: true,
    markers: true,
  })
}

// Intro Fade Up

export const sectionIntroAnim = (introEl, sticky) => {
  
  gsap.registerPlugin(ScrollTrigger)
  
  const anim = gsap.from(introEl, {opacity: 0, duration: .75, ease: 'power2.inOut'})

  const start = sticky ? 'top bottom-=10%' : 'top bottom-=25%'
  const toggle = sticky ? 'play reverse play reverse' : 'play none none reverse'
  
  ScrollTrigger.create({
    id: 'introAnim',
    trigger: introEl,
    start: start,
    end: 'top top+=10%',
    animation: anim,
    toggleActions: toggle,
    // markers: true,
  })
  
}

//Regular Header

export const regularHeaderAnim = (headEl) => {
  
  gsap.registerPlugin(ScrollTrigger)

  const stepHead = headEl.firstChild.lastChild
  const stepNumber = headEl.firstChild.firstChild
  const sectionHead = headEl.children[1]
  const line = headEl.lastChild
  
  // ScrollTrigger.saveStyles([stepNumber, stepHead, sectionHead, line])

  // Create Anim trigger

  const anim = sectionHeadAnim(sectionHead, line, stepHead, stepNumber)

  ScrollTrigger.create({
    id: 'animTriggerDesktop',
    trigger: headEl,
    start: 'top bottom-=25%',
    animation: anim,
    toggleActions: 'play none none reverse',
    // markers: true,
  })

}

// Sticky Header

export const stickyHeaderAnim = (headEl, triggerEl) => {
    
    gsap.registerPlugin(ScrollTrigger)

    const stepHead = headEl.firstChild.lastChild
    const stepNumber = headEl.firstChild.firstChild
    const sectionHead = headEl.children[1]
    const line = headEl.lastChild

    const anim = sectionHeadAnim(sectionHead, line, stepHead, stepNumber)

    ScrollTrigger.saveStyles([stepNumber, stepHead, sectionHead, line])

    ScrollTrigger.matchMedia({
        '(max-width: 767px)': () => {
            //create anim trigger
            ScrollTrigger.create({
                id: 'animTriggerMobile',
                trigger: triggerEl,
                start: 'top top',
                end: 'bottom top',
                animation: anim,
                toggleActions: 'play reverse play reverse',
                anticipatePin: 1,
            })

        },
        '(min-width: 768px)': () => {
            //creat anim trigger
            ScrollTrigger.create({
                id: 'animTriggerDesktop',
                trigger: triggerEl,
                start: 'top top+=25%',
                end: 'bottom bottom',
                animation: anim,
                toggleActions: 'play reverse play reverse',
                // markers: true,
            })

            //create pin trigger
            ScrollTrigger.create({
                id: 'stickyTriggerDesktop',
                trigger: triggerEl,
                pin: headEl,
                pinSpacing: false,
                anticipatePin: true,
                start: 'top top',
                end: 'bottom bottom',
                // markers: true,
            })
        }
    })


}


//Index Scroll Scene

export const deskAnim1 = (el, start, end, duration) => {
    const tl = gsap.timeline()
    const steps = end - start

    for (let i = 0; i <= steps; i++) {
      let percent = (i * -100)
      let position = (duration/steps) * i

      tl.set(el, {xPercent: percent, duration: 0}, position)
    }
    
    return(tl)
  }

  const blindsEnterAnim = (els) => {
    const tl = gsap.timeline({paused: true})

    gsap.utils.toArray(els).forEach((el, index) => {
      let pathLength = el.getTotalLength()
      let pathPadding = pathLength * 1.2
      let position = '<.02'
      tl.fromTo(el, {strokeDasharray: pathPadding, strokeDashoffset: (pathPadding * 3)},{strokeDashoffset: (pathPadding * 2), duration: 1.5, ease: 'back.inOut(1)'}, position)
    })

    return(tl)

  }


  const blindsExitAnim = (els) => {
    const tl = gsap.timeline()

    gsap.utils.toArray(els).forEach((el, index) => {
      let pathLength = el.getTotalLength()
      let pathPadding = pathLength * 1.2
      let position = '<.02'
      tl.fromTo(el, {strokeDasharray: pathPadding, strokeDashoffset: (pathPadding * 2)}, {strokeDashoffset: pathPadding, duration: 2, immediateRender: false}, position)
    })

    return(tl)

  }

  const blindsBlendAnim = (els) => {
    const tl = gsap.timeline()

    gsap.utils.toArray(els).reverse().forEach((blind, index) => {
      let pathLength = blind.getTotalLength()
      let dur = 2.75
      let dash = pathLength * .09
      let position = (index === 0) ? '' : '<.02'
      tl.fromTo(blind, {strokeDasharray: [dash, pathLength], strokeDashoffset: (pathLength + (dash * 2))},{strokeDashoffset: dash, duration: dur, ease: 'power2.in'}, position)
    })

    return (tl)
  }

  const parallaxAnim = (els, minDir, maxDir, dir, minDur, maxDur, ease, pos) => {
    const tl = gsap.timeline()

    gsap.utils.toArray(els).forEach((el)=>{
      const clamp = (number) => {
        if (minDir < 0 && Math.abs(number) < 100) {
          return (gsap.utils.random(100, maxDir) * Math.sign(number))
        } else {
          return (number)
        }
      }

      let randomDir = clamp(gsap.utils.random(minDir, maxDir))
      let randomTime = gsap.utils.random(minDur, maxDur)

      tl.from(el, {[dir]: randomDir, duration: randomTime, ease: ease}, pos)
      tl.from(el, {opacity: 0, duration: randomTime/2, ease: ease}, '<')
    })

    return(tl)

  }


const buildingsAnim = (buildL, buildR) => {
    const buildingsLeft = gsap.utils.toArray(buildL)
    const buildingsRight = gsap.utils.toArray(buildR)
    const tl = gsap.from([buildL, buildR], {y: 400, duration: 3, stagger: -.05, ease: 'power3.out'})

    return(tl)
  }

  export const scrollSceneAnim = (introTrigger, scrubTrigger, pinTrigger, svgContainer, deskEl) => {
    const tl = gsap.timeline({paused: true})
    // elements
    const svgEl = svgContainer.querySelector('svg')
    const blindEls = svgEl.querySelectorAll('#blinds path')
    const blindBlendEls = svgEl.querySelectorAll('#blinds-blend path')
    const moonEl = svgEl.querySelector('#circle')
    const starEls = svgEl.querySelectorAll('#stars circle')
    const cloudEls = svgEl.querySelector('#clouds').children
    const steamEls = svgEl.querySelectorAll('#coffee-steam path')
    const buildingRightEls = svgEl.querySelector('#buildings-right').children
    const buildingLeftEls = svgEl.querySelector('#buildings-left').children
    const maskEl = svgEl.querySelector('#mask circle')

    //add animations to timeline
    tl.add(blindsExitAnim(blindEls))
    tl.add(deskAnim1(deskEl, 1,8,8), '<')
    tl.add(blindsBlendAnim(blindBlendEls), '<')
    tl.from(steamEls, {yPercent: 50, opacity: 0, duration: .5, stagger: .02 }, '<')
    tl.add(parallaxAnim(starEls, 200, 300, 'y', 6, 7, 'power2.out', '<.0001'), '<2.25')
    tl.from(moonEl, {y: -200, duration: 4, opacity: 0, ease: 'power2.out'}, 2.25)
    tl.from(maskEl, {opacity: 0, transformOrigin: 'center bottom', scale: 0, duration: 2, ease: 'back.out(1.2)', smoothOrigin: true,  }, '<1')
    tl.add(parallaxAnim(cloudEls, -300, 300, 'xPercent', 4, 4.5, 'power2.out', '<.02'), '<.5')
    tl.add(buildingsAnim(buildingRightEls, buildingLeftEls), '<.25')
    tl.to(maskEl, {transformOrigin: 'center bottom', scale: 0, duration: 2, ease: 'back.in(1.2)', smoothOrigin: true,  }, '>')
    tl.to([cloudEls, moonEl], {opacity: 0, duration: 2}, '<')


    // Intro Trigger
    ScrollTrigger.create({
        id: 'blinds-init',
        trigger: introTrigger,
        animation: blindsEnterAnim(blindEls),
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play complete none none'
      })

    // scrub trigger
    ScrollTrigger.create({
        id: 'svg-scrub',
        trigger: scrubTrigger,
        start: 'top top',
        end: 'bottom center',
        animation: tl,
        scrub: 1,
      })

      // pin trigger
      ScrollTrigger.create({
        id: 'scene-pin',
        trigger: pinTrigger,
        start: 'top top',
        end: 'bottom bottom',
        pin: svgContainer,
        pinSpacing: false,
      })
  }

  // Case Study Slides

  export const caseGalleryAnim = (slideEls , container) => {

    gsap.registerPlugin(ScrollTrigger)



    //Pin Trigger

      ScrollTrigger.create({
        trigger: container,
        pin: container,
        start: 'top top',
        end: 'top+=' + (100 * (slideEls.length - 1)) + '%',
        anticipatePin: 1,
        pinSpacing: true,
      })

      // snap

      ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom+=' + (100 * (slideEls.length - 1)) + '% bottom',
        // markers: true,
        snap: {
          snapTo: 1 / (slideEls.length ),
          duration: 0.2,
          delay: 0.1,
          ease: 'power2.inOut'
        }
      })

      
    // slides
    slideEls.forEach((slide, index) => {

      const caseImg = slide.children[0]
      const caseH = slide.children[1].firstChild.firstChild
      const caseLine = slide.children[1].lastChild
      const caseInfo = gsap.utils.toArray(slide.children[2].children)
      const caseSkills = gsap.utils.toArray(slide.children[3].firstChild.children)
      const caseNumCurrent = gsap.utils.toArray(slide.children[4].firstChild.children)
      const caseNumTotal = slide.children[4].lastChild

      console.log(caseImg)
      
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'case-anim-trigger-' + index,
          trigger: slide,
          start: 'top+=' + (100 * index) + '% top+=10%',
          end: 'top+=' + (100 * (index + 1 )) + '% bottom-=10%',
          toggleActions: 'play reverse play reverse',
          // markers: true,
        }
      })

    tl.from(slide, {autoAlpha: 0})
    tl.from(caseImg, {duration: 1, scale: 0, ease: 'back.out(.5)'},)
    tl.from(caseImg, {autoAlpha:0, duration: 2, ease: 'power3.out'}, '<')
    tl.add(headLineAnim(caseH, caseLine), '<0.25')
    tl.from(caseSkills, {yPercent: 100, autoAlpha: 0, duration: .5, stagger: .15}, '<')
    tl.from(caseNumCurrent, {yPercent: 100, ease: 'back.out(1.2)', stagger: 0.15}, '<')
    tl.from(caseNumTotal, {autoAlpha: 0, duration: .5,ease: 'power2.out'},'<')
    tl.from(caseInfo, {xPercent: -100, duration: .5, stagger: .15}, '<')

    })

  }



  // Case Study Intro

  export const caseIntroAnim = (introEl) => {
    const tl = gsap.timeline()

    const titleEl = introEl.firstChild
    const lineEl = introEl.children[1]
    const categoryEl = introEl.lastChild

    tl.add(headLineAnim(titleEl, lineEl))
    tl.add(textFadeUp(categoryEl), '<.15')

  }


  // Case Study Cover

  export const caseCoverAnim = (coverEl) => {
    
    gsap.registerPlugin(ScrollTrigger)
    
    //Initial Animation
    gsap.fromTo(coverEl, {x: -300, opacity: 0}, {x: -200, opacity: 1, duration: 1, ease: 'power2.inOut'})

    // Scroll Trigger Anim
    gsap.fromTo(coverEl, { x: -200 },{x: 0, duration: 2,ease: 'power3.inOut',
        scrollTrigger: {
            trigger: coverEl,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    }) 
  }