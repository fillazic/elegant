import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageFull from './ImageFull';
import './ImageSlider.css';


function ImageSlider() { 

const images= ["images2/apartman7.jpg","images2/apartman0.jpg", "images2/apartman2.jpg","images2/apartman3.jpg","images2/apartman4.jpg"];
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

    useEffect(() => {
      // Select all elements with the "animated-element" class
      const elements = document.querySelectorAll('.animacija');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate'); // Add animation class
            } else {
              entry.target.classList.remove('animate'); // Remove animation class to reverse
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the element is visible
        }
      );
  
      // Observe each element with the "animated-element" class
      elements.forEach((element) => {
        observer.observe(element);
      });
  
      // Cleanup observer on component unmount
      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    }, []);
  
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
                Direktna prodaja stanova
                <br/>
                Izdavanje apartmana
            </p>
            <Link to='stanovi'>
            <button className='stanovi'>
                STANOVI
            </button>
            </Link>
        </div>


       <div className='dsct-zgrada'>
            <div className='direktna-prodaja'>
                            <p>
                                Direktna prodaja stanova
                                <br/>
                                Izdavanje apartmana
                            </p>
            </div>
            <ul className='lista'>
                <li>- BAZEN NA OTVORENOM</li>
                <li>- PANORAMSKI KAFE-RESTORAN</li>
                <li>- LOBI BAR</li>
                <li>- RECEPCIJA</li>
            </ul>
            <div className='layer'>
                <div className='adresa'>
                    <p>Heroja Maričića 57a</p>
                    <p>Vrnjačka Banja</p>
                    <h3>KONTAKT</h3>
                    <p>Miroslav Drašković</p>
                    <p>elegant.mts@gmail.com</p>
                    <p>+381 69 633 518</p>
                </div>

                <div>

                </div>
            </div>
       </div>

       <div className='zgrada-elegant' id="elegant-zgrada">

            <div class="line-container">E</div>
            <div className='opis-pocetna'>
                <div className='text animacija'>
                <h3>Lokacija - Gde se nalazimo?</h3>
                    Objekat se nalazi na 200m od Banjskog šetališta, pa osim što je povoljno lociran u odnosu na sve lokacije koje je važno posetiti
                    po dolasku u Vrnjačku Banju, opet je dovoljno izdvojen i ušuškan kako bi svaki gost ili kupac koji poželi da bude smešten baš ovde imao svoj mir.
                </div>
                <img src='images/krov2.jpg' />
            </div>
            <div className='opis-pocetna' >
                <img src='images/ulaz.jpg' className='slika1' />
                <div className='animacija'>
                <h3>O projektu</h3>
                    Stambeno - poslovna zgrada Elegant-Drašković nastala je idejom tvorca ovog savremenog objekta da posetiocima i gostima ponudi veliki broj sadržaja
                    , kako za rekreaciju tako i za odmor, gde bi i oni najmlađi i najstariji gosti mogli da pronadju  svoj kutak i da u potpunosti iskoriste pogodnsti koje ovaj objekat nudi.
                </div>
                <img src='images/ulaz.jpg' className='slika2'/>
            </div>
            <div class="line-container">E</div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9969772911054!2d20.889426575108825!3d43.62742185409933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475657f62cb008fb%3A0x49048b68e6055967!2sElegant%20Draskovic!5e0!3m2!1ssr!2srs!4v1730224240414!5m2!1ssr!2srs"            
                allowfullScreen="" 
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



 /*                <ul className='dodatak lista'>
                        <li>VIDEO NADZOR</li>
                        <li>ALU STOLARIJA</li>
                        <li>KARTIČNI SISTEM</li>
                        <li>PAMETNA ZGRADA</li>
                        <li>LIFT</li>
                        <li>PERIONICA</li>
                </ul>

*/