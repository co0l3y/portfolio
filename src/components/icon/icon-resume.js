import React from 'react'

const IconResume = React.forwardRef((props, ref)=>{
    return(
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
            <g>
                <path d="M0,0H24V24H0Z" fill="none"/>
                <path ref={ref} d="M19,3H14.82A3,3,0,0,0,9.18,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM12,3a1,1,0,1,1-1,1A1,1,0,0,1,12,3Zm0,4a3,3,0,1,1-3,3A3,3,0,0,1,12,7Zm6,12H6V17.6c0-2,4-3.1,6-3.1s6,1.1,6,3.1Z" fill="#eff4fb"/>
            </g>
        </svg>
    )
})


export default IconResume