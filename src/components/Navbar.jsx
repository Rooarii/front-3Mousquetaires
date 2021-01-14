import React from "react";
import userpicture from "../images/userpicture.jpg";
import artilectlogo from "../images/artilectlogo.png";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header-container">
      <div className="artilect-name">
        <img src={artilectlogo} alt="home button" />
        <Link className="link-router" to="/">
          <h1>Artilect</h1>
        </Link>
      </div>
      <div className="profil">
        <button type="button">Tutoriels</button>
        <i class="far fa-calendar-plus"></i>
        <i class="far fa-bell"></i>
        <img src={userpicture} alt="userpicture" />
      </div>
    </div>
  );
}
