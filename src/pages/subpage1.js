import { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { Timeline, Tween } from 'react-gsap';

import '../resources/css/test.scss';

function Animation2() {
    // var boxRef = useRef(null);
    // useEffect(() => {
    //     gsap.to('.ball', 2, {
    //         transform: 'translateX(200px)', 
    //         delay: .5, 
    //         ease: 'easeinout', 
    //         yoyo: true, 
    //         repeat: -1
    //     }
    // )}, [])

    return (
        <div className='inner'>
            <h2>gsap Animation</h2>
            <div className="gsap-wrap">
                {/* <div className="ball" ref={boxRef}></div> */}

                <Timeline
                    target={<div className="ball"></div>}
                >
                    <Tween from={{opacity : 0}} to={{opacity : 1}} duration={1} repeat={-1} yoyo={'true'} />
                    <Tween to={{ x:'200px'}} repeat={-1} yoyo={'true'}/>
                </Timeline>


            </div>
        </div>
    )
}
// export default Animation2


function Page1 () {
    return(
        <>
            <div className='inner'>
                { Animation2() }
            </div>
        </>
    );
}



export default Page1;