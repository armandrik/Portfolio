import React from 'react'
import Slider from "react-slick";
import { album } from '../../data';

export const SkillSlider = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2,
        cssEase: "linear",
        arrows: false,
        draggable: false,
        pauseOnHover: false,
        touchMove: false,
    };

    return (
        <div className='skill-slider'>
            <Slider {...settings}>
                {album.map(item =>
                    <div key={item.id} className='skill-slider-icon'>
                        <img src={item.src} alt={item.src} />
                    </div>
                )}
            </Slider>
        </div>
    )
}
