import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import userpicture from '../images/userpicture.jpg';
import artilectlogo from '../images/artilectlogo.png'

import Notificaton from './Notification';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return(
    <Fragment>
      <div className="header-container">
        <div className="artilect-name">
          <Link to='/'>
            <img src={artilectlogo} alt='home button' />
          </Link>
          <Link to='/'>
            <h1>Artilect</h1>
          </Link>
        </div>
        <div className="profil">
          <button type='button'>Tutoriels</button>
          <Link to='/calendar'>
            <i class="far fa-calendar-plus" />
          </Link>
          <i class="far fa-bell" onClick={() => setOpen(!open)} />
          <img src={userpicture} alt='userpicture' />
        </div>
      </div>
      {
        open && <Notificaton />
      }
    </Fragment>
  );
}
