import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import izgradnja from './Stanovi';
import './Apartmani.css';

function Apartmani( ) {

const [povrsina, setPovrsina] = useState(null); // Set initial value to null or any default value
const [sprat, setSprat] = useState(null);

const images= ["images/kuca.jpg" , "images/stan3.jpg", "images/stan4.jpg", "images/stan5.jpg"];

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

return (
    <div className='elegant-apartmani'>
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
        </div>
         <h3 className='elegant-apartmani-u-izgradnji'>Namesteni apartmani</h3>

        <div className='namesteni-apartmani'>
            <div className='kraljevski-apartman'>
                <h3>Kraljevski Apartman - 406</h3>
                <div>
                    <img src='images/stan1.jpg'/>
                </div>
            </div>
            <div className='opis'>
                <div>
                    <p>  Kvadratura: 78m2</p>
                </div>
                <p className='pregled'>Detaljnije</p>
            </div>
        </div>

        <h3 className='elegant-apartmani-u-izgradnji'>Apartmani u izgradnji</h3>
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
                        <p className='pregled-izgradnje'>Detaljnije</p>
                </div>

                ))}
    </div>
    )
}

export default Apartmani;