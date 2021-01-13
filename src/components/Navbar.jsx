import React from 'react';

import userpicture from '../images/userpicture.jpg';

export default function Navbar() {
  return(
    <div className="header-container">
      <div className="picture-profil">
        <img src={userpicture} alt='userpicture' />
      </div>
      <div className="artilect-name">
        <h1>Artilect</h1>
      </div>
      <div className="burger-container">
      </div>
    </div>
  );
}