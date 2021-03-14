import React from 'react'

const IconMail = React.forwardRef((props, ref)=>{
    return(
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
            <g>
                <path d="M0,0H24V24H0Z" fill="none"/>
                <path ref={ref} d="M20,4H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6A2,2,0,0,0,20,4Zm-.4,4.25-6.54,4.09a2,2,0,0,1-2.12,0L4.4,8.25a.85.85,0,1,1,.9-1.44L12,11l6.7-4.19a.85.85,0,1,1,.9,1.44Z" fill="#eff4fb"/>
            </g>
        </svg>
    )
})


export default IconMail