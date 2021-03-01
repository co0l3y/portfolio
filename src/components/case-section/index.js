import React from 'react'

import SectionIntro from './section-intro'
import SectionImage from './section-intro-image'
import SectionIntroImage from './section-intro-image'
import SectionSticky from './section-sticky'
import SectionStickyIntro from './section-sticky-intro'
import SectionStickyImage from './section-sticky-image'
import SectionStickyIntroImage from './section-sticky-intro-image'

const CaseSection = ({ sticky, title, stepNum, intro, image, children }) => {

    if (sticky && intro && image) {
        return <SectionStickyIntroImage title={title} stepNum={stepNum} intro={intro} image={image}>{children}</SectionStickyIntroImage>
    } else if (sticky && intro) {
        return <SectionStickyIntro title={title} stepNum={stepNum} intro={intro}>{children}</SectionStickyIntro>
    } else if (sticky && image) {
        return <SectionStickyImage title={title} stepNum={stepNum} image={image}>{children}</SectionStickyImage>
    } else if (sticky) {
        return <SectionSticky title={title} stepNum={stepNum} >{children}</SectionSticky>
    } else if (intro && image) {
        return <SectionIntroImage title={title} stepNum={stepNum} intro={intro} image={image}>{children}</SectionIntroImage>
    } else if (image) {
        return <SectionImage title={title} stepNum={stepNum} image={image}>{children}</SectionImage>
    } else {
        return <SectionIntro title={title} stepNum={stepNum} intro={intro}>{children}</SectionIntro>
    }

}

export default CaseSection