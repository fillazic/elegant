import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import stanovi from './NamesteniStanovi';
import ImageFull from './ImageFull';
import './DetaljiStana.css';

function DetaljiStana() {

const {id}  = useParams();
const stan = stanovi[id];
const [isOpen, setIsOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };
  
const closeModal = () => setIsOpen(false);

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

return (
    <div className='detalji-apartmana'>
        <div className='pocetak'>
            <h2>{stan.naslov}</h2>
            <p>{stan.opis}</p>
            <p>{stan.opis2}</p>
       </div>
        <img src={stan.slike[4]} alt='apartmani-vb' className='slika-apart'/>

        <h3 className='galerija-slika'>Galerija</h3>
            <div className='galerija'>
            {stan.slike.map((img, index) => (
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
                    imgs={stan.slike}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex} 
                />
        </div>
    )
}

export default DetaljiStana;

/*
 <table>
                <tr>
                <td className='one'>1.</td>
                <td className='two'>Kuhinja i trpezarija</td>
                <td className='three'>18.96m2</td>
                </tr>
                <tr>
                <td className='one'>2.</td>
                <td className='two'>Dnevni boravak</td>
                <td className='three'> 17.34m2</td>
                </tr>
                <tr>
                <td className='one'>3.</td>
                <td className='two'>2.</td>
                <td className='three'>2.</td>
                </tr>
                <tr>
                <td className='one'>4.</td>
                <td className='two'>2.</td>
                <td className='three'>2.</td>
                </tr>
                <tr>
                <td className='one'>5.</td>
                <td className='two'>2.</td>
                <td className='three'>2.</td>
                </tr>
                <tr>
                <td className='one'>6.</td>
                <td className='two'>2.</td>
                <td className='three'>2.</td>
                </tr>
                <tr>
                <td className='one'>7.</td>
                <td className='two'>2.</td>
                <td className='three'>2.</td>
                </tr>
                <tr>
                <td className='one'>8.</td>
                <td className='two'>2.</td>
                <td className='three'>2.</td>
                </tr>
            </table>

            */