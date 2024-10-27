
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

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

        <div className='desctop-btn'>
         <div className='my-profile' >
            <div className='container-log'> 
                <h3 className='logProfile'>
                    My Profile
                </h3>
                <div className='h-icon'>
                  <i className='fa fa-caret-down' ></i>
                </div>
            </div>      
            <div className= 'profile' >
              <button>My Posts</button>
              <button >Log out</button>
            </div>
            </div>

          <Link to='/add_post'><button className='post'>POST AN AD</button></Link>
        </div>

        <div className='menu'>
          <img  className='sedan-btn' src="images/mail-icon.svg" alt="car" onClick={changeVisibility} />
          <img  className='search-btn-img' src="images/phone.svg" alt="search" />
          <img  className='menu-btn' src="images/hamburger.svg" alt="menu" onClick={menuVis} />
        </div>
        
        <div className='menu-visible' >
              <div className='profile-btn'>
              <img src="images/close.svg" alt="close" onClick={menuNotVis} />
                <a href='#' ><button className='logIn' onClick={menuNotVis}> Lokacija </button></a>
                <a href='#' ><button className='logIn' onClick={menuNotVis}> Stanovi </button></a>
                <a href='#' ><button className='logIn' onClick={menuNotVis}> O nama </button></a>
                <a href='#' ><button className='logIn' onClick={menuNotVis}> Kontakt </button></a>
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