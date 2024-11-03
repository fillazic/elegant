import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageFull from './ImageFull';
import './ImageSlider.css';


function ImageSlider() { 

const images= ["images/stan3.jpg", "images/stan4.jpg", "images/stan5.jpg"];
const [activeSlide, setActiveSlide] = useState(0);
const [isOpen, setIsOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const handleSlideChange = (next) => {
        setActiveSlide(next); 
    };

const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
      };
      
const closeModal = () => setIsOpen(false);


const settings ={
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3400,
    arrows: false,
    fade: true,
    waitForAnimate: false,
    cssEase: "ease",
    beforeChange: (current, next) => handleSlideChange(next)
    }


return (
    
    <div className='apartmani'>
        <div className='okvir-slike'>
            <Slider {...settings} className='slike'>               
                    {images.map((img, index) => (
                            <img
                                src={img}
                                alt={'draskovic'}
                                key={index}
                               className={`image-slider ${index === activeSlide ? "zoom-out" : ""}`}
                            />
                    ))}
            </Slider>
        </div>
        <div className='prodaja-stanova'>
            <p>
                - Direktna prodaja stanova
                <br/>
                - Izdavanje apartmana
            </p>
            <Link to='stanovi'>
            <button className='stanovi'>
                STANOVI
            </button>
            </Link>
        </div>
       <div className='zgrada-elegant'>
            <ul>
                <li>BAZEN NA OTVORENOM</li>
                <li>PANORAMSKI KAFE-RESTORAN</li>
                <li>LOBI BAR</li>
                <li>RECEPCIJA</li>
                <li>TERETANA</li>
            </ul>
            <p>
                Stambeno - poslovna zgrada Elegant-Drašković nastala je idejom tvorca ovog savremenog objekta da posetiocima i gostima ponudi veliki broj sadržaja
                , kako za rekreaciju tako i za odmor, gde bi i oni najmlađi i najstariji gosti mogli da pronadju  svoj kutak i da u potpunosti iskoriste pogodnsti koje ovaj objekat nudi.
            </p>
            <div className='bazen'>
                <img src='images/bazen.jpg' />
            </div>
       </div>

       <div className='zgrada-elegant' id="elegant-zgrada">
            <p>
                Objekat se nalazi na 200m od Banjskog šetališta, pa osim što je povoljno lociran u odnosu na sve lokacije koje je važno posetiti
                po dolasku u Vrnjačku Banju, opet je dovoljno izdvojen i ušuškan kako bi svaki gost ili kupac koji poželi da bude smešten baš ovde imao svoj mir.
            </p>
            <ul className='dodatak'>
                <li>VIDEO NADZOR</li>
                <li>ALU STOLARIJA</li>
                <li>KARTIČNI SISTEM</li>
                <li>PAMETNA ZGRADA</li>
                <li>LIFT</li>
                <li>PERIONICA</li>
            </ul>
            <h3 className='lokacija'>Lokacija</h3>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9969772911054!2d20.889426575108825!3d43.62742185409933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475657f62cb008fb%3A0x49048b68e6055967!2sElegant%20Draskovic!5e0!3m2!1ssr!2srs!4v1730224240414!5m2!1ssr!2srs"            
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">      
            </iframe>
            </div>
            <h3 className='galerija-slika'>Galerija</h3>
            <div className='galerija'>
            {images.map((img, index) => (
                <div key={index}>
                        <img
                            src={img}
                            alt='draskovic'
                            onClick={() => openModal(index)}                       
                        />
                </div>
                ))}
            </div>
            <ImageFull isOpen={isOpen}
                    onClose={closeModal}
                    imgs={images}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex} 
                />
       </div>
    </div>
)

 }

 export default ImageSlider