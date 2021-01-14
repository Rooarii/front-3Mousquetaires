import React from 'react';
import { Link } from 'react-router-dom';
import userpicture from '../images/userpicture.jpg';
import artilectlogo from '../images/artilectlogo.png'

export default function Navbar() {
  return(
    <div className="header-container">
      <div className="artilect-name">
        <img src={artilectlogo} alt='home button' />
        <h1>Artilect</h1>
      </div>
      <div className="profil">
        <button type='button'>Tutoriels</button>
        <Link to='/calendar' ><i class="far fa-calendar-plus"></i></Link>
        <i class="far fa-bell"></i>
        <img src={userpicture} alt='userpicture' />
      </div>
    </div>
  );
}