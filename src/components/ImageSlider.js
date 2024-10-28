import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';


function ImageSlider() { 

const images= ["images/kuca.jpg" , "images/stan3.jpg", "images/stan4.jpg", "images/stan5.jpg"];

const settings ={
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    }

return (
    <div className='apartmani'>
        <Slider {...settings} className='slike'>               
                {images.map((img, index) => (
                        <img
                            src={img}
                            alt={'draskovic'}
                            key={index}
                            className="image-slider"
                        />
                ))}
            </Slider>
        <div className='prodaja-stanova'>
            <p>
                - Direktna prodaja stanova
                <br/>
                - Izdavanje apartmana
            </p>
            <button className='stanovi'>
                STANOVI
            </button>
        </div>
       <div className='zgrada-elegant'>
            <p>
                Stambeno - poslovna zgrada Elegant-Drašković nastala je idejom tvorca ovog savremenog objekta da posetiocima i gostima ponudi veliki broj sadržaja
                , kako za rekreaciju tako i za odmor, gde bi i oni najmlađi i najstariji gosti mogli da pronadju  svoj kutak i da u potpunosti iskoriste pogodnsti koje ovaj objekat nudi:
            </p>
            <ul>
                <li>- BAZEN NA OTVORENOM</li>
                <li>- PANORAMSKI KAFE-RESTORAN NA 7. ETAŽI</li>
                <li>- LOBI BAR</li>
                <li>- RECEPCIJA</li>
                <li>- TERETANA</li>
            </ul>
            <div className='bazen'>
                <img src='images/bazen.jpg'/>
            </div>
       </div>

       <div className='zgrada-elegant'>
            <p>
                Objekat se nalazi na 200m od Banjskog šetališta, pa osim što je povoljno lociran u odnosu na sve lokacije koje je važno posetiti
                po dolasku u Vrnjačku Banju, opet je dovoljno izdvojen i ušuškan kako bi svaki gost ili kupac koji poželi da bude smešten baš ovde imao svoj mir.
            </p>
            <ul>
                <li>- VIDEO NADZOR</li>
                <li>- ALU STOLARIJA</li>
                <li>- KARTIČNI SISTEM</li>
                <li>- PAMETNA ZGRADA</li>
                <li>- LIFT</li>
                <li>- PERIONICA</li>
            </ul>
       </div>
    </div>
)

 }

 export default ImageSlider