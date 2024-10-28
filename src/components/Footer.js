import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer( ) {


return (
    <div className='elegant-draskovic-kontakt'>
        <div className='kontakt-draskovic'>
            <h3>Kontakt</h3>
            <p>Miroslav Drašković</p>
            <a href="mailto:elegant.mts@gmail.com">elegant.mts@gmail.com</a>
            <br/>
            <a href='tel:+381633518'>+381 69 633 518</a>
        </div>
        <div className='instagram-elegant'>
            <a href='#'><img src='images/stan1.jpg'/></a>
        </div>

    </div>
    )
}

export default Footer;