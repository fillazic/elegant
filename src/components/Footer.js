import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer( ) {


return (
    <div className='elegant-draskovic-kontakt'>
        <div className='kontakt-draskovic'>
            <h3>Kontakt</h3>
            <p>Miroslav Drašković</p>
            <a href="mailto:elegant.mts@gmail.com">elegant.mts@gmail.com</a>          
            <a href='tel:+381663518'>+381 69 663 518</a>
        </div>
        <div className='instagram-elegant'>
            <h3>Pratite nas</h3>
            <a href='#'><img src='images/instagram.svg' alt='instagram-draskovic'/></a>
            <a href='#'><img src='images/facebook.svg' alt='facebook-draskovic'/></a>
            <a href='#'><img src='images/tiktok.svg' alt='tiktok-draskovic'/></a>
        </div>

        <div className='elegant-copy-rights'>
            <p>2024 ELEGANT Drašković © All rights reserved</p>
        </div>

    </div>
    )
}

export default Footer;