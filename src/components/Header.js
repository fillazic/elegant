
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header( ) {

   const [isVisible, setIsVisible] = useState(false);

   const menuVis = () => {
    const sidemenu = document.querySelector('.menu-visible');
    const layer = document.querySelector('.underlayer');
    sidemenu.id = 'menuVisible';
    layer.id ='underlayerVidible';
  }

  const menuNotVis = () => {
    const sidemenu = document.querySelector('.menu-visible');
    const layer = document.querySelector('.underlayer');
    sidemenu.id = '';
    layer.id ='';
  }

   const changeVisibility = () => {
      setIsVisible(!isVisible)
   }


    return (
      <div className='header' >
        <div className='logo' >
          <img  src="./images/logo3.png" alt="logo"/>
          <a href='/'>
            <h2>
              ELEGANT<br/>
              <span className='draskovic'>Drašković</span>
            </h2>
          </a>
        </div>
          

        <div className='menu'>
          <a href="mailto:elegant.mts@gmail.com"><img  className='sedan-btn' src="images/mail-icon.svg" alt="car" onClick={changeVisibility} /></a>
          <a href='tel:+38163663518' ><img  className='search-btn-img' src="images/phone.svg" alt="search" /></a>
          <a><img  className='menu-btn' src="images/hamburger.svg" alt="menu" onClick={menuVis} /></a>
        </div>

        <div className='desctop-menu' >
              <div>
                <Link to='#' ><button className='nav-menu'> O nama </button></Link>
                <Link to='#' ><button className='nav-menu'> Galerija </button></Link>
                <Link to='#' ><button  className='nav-menu'> Lokacija </button></Link>
                <Link to='/stanovi' ><button className='nav-menu-stan'> Stanovi </button></Link>
              </div>
        </div>
        
        <div className='menu-visible' >
              <div className='profile-btn'>
              <img src="images/close.svg" alt="close" onClick={menuNotVis} />
                <Link to='#' ><button className='logIn' onClick={menuNotVis}> Lokacija </button></Link>
                <Link to='/stanovi' ><button className='logIn' onClick={menuNotVis}> Stanovi </button></Link>
                <Link to='#' ><button className='logIn' onClick={menuNotVis}> O nama </button></Link>
                <Link to='#' ><button className='logIn' onClick={menuNotVis}> Kontakt </button></Link>
              </div>
              <div className='under-profile'>
                
              </div>
        </div>

        <div className='underlayer' onClick={menuNotVis}>
        </div>

        </div>
    );
  }
  
  export default Header;