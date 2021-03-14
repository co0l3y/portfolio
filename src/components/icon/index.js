import React from "react"

import IconArrow from "./icon-arrow"
import IconMail from "./icon-mail"
import IconResume from "./icon-resume"
import IconBehance from "./icon-behance"
import IconLinkedin from "./icon-linkedin"

const Icon = React.forwardRef(({ icon }, ref) => {
    let selectedIcon = null

    switch (icon) {
        case 'arrow':
            selectedIcon = <IconArrow ref={ref}/>
            break
        case 'mail':
            selectedIcon = <IconMail ref={ref}/>
            break
        case 'resume':
            selectedIcon = <IconResume ref={ref}/>
            break
        case 'behance':
            selectedIcon = <IconBehance ref={ref}/>
            break
        case 'linkedin':
            selectedIcon = <IconLinkedin ref={ref}/>
            break
        default:
            selectedIcon = <IconArrow ref={ref} />
            break;
    }

    return selectedIcon


})

export default Icon
