import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../resources/css/test.scss';

function Page2() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <>
            <div className="inner aos-ex">
                <div className="box" data-aos="fade-left" data-aos-duration="2000" aos-easing="ease-in-out-back" data-aos-offset="300" >
                    <h2>메뉴2의 페이지입니다.</h2>
                </div>
                <div className="box1" data-aos="fade-up" data-aos-duration="3000" aos-easing="ease-in-out" data-aos-offset="100" >
                    <h2>section2</h2>
                    <ul className="word-sep">
                        <li data-aos="zoom-out-right" data-aos-duration="300">1</li>
                        <li data-aos="zoom-out-right" data-aos-duration="8000">2</li>
                        <li data-aos="zoom-out-right" data-aos-duration="1100">3</li>
                        <li data-aos="zoom-out-right" data-aos-duration="1500">4</li>
                        <li data-aos="zoom-out-right" data-aos-duration="1800">5</li>
                    </ul>
                </div>
                
            </div>
        </>
    );
}

export default Page2;