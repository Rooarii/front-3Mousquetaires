import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import userpicture from '../images/userpicture.jpg';
import artilectlogo from '../images/artilectlogo.png'
import App from '../App'

export default function Navbar() {
  return(
    <Router>
    <div className="header-container">
      <Link to="/" >
      <div className="artilect-name">
        <img src={artilectlogo} alt='home button' />
        <h1>Artilect</h1>
      </div>
      </Link>
      <div className="profil">
        <button type='button'>Tutoriels</button>
        <i class="far fa-calendar-plus"></i>
        <i class="far fa-bell"></i>
        <img src={userpicture} alt='userpicture' />
      </div>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
    </Router>
  );
}