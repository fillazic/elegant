import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';


function ImageSlider() { 

const images= ["images/kuca.jpg" , "images/stan1.jpg", "images/stan2.jpg"];

const settings ={
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 
    }

return (
    <div>
        <Slider {...settings} className='car-card'>               
                {images.map((img, index) => (
                        <img
                            src={img}
                            alt={'stan'}
                            key={index}
                            className="image-slider"
                        />
                ))}
            </Slider>
    </div>
)

 }

 export default ImageSlider