import React from 'react'

const IconResume = React.forwardRef((props, ref)=>{
    return(
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
            <g>
                <path d="M0,0H24V24H0Z" fill="none"/>
                <path ref={ref} d="M9,6a1,1,0,0,0,1,1h5.59L4.7,17.89A1,1,0,0,0,6.11,19.3L17,8.41V14a1,1,0,0,0,2,0V6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6Z" fill="#eff4fb"/>
            </g>
        </svg>
    )
})


export default IconResume