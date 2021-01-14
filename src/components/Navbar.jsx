import React from 'react';

import userpicture from '../images/userpicture.jpg';
import artilectlogo from '../images/artilectlogo.png'

export default function Navbar() {
  return(
    <div className="header-container">
      <div className="profil">
        <img src={userpicture} alt='userpicture' />
      </div>
      <div className="artilect-name">
        <h1>Artilect</h1>
        {/* <i class="fas fa-bars" /> */}
        <img src={artilectlogo} alt='manu' />
      </div>
      <div className="burger-container">
      </div>
    </div>
  );
}