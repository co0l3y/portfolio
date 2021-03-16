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

export const initLoad = (container) => {
  return gsap.from(container, {autoAlpha: 0, duration: 2, ease: 'power2.out', paused: true})
}

export const refreshScrollTrigger = () => {

  if (typeof document !== 'undefined') {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh(true)
    })
  }

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
    // markers: true,
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
    // markers: true,
  })
}

// Intro Fade Up

export const sectionIntroAnim = (introEl, sticky) => {
  
  gsap.registerPlugin(ScrollTrigger)
  
  const anim = gsap.from(introEl, {opacity: 0, duration: .75, ease: 'power2.inOut'})

  const start = sticky ? 'top bottom-=10%' : 'top bottom-=25%'
  const toggle = sticky ? 'play none none reverse' : 'play none none reverse'
  
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
                start: 'top center',
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

    const startPercent = (start - 1) * -100

    gsap.set(el, {xPercent: startPercent})

    for (let s = start, i = 0; s <= end; s++, i++) {
      let percent = ((s - 1) * -100)
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
    const buildingRightEls = svgEl.querySelector('#buildings-right').children
    const buildingLeftEls = svgEl.querySelector('#buildings-left').children
    const maskEl = svgEl.querySelector('#mask circle')

    //add animations to timeline
    tl.add(blindsExitAnim(blindEls))
    tl.add(deskAnim1(deskEl, 1,8,8), '<')
    tl.add(blindsBlendAnim(blindBlendEls), '<')
    tl.add(parallaxAnim(starEls, 200, 300, 'y', 6, 7, 'power2.out', '<.0001'), '<2.25')
    tl.from(moonEl, {y: -200, duration: 4, opacity: 0, ease: 'power2.out'}, 2.25)
    tl.fromTo(maskEl, {scale: 0, opacity: 0, transformOrigin: 'center bottom', smoothOrigin: true,}, {scale: 1, opacity:.65, duration: 2, ease: 'back.out(1.2)',}, '<1')
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

  // Backround Anim for Case Studies

export const bgSceneCaseAnim = (pinTrigger, svgContainer, deskEl) => {
  const svgEl = svgContainer.querySelector('svg')
  const starEls = svgEl.querySelectorAll('#stars circle')

    //pin scene

    ScrollTrigger.create({
      id: 'scene-pin',
      trigger: pinTrigger,
      start: 'top top',
      end: 'bottom bottom',
      pin: svgContainer,
      pinSpacing: false,
      anticipatePin: .5,
    })

  //bg scene anim

  const sceneAnim = gsap.timeline({
    scrollTrigger: {
      id: 'bg-scene-anim',
      trigger: svgContainer,
      start: 'top bottom-=25%',
      end: 'top top',
      scrub: .5,
      // markers: true,
    }
  })
    
    // desk scene scrub

    const deskAnim = gsap.timeline({
      scrollTrigger: {
        id: 'desk-scene-anim',
        trigger: pinTrigger,
        start: 'top center',
        end: 'bottom bottom',
        scrub: .5,
        // markers: true,
      }


  })



  sceneAnim.from(svgEl, {autoAlpha: 0, duration: .5})
  sceneAnim.add(parallaxAnim(starEls, 200, 300, 'y', 2, 5, 'power2.out', '<.0001'), '<')
  deskAnim.add(deskAnim1(deskEl, 4,8,4))

}


  //Case slide Hover Anim

  export const caseHoverAnim = (slide) => {
    const image = slide.children[0]
    const caseView = slide.children[1].lastChild
    const tl = gsap.timeline({paused: true, overwrite: 'auto'})
    
    tl.fromTo(image, {autoAlpha: .75}, {autoAlpha: 1, duration: .25, ease: 'power2.out'})
    tl.from(caseView, {yPercent: -50, autoAlpha:0, duration: .5, ease: 'power3.out'}, '<')
    
    return tl

  }


  // Case Study Slides

  export const caseSlideAnim = (slide, index) => {

    gsap.registerPlugin(ScrollTrigger)

    //snapping

    ScrollTrigger.create({
      id: 'case-slide-snap-' + index,
      trigger: slide,
      start: 'top top',
      // markers: true,
      snap: {
        snapTo: 1,
        duration: {min: 0.2, max: 0.5},
        delay: 0,
        ease: 'power2.inOut'
      }
    })

    // Image Anim
    const caseImage = gsap.timeline({
      scrollTrigger: {
        id: 'case-image-' + index,
        trigger: slide,
        start: 'top center',
        end: 'bottom bottom-=25%',
        toggleActions: 'play reverse play reverse',
        overwrite: 'auto',
        // markers: true,
      }
    })

    //text anim
    const caseText = gsap.timeline({
      scrollTrigger: {
        id: 'case-text-' + index,
        trigger: slide,
        start: 'top top+=25%',
        end: 'bottom bottom-=25%',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      }
    })

    // Slide Elements

    const caseImg = slide.children[0]
    const caseH = slide.children[1].firstChild.firstChild
    const caseLine = slide.children[1].children[1]
    const caseInfo = gsap.utils.toArray(slide.children[2].children)
    const caseSkills = gsap.utils.toArray(slide.children[3].firstChild.children)
    const caseNumCurrent = gsap.utils.toArray(slide.children[4].firstChild.children)
    const caseNumTotal = slide.children[4].lastChild

    caseImage.fromTo(caseImg, {scale: 0}, {scale: 1, duration: 1, ease: 'back.out(.5)'})
    caseImage.fromTo(caseImg, {autoAlpha: 0},{ autoAlpha: .75, duration: 0.25, ease: 'power3.out'}, '<')
    caseText.add(headLineAnim(caseH, caseLine))
    caseText.from(caseSkills, {yPercent: 100, autoAlpha: 0, duration: .5, stagger: .075}, '<')
    caseText.from(caseNumCurrent, {yPercent: 100, ease: 'back.out(1.2)', stagger: 0.075}, '<')
    caseText.from(caseNumTotal, {autoAlpha: 0, duration: .5,ease: 'power2.out'},'<')
    caseText.from(caseInfo, {xPercent: -100, duration: .5, stagger: .075}, '<')

  }



  // Case Study Intro

  export const caseIntroAnim = (head,line,cat) => {
    const tl = gsap.timeline({paused: true})


    tl.add(headLineAnim(head, line))
    tl.add(textFadeUp(cat), '<.15')

    return(tl)

  }


  // Case Study Cover

  export const caseCoverAnim = (coverEl) => {
    
    gsap.registerPlugin(ScrollTrigger)

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: coverEl,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        scrub: false,
      }
    })

    //initial settings
    gsap.set(coverEl, {x: -300, opacity: 0})
    
    //Load Animation
    gsap.fromTo(coverEl, {x: -300, opacity: 0}, {x: -200, opacity: 1, duration: 1, ease: 'power2.inOut'})

    // Scroll Trigger Anim
    scrollTl.fromTo(coverEl, { x: -200 }, {x: 0, duration: 2, ease: 'power3.inOut'})

  }
  export const linkHover = (link) => {
    const tl = gsap.timeline({paused: true})

    const line = link.lastChild

    tl.fromTo(link, {color: '#EFF4FB'}, {color: '#43CEA2', duration: .5, ease: 'power2.inOut'})
    tl.fromTo(line, {width: 0}, {width: '50%', duration: .5, ease: 'power2.inOut'}, '<')
    
    return(tl)

  }

  export const magicLinkOver = (e, container, background, text, icon, iconContainer) => {

      const containerRect = container.getBoundingClientRect()
      const scrollTop = typeof window !== 'undefined' && typeof document !== 'undefined' ? window.pageYOffset || document.documentElement.scrollTop : ''
      let relX = e.pageX - containerRect.left
      let relY = e.pageY - containerRect.top


      gsap.to(background, {
        x: (relX - containerRect.width/2) / containerRect.width  * 20,
        y: (relY - containerRect.height/2 - scrollTop) / containerRect.height * 20,
        duration: 0.4,
        ease: 'power2.out',
      })

      gsap.to(text, {
        x: (relX - containerRect.width/2) / containerRect.width  * 10,
        y: (relY - containerRect.height/2 - scrollTop) / containerRect.height * 10,
        duration: 0.2,
        ease: 'power2.out',
      })

      gsap.to(iconContainer, {
        x: (relX - containerRect.width/2) / containerRect.width  * 5,
        y: (relY - containerRect.height/2 - scrollTop) / containerRect.height * 5,
        duration: 0.2,
        ease: 'power2.out',
      })
  }

  export const magicLinkEnter = (background, text, icon, iconContainer) => {

    gsap.to(background, {scale: 1.25, backgroundColor: 'rgba(239,244,251,.16)', duration: .25, ease: 'back.out(1)'})
    gsap.to(text, {scale: 1.25, color: '#43CEA2', duration: .5, ease: 'power2.out'})
    gsap.to(icon, {fill: '#43CEA2', duration: .5, ease: 'power2.out'})
    gsap.to(iconContainer, {opacity: 1, duration: .5, ease: 'power2.out'})
  
  }

  export const magicLinkExit = (background, text, icon, iconContainer) => {

    gsap.to(icon, {fill: '#EFF4FB', duration: .5, ease: 'power2.out'})

    gsap.to(background, {
      x: 0,
      y: 0 ,
      scale: 1,
      backgroundColor: 'rgba(239,244,251,.08)',
      duration: 0.4,
      ease: 'power2.out',
    })

    gsap.to(text, {
      x: 0,
      y: 0 ,
      scale: 1,
      color: '#EFF4FB',
      duration: 0.2,
      ease: 'power2.out',
    })

    gsap.to(iconContainer, {
      x: 0,
      y: 0,
      opacity: .5,
      duration: 0.2,
      ease: 'power2.out',
    })
}

export const logoEnterAnim = (logo) => {

  gsap.to(logo, {
    opacity: 1,
  })
}

export const logoExitAnim = (logo) => {
  gsap.to(logo, {
    opacity: .8,
  })
}

export const heroAnim = (hero) => {
  const tl = gsap.timeline({paused: true})

  const head = hero.firstChild.firstChild
  const line = hero.firstChild.children[1]
  const subhead = hero.firstChild.lastChild
  
  tl.add(headLineAnim(head,line))
  tl.add(textFadeUp(subhead), '<.25')

  return(tl)

}



