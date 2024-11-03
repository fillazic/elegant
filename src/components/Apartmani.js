import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stanovi from './NamesteniStanovi';
import izgradnja from './Stanovi';
import './Apartmani.css';

function Apartmani () {

const [povrsina, setPovrsina] = useState(null);

const images= ["images/stan8.jpg", "images/stan9.jpg", "images/stan10.jpg","images/stan11.jpg", "images/bazen.jpg"];
const [detalj, setDetalj] = useState(null)

 const filteredIzgradnja = izgradnja.filter(stan => {
        if (povrsina === 30) {
            return stan.povrsina <= 30;
        } else if (povrsina === 40) {
            return stan.povrsina >= 20 && stan.povrsina <= 40;
        } else if (povrsina === 60) {
            return stan.povrsina >= 40 && stan.povrsina <= 60;
        } else {
            return true; // Show all items if no filter is selected
        }
    });

const settings ={
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    waitForAnimate: false
    }

useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

return (
    <div className='elegant-apartmani'>
         <div className='apartmani-vrnjacka-banja'>
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
            </div>
            <div className='prodaja-apartmana'>
            <p>
                Namešteni stanovi
                <br/>
                Stanovi u izgradnji
            </p>         
        </div>
         <h3 className='vrnjacka-banja-apartmani'>Namešteni apartmani</h3>

         {stanovi.map((stan, index) => (
            <div className='namesteni-apartmani'>
                <div className='kraljevski-apartman'>
                    <div>
                        <img src={stan.slike[0]}/>
                    </div>
                </div>
                <h3>{stan.naslov}</h3>
                <div className='opis'>
                    <div>
                        <p>Kvadratura: {stan.povrsina}m2</p>
                        <p>Sprat: {stan.sprat}</p>
                    </div>
                    <Link to={`/${index}`} className='link' ><p className='pregled'>Detaljnije</p></Link>
                </div>
            </div>
         ))}

        <h3 className='elegant-apartmani-u-izgradnji'>Stanovi u izgradnji</h3>
        <div>
                <div className='selected-container'>                    
                        <select name="type" type='text' id="selected-items"  >
                                <option value="" >Svi spratovi</option>
                                <option value="4">četvrti sprat</option>
                                <option value="5">peti sprat</option>
                                <option value="6">šesti sprat</option>                             
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                    <div className='selected-container'>                    
                        <select name="type" type='text' id="selected-items" value={povrsina} onChange={(e) => setPovrsina(parseInt(e.target.value))} >
                                <option value="" >Sve kvadrature</option>
                                <option value="30">do 30m2</option>
                                <option value="40">20 - 40m2</option>
                                <option value="60">40 - 60m2</option>                         
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
        </div>

            {filteredIzgradnja.map((stan, index) => (
                <div className='apartmani-u-izgradnji'>
                    <div className='sema'>                  
                        <div>
                            <img src={stan.slike} />
                        </div>
                    </div>
                        <div>
                            <p>Kvadratura: {stan.povrsina}m2</p>
                            <p>Sprat: {stan.sprat}</p>
                        </div>
                        <p className='pregled-izgradnje' onClick={() => setDetalj(stan.slike)}>Detaljnije</p>
                </div>
                ))}
            <div className={ detalj !== null ? 'full-img' : 'non-full'}  onClick={() => setDetalj(null)} >
                <div className='detaljnije' onClick={(e) => e.stopPropagation()}>
                    <div className='detalj-pozadina'>
                        <span className="close-button-stan"  onClick={() => setDetalj(null)} >&times;</span>
                        <img src={detalj} className="full-image-stan" alt='stanovi-vrnjacka-banja'/>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Apartmani;